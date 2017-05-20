import Base from '$lib/Base'
import View from '$js/View'
import Model from '$js/models/Model'
import initRoutes from '$js/routes'
import { getTemplate } from './utils'

/**
 * Main Class, instentiates View and Model
 */
class Controller extends Base {
  /**
   * Controller Class Contructor,
   * Initializes View, Model and Routes
   */
  constructor() {
    super()

    this.view = View.create()
    this.model = new Model()

    console.log('%c <><><><><><><><><><><><><><><>', 'color: green, font-weight: bold')
    console.log(this.model)
    console.log('%c <><><><><><><><><><><><><><><>', 'color: green, font-weight: bold')

    window.view = this.view
    this.view.on('change:viewName', (viewName) => {
      getTemplate(viewName)
        .then(({ template, styles }) => {
          console.log('%c <><><><><><><><><><><><><><><>', 'color: green')
          console.log(styles)
          console.log('%c <><><><><><><><><><><><><><><>', 'color: green')
          this.view.render(template, { value : `${viewName} page`, styles })
        })
    })
  }

  /**
   * Static Class member, just call `create` method to
   * instantiate the class
   * @return {Controller}  instance of controller class
   */
  static create() {
    return new Controller()
  }
}

const controller = Controller.create()

initRoutes(controller)

export default controller

/*
document.addEventListener("DOMContentLoaded", function(event) {
  window.
});
*/
