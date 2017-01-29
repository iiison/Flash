/**
 * Fetches Template Chunks according to different routes
 * @param  {String} templateName  viewName
 * @return {Function}             Handlebars template function
 */
export function getTemplate(templateName) {
  switch (templateName) {
  case 'login' :
    return System.import('templates/login.tpl')
    .then((template) => {
      return System.import('styles/base.css')
        .then((styles) => {
          return { styles, template }
        })
      // return result
    })
    .catch((error) => {
      throw error
    })

  case 'home' :
    return System.import('templates/home.tpl')
    .then((template) => {
      return System.import('styles/base1.css')
        .then((styles) => {
          return { styles, template }
        })
      // return result
    })
    .catch((error) => {
      throw error
    })

  default :
    return {}
  }
}
