import { chalk } from '@tarojs/helper'
import { createHash } from 'crypto'
import enhancedResolve from 'enhanced-resolve'
import fs from 'fs-extra'
import path from 'path'
import { performance } from 'perf_hooks'

import type { Combination } from '../webpack/Combination'
import type { CollectedDeps } from './constant'

export interface Metadata {
  bundleHash?: string
  mfHash?: string
  taroRuntimeBundlePath?: string
  runtimeRequirements?: Set<string>
  remoteAssets?: { name: string }[]
}

let resolve: (importer: string, request: string) => Promise<string>
export function createResolve (appPath: string, resolveOptions) {
  const defaultResolveOptions = {
    conditionNames: ['require', 'import', 'module', 'webpack', 'development', 'browser'],
    aliasFields: ['browser'],
    cache: true,
    mainFiles: ['index'],
    exportsFields: ['exports'],
    roots: appPath
  }
  const resolver = enhancedResolve.create({
    ...defaultResolveOptions,
    ...resolveOptions
  })
  resolve = function (importer: string, request: string): Promise<string> {
    return new Promise((resolve, reject) => {
      resolver({}, importer, request, {}, (err, resolvedPath) => {
        if (err) return reject(err)
        resolve(resolvedPath)
      })
    })
  }
}
export function getResolve () {
  return resolve
}

export function externalModule ({ path }: { path: string }) {
  return {
    path,
    external: true
  }
}

export function canBeOptimized (path: string) {
  return /\.[jt]sx?$/.test(path)
}

export function canBeScaned (path: string) {
  return /\.vue/.test(path)
}

export function flattenId (id: string) {
  return id.replace(/(\s*>\s*)/g, '__').replace(/[/.:]/g, '_')
}

export function getCacheDir (appPath: string) {
  return path.resolve(appPath, './node_modules/.taro', process.env.TARO_ENV || '')
}

export function getDefines (combination: Combination) {
  let defines
  combination.chain.plugin('definePlugin').tap(args => {
    defines = args[0]
    return args
  })
  return defines
}

export function isExclude (id: string, excludes: string[]) {
  return Boolean(excludes.find(item => {
    const dollarTailRE = /\$$/

    if (dollarTailRE.test(item)) {
      // 全路径匹配
      item = item.replace(dollarTailRE, '')
      if (item === id) return true
    } else {
      if (item === id || id.startsWith(item + '/')) return true
    }
  }))
}

export function getHash (content: string) {
  return createHash('sha256').update(content).digest('hex').substring(0, 8)
}

export async function getBundleHash (deps: CollectedDeps, combination: Combination, cacheDir: string): Promise<string> {
  const appPath = combination.appPath
  const defines = getDefines(combination)
  const lockfiles = ['package-lock.json', 'yarn.lock', 'pnpm-lock.yaml']
  const lockfilesContents = await Promise.all(lockfiles.map(item => {
    return new Promise<string>(resolve => {
      fs.readFile(path.join(appPath, item))
        .then(content => resolve(content.toString()))
        .catch(() => resolve(''))
    })
  }))
  return getHash(
    formatDepsString(deps) +
    lockfilesContents.join('\n') +
    JSON.stringify(defines) +
    cacheDir
  )
}

export function formatDepsString (deps: CollectedDeps) {
  const list = Array.from(deps.entries())
  list.sort((a, b) => a[0].localeCompare(b[0]))
  return JSON.stringify(list)
}

export function getMfHash (obj: Record<string, any>) {
  return getHash(JSON.stringify(obj))
}

export async function commitMeta (appPath: string, metadataPath: string, metadata: Metadata) {
  // Todo: 改为相对路径
  await fs.writeJSON(metadataPath, metadata, {
    spaces: 2,
    replacer (key, value) {
      if (value instanceof Set) {
        return Array.from(value)
      }
      if (key === 'taroRuntimeBundlePath') {
        return path.relative(appPath, value)
      }
      return value
    }
  })
}

export function getMeasure (isLogTiming?: boolean) {
  return function (name: string, start: number) {
    if (isLogTiming) {
      const now = performance.now()
      const duration = now - start
      console.log(chalk.cyan(`${name}: ${Math.round(duration)}ms\n`))
    }
  }
}
