import page from 'page'


/**
 * Using `page.js` for routing
 * Functions will initiate and bind routing paths
 * Using `express` like routing aproach, there will
 * be different function call on route change.
 */
export default function initRoutes() {
  const routes = {
    // No Need to pass context and next everytime, Planning to store
    // data in context object in future.
    landing : function(context, next){
      alert('Landing BC')
    },
    test : function(context, next){
      alert('Test Route')
    }
  }

  // Set base URL, all paths will include the base path
  // page.base('/app/')
  page('/', routes.landing)
  page('/test', routes.test)
  page()
}