import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import {BuildMode, BuildPaths, BuildOptions, BuildPlatform, buildWebpack} from "@packages/build-config"
import packageJson from './package.json';

interface EnvVariables {
    mode: BuildMode,
    port: number,
    analyzer?: boolean;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'), 
        src: path.resolve(__dirname, 'src')
    }
    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3001,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'shop',
        filename: 'remoteEntry.js', // файл, который будет удаленно подключаться в хост контейнер
        exposes: { // здесь мы указываем, что мы хотим предоставить приложению контейнеру
            './Router': './src/router/Router.tsx'
        },
        shared: { // здесь указываем, какие библиотеки у нас общие, а какие нужно пошерить
            ...packageJson.dependencies,
            react: {
                eager: true,
                requiredVersion: packageJson.dependencies['react'],
            },
            'react-router-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-router-dom'],
            },
            'react-dom': {
                eager: true, // противоположность лейзилоудинга, нужно подгурзить сразу
                requiredVersion: packageJson.dependencies['react-dom'],
            },
        },
    }))

    return config
};