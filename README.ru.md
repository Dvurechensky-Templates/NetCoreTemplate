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

<h1 align="center"> 🌁 Шаблон проекта ASP NET CORE MVC, Frontend - на TypeScript </h1>

<div align="center">

<strong>Язык: </strong>
<a href="./README.zh.md">🇨🇳 中文</a> |
<span style="color: #F5F752; margin: 0 10px;">✅ 🇷🇺 Русский (current)</span> |
<a href="./README.md">🇺🇸 English</a>

</div>

---

# ✨ Оглавление

- [✨ Оглавление](#-оглавление)
  - [🎇 Этапы наполнения конфигурациями 🎇](#-этапы-наполнения-конфигурациями-)
  - [🎇 Этапы сборочного процесса 🎇](#-этапы-сборочного-процесса-)
  - [🎇 Итог 🎇](#-итог-) - [📷 База 📷](#-база-) - [📷 Плюшки 📷](#-плюшки-) - [📷 Примерный процесс разработки: 📷](#-примерный-процесс-разработки-)

## 🎇 Этапы наполнения конфигурациями 🎇

---

1. ⛅ Импорт `tsconfig.json` ⛅

---

<details>
<summary>Раскрыть код tsconfig.json</summary>

```json
{
	"compilerOptions": {
		"target": "es2016", // Устанавливает уровень JavaScript, в который компилируется TypeScript (в данном случае ES2016).
		"module": "es6", // Определяет, какой модульный формат используется в процессе компиляции (ES6 модули).
		"moduleResolution": "node", // Способ разрешения модулей. В данном случае используется разрешение как в Node.js.
		"jsx": "preserve", // Как компилировать JSX. В данном случае оставляем JSX без изменений.
		"declaration": false, // Указывает, генерировать ли файлы типов (.d.ts). Здесь это отключено.
		"removeComments": true, // Указывает, что комментарии должны быть удалены из скомпилированного кода.
		"noImplicitAny": false, // Отключает предупреждения о неявных типах `any` в коде.
		"noEmitOnError": true, // Указывает, что компиляция должна быть остановлена, если есть ошибки.
		"sourceMap": true, // Генерирует карты исходных кодов для упрощения отладки.
		"esModuleInterop": true, // Включает совместимость с модулями ES при импорте CommonJS модулей.
		"experimentalDecorators": true, // Включает поддержку экспериментальных декораторов в TypeScript.
		"emitDecoratorMetadata": true, // Включает генерацию метаданных для декораторов, которые могут использоваться в таких библиотеках как TypeORM или Angular.
		"outDir": "ScriptsAndCss/JsScripts", // Указывает директорию для сохранения скомпилированных файлов.
		"lib": ["es2016", "dom"] // Указывает библиотеки, которые будут включены при компиляции (ES2016 и DOM).
	},
	"exclude": [
		"node_modules" // Исключает папку node_modules из процесса компиляции.
	]
}
```

</details>

---

2. ⛅ Импорт `webpack.config.js` ⛅

---

<details>
<summary>Раскрыть код webpack.config.js</summary>

```js
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin') // Импортируем TerserPlugin

module.exports = {
	entry: {
		app: './ScriptsAndCss/TypeScripts/main_api.ts', // Точка входа для JavaScript
		styles: './ScriptsAndCss/CssFiles/styles.css', // Точка входа для CSS (может быть любой CSS-файл)
	},
	output: {
		path: path.resolve(__dirname, 'wwwroot/js'),
		filename: '[name].min.js', // Используем [name] для динамического имени файла
	},
	resolve: {
		extensions: ['.ts', '.js', '.css'], // Добавили .css
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
				use: [
					MiniCssExtractPlugin.loader, // Извлекает CSS в отдельные файлы
					'css-loader', // Обрабатывает @import и url()
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '../css/app.min.css', // Куда Webpack должен поместить CSS-файл
		}),
	],
	mode: 'development',
	watch: true,
}
```

</details>
<br>

> В случае публикации в Production релиза нужно сменить режим `mode: 'development'` на `mode: 'production'` в файле конфигурации

<details>
<summary>Раскрыть код изменений webpack.config.js</summary>

```js
mode: 'production',  // Изменен режим на production для минимизации
optimization: {
    minimize: true,  // Включаем минимизацию
    minimizer: [
        new TerserPlugin(),  // Плагин для минимизации JS
        new CssMinimizerPlugin()  // Плагин для минимизации CSS
    ]
},
```

</details>

---

3. ⛅ Импорт `package.json` - ряд плагинов опционален под ваш проект ⛅

---

<details>
<summary>Раскрыть код package.json</summary>

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
	},
	"comments": {
		"version": "Указывает текущую версию вашего проекта.",
		"name": "Имя вашего проекта.",
		"private": "Указывает, что проект является приватным и не должен быть опубликован в npm.",
		"devDependencies": {
			"css-minimizer-webpack-plugin": "Плагин для минимизации CSS файлов в процессе сборки Webpack.",
			"terser-webpack-plugin": "Плагин для минимизации JavaScript с использованием Terser.",
			"cytoscape": "Библиотека для работы с графами и сетями.",
			"cytoscape-cose-bilkent": "Плагин для Cytoscape, который добавляет алгоритм планирования расположения узлов.",
			"grunt": "Система автоматизации задач для Node.js, например, для сборки, минификации и тестирования.",
			"style-loader": "Лоадер для инжекции CSS в DOM через теги `<style>` в процессе сборки.",
			"css-loader": "Лоадер для обработки CSS файлов и поддержки импорта других CSS или стилей.",
			"mini-css-extract-plugin": "Плагин для извлечения CSS в отдельные файлы, что улучшает производительность.",
			"grunt-webpack": "Плагин для интеграции Webpack с системой Grunt.",
			"webpack-cli": "CLI для работы с Webpack, позволяет запускать сборку через командную строку.",
			"ts-loader": "Лоадер для загрузки TypeScript файлов в Webpack.",
			"browser-sync": "Инструмент для синхронизации браузеров и автоперезагрузки в процессе разработки.",
			"grunt-browser-sync": "Плагин для интеграции BrowserSync с Grunt.",
			"grunt-contrib-clean": "Плагин для удаления файлов или папок перед выполнением задач.",
			"grunt-contrib-concat": "Плагин для конкатенации (объединения) файлов в один.",
			"grunt-contrib-cssmin": "Плагин для сжатия CSS файлов.",
			"grunt-contrib-uglify": "Плагин для сжатия JavaScript файлов (использует UglifyJS).",
			"grunt-contrib-watch": "Плагин для отслеживания изменений файлов и автоматического выполнения задач.",
			"grunt-ts": "Плагин для компиляции TypeScript файлов в Grunt."
		}
	}
}
```

</details>

---

4. ⛅ Импорт `Gruntfile.js` ⛅

---

<details>
<summary>Раскрыть код Gruntfile.js</summary>

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
						'wwwroot/js/app.min.js', // Webpack создает app.min.js
						'Views/**/*.cshtml',
					],
				},
				options: {
					watchTask: true,
					proxy: 'localhost:5000', // Замените на свой локальный адрес
				},
			},
		},
		watch: {
			ts: {
				files: ['ScriptsAndCss/TypeScripts/**/*.ts'],
				tasks: ['webpack:build'], // Webpack компилирует и собирает
				options: {
					spawn: false,
				},
			},
			bsReload: {
				files: [
					'wwwroot/css/*.css',
					'wwwroot/js/app.min.js',
					'Views/**/*.cshtml',
				],
				options: {
					reload: true,
				},
			},
		},
		clean: ['wwwroot/css/*', 'wwwroot/js/*', 'ScriptsAndCss/Combined/*'],
		cssmin: {
			//сжатие CSS
			css: {
				src: ['ScriptsAndCss/CssFiles/*'], //какой файл сжимать
				dest: 'wwwroot/css/app.min.css', //сжатый выходной файл
			},
		},
	})

	grunt.loadNpmTasks('grunt-webpack')
	grunt.loadNpmTasks('grunt-browser-sync')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-clean')
	grunt.loadNpmTasks('grunt-contrib-cssmin')

	grunt.registerTask('build', ['clean', 'webpack:build', 'cssmin'])
	grunt.registerTask('default', ['build', 'browserSync:dev', 'watch'])
}
```

</details>

---

4. ⛅ Импорт `app_configuration.json` ⛅

---

<details>
<summary>Раскрыть код app_configuration.json</summary>

```json
{
	"appSettings": {
		"appHost": "localhost:8833"
	}
}
```

</details>

---

## 🎇 Этапы сборочного процесса 🎇

---

- 🌋 Восстановить NPM пакеты

---

- 🌋 Настроить директории для генерации Frontend
  - в корне проекта где мы будем его внедрять создаём такуб структуру папок
    - 📁ScriptsAndCss
      - 📁〰️📁CssFiles
      - 📁〰️📁JsScripts
      - 📁〰️📁TypeScripts

---

- 🌋 Установить Nuget пакеты
  - **`TypeScript.MSBuild`**
  - **`AspNetCore.Mvc.Razor.RuntimeCompilation`**
  - **`Swashbuckle.AspNetCore.Swagger`**
  - **`Swashbuckle.AspNetCore.SwaggerGen`**
  - **`Swashbuckle.AspNetCore.SwaggerUI`**

---

- 🌋 В файле `Views/Shared/_Layout.cshtml` изменить адреса до `css` и `js` файлов так как теперь они называются **`app.min.css`** и **`app.min.js`**

---

- 🌋 Добавить простейшую точку входа `[js]` приложения в папку 📁ScriptsAndCss〰️>📁TypeScripts - **`main_api.ts`**

<details>
<summary>Раскрыть код main_api.ts</summary>

```ts
(() => {
    //по загрузке окна
    window.addEventListener("load", async () => {
        //получаем текущий URL
        const currentUrl = new URL(document.location.href);

        //получаем путь из URL
        const pathname = currentUrl.pathname.toLowerCase();

        //разбиваем пути URL на части
        const partsPath = pathname.split("/");

        //смотрим путь
        switch (partsPath[1]) {
            case "": //страница авторизации
            {

            }
            break;
            default:
                break;
        }
    }
})();
```

</details>
<br>

---

- 🌋 Добавить простейшую точку входа `[css]` приложения в папку 📁ScriptsAndCss〰️>📁CssFiles - **`style.css`**

<details>
<summary>Раскрыть код style.css</summary>

```ts
// ваши стили - скопируйте из wwwroot то что там было
```

</details>
<br>

---

- 🌋 Добавить примерно такое содержимое в **`Program.cs`**
  > Поясняю - в данном примере вырезано внесение `CSRF` токена в логику работы сервера а также `Middleware` отвечающий за обработку служб защиты от подделки запросов. Тут мы вносим лишь Swagger для генерации документации по API и конфигурационный файл декларирующий **`host`** и **`port`** вашего сервера принудительно.

<details>
<summary>Раскрыть код Program.cs</summary>

```cs
using System.Reflection;
using System.Text.Json;

using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile($"{LoggingExtensions.AppDir}/app_configuration.json");

builder.WebHost.UseUrls($"https://{builder.Configuration["appSettings:appHost"]}");

builder.Services.AddControllersWithViews();

#region В этом регионе объявляем сервисы

// Например
// builder.Services.AddSingleton<ICashService, CashService>();

#endregion

builder.Services.Configure<JsonOptions>(options =>
{
    options.JsonSerializerOptions.WriteIndented = true; //для красивого форматирования
    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
});

builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "App API",
        Version = "1.0.0",
        Description = "Информация об API",
        Contact = new OpenApiContact
        {
            Name = "Dvurechensky"
        }
    });
    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    options.IncludeXmlComments(xmlPath);
});

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}
else
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Документация");
        c.RoutePrefix = "docs";
    });
    app.UseDeveloperExceptionPage(); //используем страницу исключений
}

// app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
```

</details>
<br>

---

- 🌋 В диспетчере выполнения задач выполнить задачу `default` для генерации файлов

---

- 🌋 В настройках проекта в разделе `Выходные данные` поставить галочку на `Файл документации` - `Создание файла, содержащего документацию по API` для успешной работы **`Swagger`**

---

## 🎇 Итог 🎇

#### 📷 База 📷

При успешном старте в данном примере мы получим сервер:

- по адресу **`https://localhost:8833`**
- документацию Swagger **`https://localhost:8833/docs/`**

---

#### 📷 Плюшки 📷

---

- в свою очередь при вёрстке `Typescript` и активированной задаче `default` в `Диспетчере выполнения задач` - в реальном времени будет перезагружаться страница и мы увидим новые изменения на `Frontned` - лицевой стороне Web-сервера после каждого сохранения файла в проекте
- при установке параметров указанных для `production` версии в файле `webpack.config.js` мы можем собрать `Release` версию и опубликовать её в сеть в которой все файлы `css` и `js` будут сжаты и минимизированы для более быстрой и качественной работы сервера в сети
- мы можем прикрутить любую существующую библиотеку NPM и использовать её в скриптах `Typescript` для создания качественного `Frontend` - состояние которого мы можем отслеживать в реальном времени при разработке. Typescript поддерживает последние возможности ECMAScript (например, async/await, декораторы, модули и т. д.), что делает код более современным и удобным.
- используя ASP.NET Core MVC для серверной части (backend), позволяет создавать масштабируемые, производительные и безопасные веб-приложения
- Typescript для фронтенда (frontend) обеспечивает типизацию и улучшение читаемости кода, предотвращая множество ошибок, которые могут возникнуть при использовании обычного JavaScript.

---

#### 📷 Примерный процесс разработки: 📷

---

🎃 Frontend (Typescript + Webpack):

🎈 Вы пишете код на Typescript, который потом компилируется с помощью Webpack.
Webpack минифицирует и обрабатывает ваши файлы, генерирует отдельные чанки для кода, CSS и изображений.
Grunt помогает автоматизировать задачи, такие как запуск Webpack, минификация CSS/JS, запуск локального сервера с BrowserSync.
Backend (ASP.NET Core MVC):

🎈 Серверная часть обрабатывает бизнес-логику, запросы от клиента и взаимодействует с базой данных.
Вся верстка и фронтенд код (собранный через Webpack) размещаются в папке wwwroot или другой папке для статических файлов.

🎃 Автоматизация сборки и деплоя:

🎈 Grunt автоматически обрабатывает сборку фронтенда, выполняет задачи, такие как минификация, копирование файлов и т. д.
Webpack поддерживает горячую замену модулей, что ускоряет процесс разработки.
Разработка с возможностью тестирования и отладки:

🎈 В процессе разработки с помощью BrowserSync можно синхронизировать несколько браузеров и автоматически перезагружать страницы.
Webpack и Grunt делают разработку более продуктивной за счет автоматизации рутинных задач.

<p align="center">✨Dvurechensky✨</p>
