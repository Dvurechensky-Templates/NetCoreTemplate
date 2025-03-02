const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); 
const TerserPlugin = require('terser-webpack-plugin');  // Импортируем TerserPlugin

module.exports = {
    entry: {
        app: './ScriptsAndCss/TypeScripts/main_api.ts', // Точка входа для JavaScript
        styles: './ScriptsAndCss/CssFiles/styles.css'   // Точка входа для CSS (может быть любой CSS-файл)
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot/js'),
        filename: '[name].min.js' // Используем [name] для динамического имени файла
    },
    resolve: {
        extensions: ['.ts', '.js', '.css'] // Добавили .css
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // Извлекает CSS в отдельные файлы
                    'css-loader'               // Обрабатывает @import и url()
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/app.min.css' // Куда Webpack должен поместить CSS-файл
        })
    ],
    mode: 'development',
    watch: true,
};