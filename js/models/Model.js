import BaseModel  from '$lib/BaseModel'
import controller from '$js/Controller'
import pageDataMap from '$pageConfs/pageDataMap'

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

    controller.view.render(templateData.template, {
      styles : templateData.styles,
      data   : pageDataMap(viewData.viewName)
    })
  }

  /**
   * Static Class member, just call `create` method to
   * instantiate the class
   * @param  {Function}   data data change handler(for now, can be passed
   *                           a configuration object later)
   * @return {Model}          New instance of model.
   */
  static create(data) {
    return new Model(data)
  }
}
