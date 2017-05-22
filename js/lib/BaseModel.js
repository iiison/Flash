import Base from '$lib/Base'

/**
 * View Class
 */
export default class BaseModel extends Base {
 /**
  * BaseModel Class Constructor
  * @param  {Function} onModalDataChange Will be executed when `Model.data` is updated
  */
  constructor(onModalDataChange) {
    super()

    this.on('change:data', (data) => {
      if (onModalDataChange && typeof onModalDataChange === 'function') {
        onModalDataChange(data)
      } else {
        console.warn('No on data change function found. You can pass one while creating instance of Model')
      }

      return this.get()
    })
  }

  /**
   * Adds Model events so that can be dispathced later on.
   * @param {Object} events key value pair of events and their name
   */
  addEvents(events) {
    for (const event in events) {
      this.on(event, events[event])
    }
  }

  /**
   * Static Class member, just call `create` method to
   * instantiate the class
   * @param  {Function}    onModalDataChange will be called when `Model.data` changes
   * @return {BaseModle}  instance of BaseModel class
   */
  static create(onModalDataChange) {
    return new BaseModel(onModalDataChange)
  }
}
