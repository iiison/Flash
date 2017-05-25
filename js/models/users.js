import { get } from '$utils'

/**
 * Calls GetUser API and returns the data
 * @param  {Object} payLoad  Data to be sent to the API
 * @return {Promise}         XHR Promise
 */
function getUser(payLoad) {
  return get('https://reqres.in/api/users/2')
}

/**
 * Get user list
 * @return {Promise}         XHR Promise
 */
function getUsers() {
  return get('https://reqres.in/api/users?page=3')
}

export default {
  getUser,
  getUsers
}
