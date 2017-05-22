import controller from '$js/Controller'

/**
 * Caches the template and styles at `controller.view`'s instance'
 * @param  {Object} data  contains 2 properties: `template` and `styles`
 */
function setupTemplatesData(data) {
  const viewName  = controller.view.get('viewName')
  const templates = controller.view.get('templates')

  templates[viewName] = data
  controller.view.set('templates', templates)
}

/**
 * Fetches Template Chunks according to different routes
 * @param  {String} templateName  viewName
 * @return {Function}             Handlebars template function
 */
export function getTemplate(templateName) {
  console.log('%c <><><><><><><><><><><><><><><>', 'color: green, font-weight: bold')
  console.log(controller)
  console.log('%c <><><><><><><><><><><><><><><>', 'color: green, font-weight: bold')
  const viewName = controller.view.get('viewName')
  const templates = controller.view.get('templates')

  if (!templates[viewName]) {
    switch (templateName) {
    case 'login' :
      return Promise.all([
        System.import('templates/login.tpl'),
        System.import('styles/base.css')
      ]).then((modules) => {
        const templatesData = {
          template : modules[0],
          styles   : modules[1]
        }

        setupTemplatesData(templatesData)
      })
      .catch((error) => {
        throw error
      })

    case 'home' :
      return Promise.all([
        System.import('templates/home.tpl'),
        System.import('styles/base1.css')
      ]).then((modules) => {
        const templatesData = {
          template : modules[0],
          styles   : modules[1]
        }

        setupTemplatesData(templatesData)
      })
      .catch((error) => {
        throw error
      })

    default :
      throw new Error('invalid view name')
    }
  }

  return Promise.resolve()
}
