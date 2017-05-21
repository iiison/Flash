/**
 * Fetches Template Chunks according to different routes
 * @param  {String} templateName  viewName
 * @return {Function}             Handlebars template function
 */
export function getTemplate(templateName) {
  switch (templateName) {
  case 'login' :
    return Promise.all([
      System.import('templates/login.tpl'),
      System.import('styles/base.css')
    ]).then((modules) => {
      return {
        template : modules[0],
        styles   : modules[1]
      }
    })
    .catch((error) => {
      throw error
    })

  case 'home' :
    return Promise.all([
      System.import('templates/home.tpl'),
      System.import('styles/base1.css')
    ]).then((modules) => {
      return {
        template : modules[0],
        styles   : modules[1]
      }
    })
    .catch((error) => {
      throw error
    })

  default :
    return {}
  }
}
