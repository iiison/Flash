/**
 * Base Class, provides mean to set, get data and
 * event emiter
 */
export default class Base {
  /**
   * Base class constructor
   */
  constructor() {
    this.events = {}
    this.data = {}
    this.observables = {}
  }

  /**
   * Set property to `data` variable of the instance
   * @param {String/Object} prop   Property to set on `data`, pass an
   *                               object if need to set props in burst
   * @param {any}           value  Value of Prop, don't send this variable
   *                               if passing `prop` as an object
   * @return {Object}              Updated `data`
   */
  set(prop, value) {
    const setProp = (prp, val) => {
      this.data[prp] = val
    }

    if (Object(prop) === prop) {
      for (const iterator in prop) {
        setProp(iterator, prop[iterator])
      }
    } else {
      setProp(prop, value)
    }

    if (this.observables[prop]) {
      this.emit(prop, value)
    }

    // OPTIMIZE: optimize this call.
    if (this.observables.data) {
      this.emit('data', value)
    }

    return this.data
  }

  /**
   * Get `data` property of the instance
   * @param  {String} prop  property name
   * @return {Any}         value of property
   */
  get(prop) {
    if (!prop) {
      return this.data
    }

    return this.data[prop]
  }

  /**
   * Set Custom Events
   * @param  {String}   event     Event Name
   * @param  {Function} callback  Callback of event
   */
  on(event, callback) {
    let newEvent = event

    if (event.startsWith('change:')) {
      newEvent = event.split(':')[1]
      this.observables[newEvent] = true
    }

    this.events[newEvent] = callback
  }

  /**
   * Execute or emit custom event
   * @param  {String}        event  Event Name
   * @param  {Object/Array} args   Arguments to custom events
   * @return {Any}                  Result of custom event
   */
  emit(event, args) {
    return this.events[event](args)
  }
}
