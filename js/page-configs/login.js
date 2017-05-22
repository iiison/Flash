import controller from '$js/Controller'

/**
 * Gets user data
 * @return {Promise} User data promise
 */
function getUserData() {
  return controller
    .model
    .emit('GET_USER')
    .then((data) => data)
    .catch((error) => {
      throw error
    })
}

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
  return Promise.all([getUserData(), getUsers()])
    .then((response) => {
      controller.model.set('userDetails', response[0].data.data)
    })
}

const login = {
  getUserData,
  setupPageData
}

export default login
