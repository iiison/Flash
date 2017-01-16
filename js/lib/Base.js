export default class Base {
  constructor () {
    this.events     = {}
    this.data       = {}
    this.overvables = {}
  }

  set(prop, value) {
    const setProp = (prp, val) => {
      this.data[prp] = val
    }

    if (Object(prop) === prop){
      for (const iterator in prop) {
        setProp(iterator, prop[iterator])
      }
    } else {
      setProp(prop, value)
    }

    if (this.overvables[prop]) {
      this.emit(prop, value)
    }

    return this.data
  }

  get(prop) {
    if (!prop) {
      return this.data
    }
    return this.data[prop]
  }

  on(event, callback) {
    if (event.startsWith('change:')) {
      event = event.split(':')[1]
      this.overvables[event] = true
    }

    this.events[event] = callback
  }

  emit(event, args) {
    return this.events[event](args)
  }
}