/**
 * Fetches Template Chunks according to different routes
 * @param  {String} template  viewName
 * @return {Function}         Handlebars template function
 */
export function getTemplate(template) {
  switch (template) {
  case 'login' :
    return System.import('templates/login.tpl')
    .then((result) => result)
    .catch((error) => {
      throw error
    })

  case 'home' :
    return System.import('templates/home.tpl')
    .then((result) => result)
    .catch((error) => {
      throw error
    })

  default :
    return {}
  }
}
