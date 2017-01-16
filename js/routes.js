import page from 'page'

/**
 * Using `page.js` for routing
 * Functions will initiate and bind routing paths
 * Using `express` like routing aproach, there will
 * be different function call on route change.
 */
/**
 * Using `page.js` routing
 * Functions will initiate and bind routing paths
 * Using `express` like routing aproach, there will
 * be different function call on route change.
 * @param  {Controller} controller  controller reference
 */
export default function initRoutes(controller) {
  if (controller) {
    const routes = {
      // No Need to pass context and next everytime, Planning to store
      // data in context object in future.
      landing() {
        controller.view.set('viewName', 'login')
      },
      test() {
        alert('Test Route')
      }
    }

    // Set base URL, all paths will include the base path
    // page.base('/app/')
    page('/', routes.landing)
    page('/test', routes.test)
    page()
  }
}
