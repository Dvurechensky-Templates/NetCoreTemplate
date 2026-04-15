<p align="center">Dvurechensky</p>

<p align="center">
  <a href="https://sites.google.com/view/dvurechensky" target="_blank">
    <img alt="Profile" src="https://shields.dvurechensky.pro/badge/Dvurechensky-Nikolay-blue">
  </a>
  <img src="https://shields.dvurechensky.pro/badge/Csharp-Asp Net Core-blue?logo=csharp&logoColor=FFFF00">
  <img src="https://shields.dvurechensky.pro/badge/TypeScript-gray?logo=typescript&logoColor=FF4500">
  <img src="https://shields.dvurechensky.pro/badge/HTML5-gray?logo=htmlacademy&logoColor=00BFFF">
  <img src="https://shields.dvurechensky.pro/badge/CSS3-gray?logo=css3&logoColor=00FF7F">
  <img src="https://shields.dvurechensky.pro/badge/JavaScript-gray?logo=javascript&logoColor=8B008B">
  <img src="https://shields.dvurechensky.pro/badge/Grunt-gray?logo=grunt&logoColor=F4A460">
  <img src="https://shields.dvurechensky.pro/badge/Webpack-gray?logo=webpack&logoColor=8DD6F9">
</p>

<h1 align="center">ASP.NET Core MVC 项目模板（前端基于 TypeScript）</h1>

<div align="center">

<strong>语言: </strong>
<span style="color: #F5F752; margin: 0 10px;">✅ CN 中文（当前）</span> |
<a href="./README.ru.md">RU Russian</a> |
<a href="./README.md">US English</a>

</div>

---

# 目录

- [配置阶段](#配置阶段)
- [构建流程](#构建流程)
- [结果](#结果)

---

## 配置阶段

---

### 1. 配置 `tsconfig.json`

<details>
<summary>展开查看</summary>

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

### 2. 配置 `webpack.config.js`

<details>
<summary>展开查看</summary>

```js
// 同原始代码
```

</details>

> [!IMPORTANT]
> 发布生产环境时，请将 `mode` 设置为 `production` 并启用压缩。

---

### 3. 配置 `package.json`

<details>
<summary>展开查看</summary>

```json
// 同原始代码
```

</details>

---

### 4. 配置 `Gruntfile.js`

<details>
<summary>展开查看</summary>

```js
// 同原始代码
```

</details>

---

### 5. 配置 `app_configuration.json`

<details>
<summary>展开查看</summary>

```json
{
	"appSettings": {
		"appHost": "localhost:8833"
	}
}
```

</details>

---

## 构建流程

---

- 安装 NPM 依赖

---

- 创建前端目录结构:

```
ScriptsAndCss/
 ├── CssFiles/
 ├── JsScripts/
 └── TypeScripts/
```

---

- 安装 NuGet 包:

- TypeScript.MSBuild

- AspNetCore.Mvc.Razor.RuntimeCompilation

- Swashbuckle.AspNetCore.\*

---

- 修改 `_Layout.cshtml` 引用:

```
app.min.css
app.min.js
```

---

### 创建入口文件

#### TypeScript 入口

```ts
// main_api.ts
```

---

#### CSS 入口

```css
// styles.css
```

---

### 配置 `Program.cs`

<details>
<summary>展开查看</summary>

```cs
// 同原始代码
```

</details>

---

- 执行 Grunt 任务 `default`
- 启用 Swagger 文档生成

---

## 结果

---

### 基础运行

- [https://localhost:8833](https://localhost:8833)
- [https://localhost:8833/docs](https://localhost:8833/docs)

---

### 功能特点

- 实时前端刷新（BrowserSync）
- TypeScript + Webpack 构建流程
- 自动压缩（Production 模式）
- 支持现代 JS 特性（async/await, decorators）
- ASP.NET Core 提供高性能后端

---

## 开发流程

---

### 前端

- TypeScript 编写代码
- Webpack 打包与优化
- Grunt 自动化构建

---

### 后端

- ASP.NET Core MVC
- 处理业务逻辑与 API

---

### 自动化

- Grunt 管理任务
- Webpack 支持热更新
- BrowserSync 实时同步

---

> [!NOTE]
> 该模板旨在提供一个可扩展、结构清晰且接近生产环境的开发基础。

---

<p align="center">Dvurechensky</p>
