<p align="center">✨Dvurechensky✨</p>

<p align="center">
  <p align="center">
    <a href="https://sites.google.com/view/dvurechensky" target="_blank"><img alt="Static Badge" src="https://shields.dvurechensky.pro/badge/Dvurechensky-Nikolay-blue"></a>
    <img src="https://shields.dvurechensky.pro/badge/Csharp-Asp Net Core-blue?logo=csharp&logoColor=FFFF00">
    <img src="https://shields.dvurechensky.pro/badge/TypeScript-gray?logo=typescript&logoColor=FF4500">
    <img src="https://shields.dvurechensky.pro/badge/HTML5-gray?logo=htmlacademy&logoColor=00BFFF">
    <img src="https://shields.dvurechensky.pro/badge/CSS3-gray?logo=css3&logoColor=00FF7F">
    <img src="https://shields.dvurechensky.pro/badge/JavaScript-gray?logo=javascript&logoColor=8B008B">
    <img src="https://shields.dvurechensky.pro/badge/Grunt-gray?logo=grunt&logoColor=F4A460">
    <img src="https://shields.dvurechensky.pro/badge/Webpack-gray?logo=webpack&logoColor=8DD6F9">
  </p>
</p>

<h1 align="center"> 🌁 ASP.NET Core MVC Project Template, Frontend — TypeScript </h1>

<div align="center" style="margin: 20px 0; padding: 10px; background: #1c1917; border-radius: 10px;">
  <strong>🌐 Language: </strong>
  
  <a href="./README.ru.md" style="color: #F5F752; margin: 0 10px;">
    🇷🇺 Russian
  </a>
  | 
  <span style="color: #0891b2; margin: 0 10px;">
    ✅ 🇺🇸 English (current)
  </span>
</div>

---

# ✨ Table of Contents

- [✨ Table of Contents](#-table-of-contents)
  - [🎇 Configuration Setup Stages 🎇](#-configuration-setup-stages-)
  - [🎇 Build Process Stages 🎇](#-build-process-stages-)
  - [🎇 Result 🎇](#-result-)
    - [📷 Base 📷](#-base-)
    - [📷 Features 📷](#-features-)
    - [📷 Approximate Development Process 📷](#-approximate-development-process-)

## 🎇 Configuration Setup Stages 🎇

---

1. ⛅ Import `tsconfig.json` ⛅

---

<details>
<summary>Show tsconfig.json</summary>

```json
{
	"compilerOptions": {
		"target": "es2016",
		"module": "es6",
		"moduleResolution": "node",
		"jsx": "preserve",
		"declaration": false,
		"removeComments": true,
		"noImplicitAny": false,
		"noEmitOnError": true,
		"sourceMap": true,
		"esModuleInterop": true,
		"experimentalDecorators": true,
		"emitDecoratorMetadata": true,
		"outDir": "ScriptsAndCss/JsScripts",
		"lib": ["es2016", "dom"]
	},
	"exclude": ["node_modules"]
}
```

</details>

---

2. ⛅ Import `webpack.config.js` ⛅

---

<details>
<summary>Show webpack.config.js</summary>

```js
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	entry: {
		app: './ScriptsAndCss/TypeScripts/main_api.ts',
		styles: './ScriptsAndCss/CssFiles/styles.css',
	},
	output: {
		path: path.resolve(__dirname, 'wwwroot/js'),
		filename: '[name].min.js',
	},
	resolve: {
		extensions: ['.ts', '.js', '.css'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '../css/app.min.css',
		}),
	],
	mode: 'development',
	watch: true,
}
```

</details>

> For production builds, change `mode: 'development'` to `mode: 'production'`

<details>
<summary>Show production config</summary>

```js
mode: 'production',
optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin()
    ]
},
```

</details>

---

3. ⛅ Import `package.json` ⛅

---

<details>
<summary>Show package.json</summary>

```json
{
	"version": "1.0.0",
	"name": "asp.net",
	"private": true,
	"devDependencies": {
		"css-minimizer-webpack-plugin": "7.0.0",
		"terser-webpack-plugin": "5.3.12",
		"cytoscape": "^3.31.0",
		"cytoscape-cose-bilkent": "4.1.0",
		"grunt": "1.4.1",
		"style-loader": "^4.0.0",
		"css-loader": "^7.1.2",
		"mini-css-extract-plugin": "^2.9.2",
		"grunt-webpack": "^7.0.0",
		"webpack-cli": "^6.0.1",
		"ts-loader": "^9.5.2",
		"browser-sync": "^3.0.3",
		"grunt-browser-sync": "^2.2.0",
		"grunt-contrib-clean": "2.0.0",
		"grunt-contrib-concat": "2.0.0",
		"grunt-contrib-cssmin": "5.0.0",
		"grunt-contrib-uglify": "5.0.1",
		"grunt-contrib-watch": "1.1.0",
		"grunt-ts": "6.0.0-beta.22"
	},
	"dependencies": {
		"cytoscape": "^3.31.0"
	}
}
```

</details>

---

4. ⛅ Import `Gruntfile.js` ⛅

---

<details>
<summary>Show Gruntfile.js</summary>

```js
const webpackConfig = require('./webpack.config.js')

module.exports = function (grunt) {
	grunt.initConfig({
		webpack: {
			options: webpackConfig,
			build: {},
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'wwwroot/css/*.css',
						'wwwroot/js/app.min.js',
						'Views/**/*.cshtml',
					],
				},
				options: {
					watchTask: true,
					proxy: 'localhost:5000',
				},
			},
		},
		watch: {
			ts: {
				files: ['ScriptsAndCss/TypeScripts/**/*.ts'],
				tasks: ['webpack:build'],
			},
		},
	})

	grunt.loadNpmTasks('grunt-webpack')
	grunt.loadNpmTasks('grunt-browser-sync')
	grunt.loadNpmTasks('grunt-contrib-watch')

	grunt.registerTask('build', ['webpack:build'])
	grunt.registerTask('default', ['build', 'browserSync:dev', 'watch'])
}
```

</details>

---

## 🎇 Build Process Stages 🎇

---

- 🌋 Restore NPM packages

- 🌋 Setup frontend directories:

```
ScriptsAndCss/
 ├─ CssFiles/
 ├─ JsScripts/
 └─ TypeScripts/
```

- 🌋 Install NuGet packages:
  - `TypeScript.MSBuild`
  - `AspNetCore.Mvc.Razor.RuntimeCompilation`
  - `Swashbuckle.AspNetCore.Swagger`
  - `Swashbuckle.AspNetCore.SwaggerGen`
  - `Swashbuckle.AspNetCore.SwaggerUI`

- 🌋 Update paths in `_Layout.cshtml` to:
  - `app.min.css`
  - `app.min.js`

---

## 🎇 Result 🎇

### 📷 Base 📷

After successful startup:

- Server: `https://localhost:8833`
- Swagger: `https://localhost:8833/docs/`

---

### 📷 Features 📷

- Live reload via BrowserSync
- Webpack build + minification
- TypeScript modern features
- Scalable backend with ASP.NET Core MVC
- Strong typing on frontend

---

### 📷 Approximate Development Process 📷

🎃 Frontend (TypeScript + Webpack):

- Write TypeScript → compile via Webpack
- Assets are bundled & minimized
- Grunt automates build tasks

🎈 Backend (ASP.NET Core MVC):

- Handles business logic & API
- Serves static files from `wwwroot`

🎃 Automation:

- Grunt automates builds
- Webpack enables hot reload

🎈 Development:

- BrowserSync syncs browsers
- Faster dev via automation

<p align="center">✨Dvurechensky✨</p>
