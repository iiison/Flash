import BaseModel  from '$lib/BaseModel'
import controller from '$js/Controller'

import * as modelEvents from '$models'

/**
 * Application Model class
 */
export default class Model extends BaseModel {
  /**
   * Application Model, adds all Model events.
   */
  /**
   * Application Model, adds all Model events.
   * @param  {Function} onDataChange Executes when Model.data changes
   */
  constructor(onDataChange) {
    super(onDataChange)

    this.addEvents({
      GET_USER      : modelEvents.users.getUser,
      GET_ALL_USERS : modelEvents.users.getUsers
    })
  }

  /**
   * Executes when modal data is updated.
   */
  static handleDataChange() {
    const viewData = controller.view.get()
    const templateData = viewData.templates[viewData.viewName]

    controller.view.render(templateData.template, { styles : templateData.styles })
  }
}
