module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/test_json_api/'
		: '/'
}