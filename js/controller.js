import Base from '$lib/Base'
import View from '$js/View'
import initRoutes from '$js/routes'

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

    this.view.on('change:user', (userName) => {
      alert(`user changed, new user is ${userName}`)
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

export default controller

/*
document.addEventListener("DOMContentLoaded", function(event) {
  window.
});
*/
