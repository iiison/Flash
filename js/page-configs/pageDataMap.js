import controller from '$js/Controller'

/**
 * Create and return a map for page name and data required
 * @param  {String} viewName  View name for which data is required.
 * @return {Object}          Data needed for that page
 */
export default function pageDataMap(viewName) {
  const modelData = controller.model.get()

  const map = {
    login() {
      return {
        userDetails : modelData.userDetails,
        homePage    : modelData.homePage
      }
    },
    home() {
      return {
        homePage : modelData.homePage
      }
    }
  }

  console.log('%c <><><><><><><><><><><><><><><>', 'color: green, font-weight: bold')
  console.log(map[viewName]())
  console.log('%c <><><><><><><><><><><><><><><>', 'color: green, font-weight: bold')

  return map[viewName]()
}
