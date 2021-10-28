exports.handler = function(context, event, callback) {
    const axios = require('axios')
	const token = "OGs0zPZJGpYbMHBzGrbokHjKzbBMT-NXOlgMEjfbmgxVOZ7PmCB2t1hzOv2wSsPU_rDtZM1aAyFqnpDtEl-zvUgTN0hF4WLopuNis5yGsafIiHGwUFl9ZbJnvfaldkSZQOUgb6WmbE5yONEt-mvJznd47VUQWTqJf4B_LhSFfdS-RO0TGkiDLQAgPQsB0DPQ_us50_XJwVHfUY-9-jZ72747-schoZZSltfsYezc2kQI9XdzGPHt-7seyQ=="
	const namespace = "spa_fmsqsJ3S1yJoh59xPZppR"
	let userId = event.phoneNumber
	let url = `https://profiles.segment.com/v1/spaces/spa_fmsqsJ3S1yJoh59xPZppR/collections/users/profiles/user_id:${userId}/traits`

	axios.get(url,{
  // Axios looks for the `auth` option, and, if it is set, formats a
  // basic auth header for you automatically.
  auth: {
    username: token
  }
})
	.then(response => {
	    console.log(response.data.traits)
	    console.log('getting here')
	    let userTraits = response.data.traits
	    callback(null, userTraits)
	})
	.catch(err => {
	    console.log(err)
	    let error = 'User not found'
	    callback(null, error)
	})

};
