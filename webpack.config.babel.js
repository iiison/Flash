/*
                                   ,...,,
  .g8"""bgd                      .d' ""db
.dP'     `M                      dM`
dM'       ` ,pW"Wq.`7MMpMMMb.   mMMmm`7MM  .P"Ybmmm
MM         6W'   `Wb MM    MM    MM    MM :MI  I8
MM.        8M     M8 MM    MM    MM    MM  WmmmP"
`Mb.     ,'YA.   ,A9 MM    MM    MM    MM 8M
  `"bmmmd'  `Ybmd9'.JMML  JMML..JMML..JMML.YMMMMMb
                                          6'     dP
                                          Ybmmmd'
*/

import path              from 'path'
import webpack           from 'webpack'
// import webpackLoadPlugins from 'webpack-load-plugins'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import StyleLintPlugin   from 'stylelint-webpack-plugin'

import devStyleConfig from './build-configs/style-config-dev'

console.log('%c <><><><><><><><><><><><><><><>', 'color: green, font-weight: bold')
console.log(devStyleConfig)
console.log('%c <><><><><><><><><><><><><><><>', 'color: green, font-weight: bold')
const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProd         = LAUNCH_COMMAND === 'production'
const PATHS          = {
  js         : path.join(__dirname, 'js'),
  styles     : path.join(__dirname, 'styles'),
  build      : path.join(__dirname, 'build'),
  buildConfs : path.join(__dirname, 'build-configs')
}

// Plugins Config Starts
const prodPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template : path.resolve('.') + '/index.html',
  filename : 'index.html',
  inject   : 'body'
})

const commonsVendorChunk = new webpack.optimize.CommonsChunkPlugin({
  name      : 'vendor',
  minChunks : Infinity,
  filename  : 'vendor.commons.js'
})

const extractTextPluginConfig = new ExtractTextPlugin({
  allChunks : false,
  filename  : '[name]_[contenthash].css'
})

const styleLintConfig = new StyleLintPlugin({
  failOnError : true,
  files       : '**/*.css',
  context     : './',
  failOnError : false,
  configFile  : 'stylelint.config.js'
})
// Plugins Config Ends

// Style loader configs
const cssNanoConf = {
  calc                   : true,
  colormin               : true,
  core                   : true,
  discardDuplicates      : true,
  discardOverridden      : true,
  mergeLonghand          : true,
  minifyFontValues       : true,
  minifyParams           : true,
  normalizeCharset       : true,
  orderedValues          : true,
  reduceDisplayValues    : true,
  styleCache             : true,
  uniqueSelectors        : true,
  convertValues          : true,
  discardComments        : true,
  discardEmpty           : true,
  discardUnused          : true,
  filterPlugins          : true,
  mergeIdents            : true,
  mergeRules             : true,
  minifySelectors        : true,
  normalizeString        : true,
  normalizeUrl           : true,
  reduceBackgroundRepeat : true,
  reduceTransforms       : true
}

const styleLoader = {
  fallback: 'style-loader',
  use : [
    {
      loader  : 'css-loader',
      options : {
        importLoaders  : 1,
        modules        : true,
        import         : true,
        minimize       : cssNanoConf,
        sourceMap      : isProd == true ? false : true,
        camelCase      : true,
        localIdentName : '[path][name]---[local]---[hash:base64:5]'
      }
    },
    {
      loader : 'postcss-loader'
    }
  ]
}

process.env.BABEL_ENV = LAUNCH_COMMAND
process.env.LINT_ENV  = LAUNCH_COMMAND
process.env.isProd    = isProd

const base = {
  entry : {
    bundle : `${PATHS.js}/controller.js`,
    vendor : ['axios'],
    styles : `${PATHS.styles}/main.css`,
  },
  output: {
    path       : PATHS.build,
    filename   : '[name].js',
    publicPath : '/'
  },
  module : {
    rules : [
      {
        enforce : 'pre',
        test    : /\.js$/,
        use     : 'eslint-loader',
        include : PATHS.js,
        exclude : /bundle\.js/
      },
      {
        test    : /\.js$/,
        exclude : [/bundle\.js/, PATHS.buildConfs],
        use     : 'babel-loader'
      },
      {
        test   : /\.tpl$/,
        use    : 'handlebars-loader'
      },
      {
        test    : /\.css$/,
        exclude : /node_modules/,
        use     : isProd === true ? ExtractTextPlugin.extract(styleLoader) : devStyleConfig
        // use     : ExtractTextPlugin.extract(styleLoader)
      }
    ]
  },
  resolve : {
    modules    : [path.resolve('.'), 'node_modules'],
    extensions : ['.js'],
    alias      : {
      '$js'  : PATHS.js,
      '$lib' : `${PATHS.js}/lib`,
    }
  },
  target : 'web'
}

const commonPlugins = [HTMLWebpackPluginConfig, commonsVendorChunk, styleLintConfig]

const prodConf = {
  devtool : 'false',
  plugins : commonPlugins.concat([prodPlugin, extractTextPluginConfig])
}

const devConf = {
  devtool   : 'cheap-module-inline-source-map',
  devServer : {
    contentBase : PATHS.build,
    hot         : true,
    inline      : true
  },
  plugins: commonPlugins.concat([new webpack.HotModuleReplacementPlugin()])
}

export default Object.assign({}, base, isProd ? prodConf : devConf)
