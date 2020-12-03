const { NONAME } = require("dns");
const path  = require("path");
console.log(path.resolve(__dirname));
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/dist'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    mode: "none",
    devServer:{
        //设置基本目录结构
        // contentBase:path.join(__dirname, '..', '/dist'), //本地服务器所加载的页面所在的目录
        //服务器的IP地址，可以使用IP也可以使用localhost
        contentBase: path.resolve(__dirname),
        host:'192.168.0.200',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:1818,
        inline: true,//自动刷新
        hot: true //热加载
    }
};