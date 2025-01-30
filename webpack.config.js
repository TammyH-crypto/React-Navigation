export default {
    module: {
        rules: 
        [ 
            {
                exclude: /\.scss|css/, 
            use: "babel-loader",
        },
        {
            test: /\.scss|css/,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
    ],
    },
    watch: true,
    watchOptions: {aggregateTime: 1000},
    mode: "development",
    devtool: "source-map"
}