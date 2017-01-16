import Base from '$lib/Base'
import View from '$js/View'
import initRoutes from '$js/routes'
import { getTemplate } from './utils'

/**
 * Main Class, instentiates View and Model
 */
class Controller extends Base {
  /**
   * Controller Class Contructor,
   * initializes View, Model and Routes
   */
  constructor() {
    super()

    this.view = View.create()

    window.view = this.view
    this.view.on('change:viewName', (viewName) => {
      getTemplate(viewName)
        .then((template) => {
          this.view.render(template, { value : `${viewName} page` })
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
