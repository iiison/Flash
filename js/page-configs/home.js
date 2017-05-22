import controller from '$js/Controller'

/**
 * Get all users
 * @return {Promise} User data promise
 */
function getUsers() {
  return controller
    .model
    .emit('GET_ALL_USERS')
    .then((data) => data)
    .catch((error) => {
      throw error
    })
}


/**
 * Setup login page data, call user data for the first time
 * @return {[type]} [description]
 */
function setupPageData() {
  return Promise.all([getUsers()])
    .then((response) => {
      controller.model.set('homePage', response[0].data.data)
    })
}

const home = {
  setupPageData
}

export default home
