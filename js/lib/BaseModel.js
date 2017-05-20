import Base from '$lib/Base'

/**
 * View Class
 */
export default class BaseModel extends Base {
  /**
   * BaseModel Class Constructor
    constructor() {
      super()
    }
  */

  /**
   * Render Templates
   * @param  {String}  tpl     name of template to be rendered
   * @param  {Object}  data    data to be passed through template
   * @param  {Boolean} append  whether to append the data or clean
   *                           parent
   */
  render(tpl, data, append = true) {
    if (tpl && append) {
      const html = tpl(data)

      document.getElementById('root').innerHTML = html
    }
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
   * @return {View}  instance of View class

    static create() {
      return new View()
    }
   */
}