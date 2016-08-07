const webpack = require('webpack');

exports.devServer = function(options) {
	return {
		devserver: {
			// enable history API fallback so html5 history API routing works.
			// this is a good default that will come in handy as projects grow.
			historyApiFallback: true,
			// unlike the cli flag, this doesn't set HMR!
			hot: true,
			inline: true,
			// only display errors to reduce output trash
			display: 'errors-only',
			// If you use Vagrant or Cloud9, set
      		// host: options.host || '0.0.0.0';
		    // 0.0.0.0 is available to all network devices
      		// unlike default `localhost`.
      		host: options.host, //defaults to localhost
      		port: options.port //defaults to 8080
		},
		plugins: [
		//as a good default for large projects, enable multi-pass compilation for better performance
			new Webpack.hotModuleReplacementPlugin({
				multiStep: true
			})
		]
	}
}