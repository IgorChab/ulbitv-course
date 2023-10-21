import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const {isDev} = options
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: ((resourcePath: string) => resourcePath.includes('.module.')),
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : '[hash:base64:8]'
                    }
                }
            },
            "sass-loader",
        ],
    };

    return [
        typescriptLoader,
        cssLoaders,
    ]
}
