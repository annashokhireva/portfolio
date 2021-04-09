module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `@import '@/sass/essentials/variables.scss';`
			}
		}
	},

	publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/'

};