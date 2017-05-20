import BaseModel from '$lib/BaseModel'


import * as modelEvents from '$models'

/**
 * Application Model class
 */
export default class Model extends BaseModel {
  /**
   * Application Model, adds all Model events.
   */
  constructor() {
    super()

    this.addEvents({
      GET_USER : modelEvents.getUser
    })
  }
}
