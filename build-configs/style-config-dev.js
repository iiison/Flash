import cssNanoConfigs from './cssNanoConfigs.json'

const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProd         = LAUNCH_COMMAND === 'production'

const devStyleConfig = [
  {
    'loader' : 'style-loader',
  },
  {
    'loader'  : 'css-loader',
    options : {
      importLoaders  : 1,
      modules        : true,
      import         : true,
      minimize       : cssNanoConfigs,
      sourceMap      : isProd == true ? false : true,
      camelCase      : true,
      localIdentName : '[path][name]---[local]---[hash : base64 : 5]'
    }
  },
  {
    loader : 'postcss-loader'
  }
]

export default devStyleConfig
