import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader'
import { buildFileLoader } from './loaders/buildFileLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const svgLoader = buildSvgLoader()
  const codeBabelLoader = buildBabelLoader({
    ...options,
    isTsx: false,
  })
  const tsxCodeBabelLoader = buildBabelLoader({
    ...options,
    isTsx: true,
  })
  const cssLoader = buildCssLoader(isDev)
  const typescriptLoader = buildTypescriptLoader()
  const fileLoader = buildFileLoader()

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    // typescriptLoader,
    cssLoader,
  ]
}
