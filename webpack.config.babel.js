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

import path               from 'path'
import webpack            from 'webpack'
// import webpackLoadPlugins from 'webpack-load-plugins'
import HtmlWebpackPlugin  from 'html-webpack-plugin'

const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProd         = LAUNCH_COMMAND === 'production'
const PATHS          = {
  js         : path.join(__dirname, 'js'),
  build      : path.join(__dirname, 'build')
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
// Plugins Config Ends

process.env.BABEL_ENV = LAUNCH_COMMAND
process.env.LINT_ENV  = LAUNCH_COMMAND
process.env.isProd    = isProd

const base = {
  entry : {
    bundle : `${PATHS.js}/controller.js`,
    vendor : ['axios']
  },
  module : {
    rules : [
      {
        enforce : 'pre',
        test    : /\.js$/,
        loader  : 'eslint-loader',
        include : PATHS.app,
        exclude : /bundle\.js/
      },
      {
        test    : /\.js$/,
        exclude : /node_modules/,
        loader  : 'babel-loader'
      }
    ]
  },
  resolve : {
    modules    : [path.resolve('.'), 'node_modules'],
    extensions : ['.js'],
    alias      : {
      '$js' : PATHS.js,
    }
  },
  target : 'web'
}

const commonPlugins = [HTMLWebpackPluginConfig, commonsVendorChunk]

const prodConf = {
  devtool : 'false',
  plugins : commonPlugins.concat([prodPlugin])
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
