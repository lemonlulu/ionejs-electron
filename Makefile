default: all

.DEFAULT:
	browserify -t [ babelify --presets [ react ] ] main.js -o app.js
