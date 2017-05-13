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
    // Grid
    require('lost'),
    // Syntatical Sugar
    // http://simplaio.github.io/rucksack/docs
    require('rucksack-css'),
    // SASS Like syntax:
    // Variables, Loops, Inheritance, Import, Mixins.
    // https://github.com/jonathantneal/precss
    require('precss')
  ]
}