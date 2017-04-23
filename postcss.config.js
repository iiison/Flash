/*import rucksack from 'rucksack-css'
import cssnext from 'postcss-cssnext'
*/
module.exports = {
  plugins: [
    /*// Add prefix for specific browsers, look into
    // browserlist file for supported browsers
    require('autoprefixer'),*/
    // to load assets,
    // set relative paths,
    // Cache burst(not using at the moment)
    // use `resolve('abc.png')` to resolve image accordingly
    // more details: https://github.com/borodean/postcss-assets#usage
    require('postcss-assets')({
      cachebuster : true,
      loadPaths   : ['fonts/', 'images/']
    }),
    // Optimize CSS
    // for more details: http://cssnano.co/optimisations/
    require('cssnano'),

    require('postcss-unique-selectors'),
    require('postcss-merge-rules'),
    require('postcss-merge-longhand'),
    require('postcss-discard-duplicates'),
    require('postcss-discard-comments'),
  ]
}