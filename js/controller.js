import View from '$js/View'
import Base from '$lib/Base'
import initRoutes from '$js/routes'

/*
alert('Testing this stuff!')
view()
initRoutes()
*/

class Controller extends Base {
  constructor(){
    super()

    this.view = View.create()

    this.view.set({
      'val' : 'test',
      'val1' : 'test1',
      'val2' : 'test2'
    })

    this.view.on('login', function () {
      alert('Lassun')
    })

    this.view.on('change:user', function (userName) {
      alert(`user changed, new user is ${userName}`)
    })

    console.log('%c <><><><><><><><><><><><><><><>', 'color: green, font-weight: bold')
    console.log(this.view)
    console.log('%c <><><><><><><><><><><><><><><>', 'color: green, font-weight: bold')
    window.v = this.view
  }

  static create (){
    return new Controller()
  }
}

const ctrl = Controller.create()

ctrl.on('change', function (val) {
  alert(val)
})
