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
      GET_USER      : modelEvents.users.getUser,
      GET_ALL_USERS : modelEvents.users.getUsers
    })

    this.on('change:data', (data) => {
      console.log('data changed!')
    })
  }
}
