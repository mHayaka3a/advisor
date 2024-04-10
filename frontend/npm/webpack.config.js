// プラグインを利用するためにwebpackを読み込んでおく
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//サービス全体で利用
const main = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "../js/index.js",
    mode: "production",
    // mode: "development",
    resolve: {
      modules: [path.resolve(__dirname, '../npm/node_modules')],
      alias: {
        '@pickadate': 'pickadate/lib/'
      }
    },
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: path.resolve(__dirname, '../../static/webpack'),
        // 出力ファイル名
        filename: "bundle.js"
        // hash値自動付与 変更時はwebpack再起動
        // filename: "bundle_[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                //ローダーの処理対象となるディレクトリ
                include: path.resolve(__dirname, '../scss'),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    plugins: [
        // 外部CSSファイルを出力するプラグイン
        new MiniCssExtractPlugin({
            path: path.resolve(__dirname, '../../static/webpack'),
            filename: 'style.css',
        }),
    ],
};

/*
//service/indexでのみ利用
const service = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "../scss/style_service.scss",
    mode: "production",
    // mode: "development",
    resolve: {
      modules: [path.resolve(__dirname, '../npm/node_modules')],
      alias: {
        '@pickadate': 'pickadate/lib/'
      }
    },
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: path.resolve(__dirname, '../../static/webpack'),
        // 出力ファイル名
        filename: "style_service.css"
        // hash値自動付与 変更時はwebpack再起動
        // filename: "bundle_[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                //ローダーの処理対象となるディレクトリ
                include: path.resolve(__dirname, '../scss'),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    plugins: [
        // 外部CSSファイルを出力するプラグイン
        new MiniCssExtractPlugin({
            path: path.resolve(__dirname, '../../static/webpack'),
            //不要なoutputファイルを作成しないよう、outputと同じファイル名で上書き
            filename: './style_service.css',
        }),
    ],
};
*/

// module.exports = [
//     main, service
// ];

module.exports = [
    main
];
