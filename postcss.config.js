/*import rucksack from 'rucksack-css'
import cssnext from 'postcss-cssnext'
*/
module.exports = {
  plugins: [
    require('autoprefixer')({
      remove : true
    }),
    require('postcss-zindex'),
    require('colorguard'),
    // to load assets,
    // set relative paths,
    // Cache burst(not using at the moment)
    // use `resolve('abc.png')` to resolve image accordingly
    // more details: https://github.com/borodean/postcss-assets#usage
    require('postcss-assets')({
      cachebuster : true,
      loadPaths   : ['fonts/', 'images/']
    }),
    require('postcss-image-set-polyfill'),
    require('postcss-color-rgba-fallback')({
      oldie : true
    }),
  ]
}