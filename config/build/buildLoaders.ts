import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader'
import { buildFileLoader } from './loaders/buildFileLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = buildSvgLoader()

  const babelLoader = buildBabelLoader()

  const cssLoader = buildCssLoader(isDev)

  // If we don’t use typescript, we need babel-loader
  const typescriptLoader = buildTypescriptLoader()

  const fileLoader = buildFileLoader()

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ]
}
