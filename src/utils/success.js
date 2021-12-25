module.exports = (data) => ({
    code: 0,
    msg: 'Success',
    ...data,
});


/* const ERROR_RESPONSE = {
	SUCCESS: {
		"code": 0,
		"msg": "Success"
	},
	CLIENT_ERROR: {
		"code": 1
	},
	SERVER_ERROR: {
		"code": 2,
		"msg": "Something went wrong!"
	},
	NOT_FOUND: {
		"code": 3,
		"msg": "Not Found!"
	},
} */