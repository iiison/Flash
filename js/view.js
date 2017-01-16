import Base from '$lib/Base'

export default class View extends Base {
  constructor() {
    super()
  }
  static create() {
    return new View()
  }
}