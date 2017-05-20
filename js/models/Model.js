import BaseModel from '$lib/BaseModel'


import { getUser } from '$models'

/**
 * Application Model class
 */
export default class Model extends BaseModel {
  /**
   * Application Model, adds all Model events.
   */
  constructor() {
    super()

    this.on('GET_USER', getUser)
  }
}
