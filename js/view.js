import Base from '$lib/Base'

/**
 * View Class
 */
export default class View extends Base {
  /**
   * View Class Constructor
   */
  constructor() {
    super()
  }

  /**
   * Static Class member, just call `create` method to
   * instantiate the class
   * @return {View}  instance of View class
   */
  static create() {
    return new View()
  }
}
