/*import rucksack from 'rucksack-css'
import cssnext from 'postcss-cssnext'
*/
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-assets')({
      cachebuster: true
    }),
    require('cssnano'),
    require('postcss-unique-selectors'),
    require('postcss-merge-rules'),
    require('postcss-merge-longhand'),
    require('postcss-discard-unused'),
    require('postcss-discard-duplicates'),
    require('postcss-discard-comments')
  ]
}