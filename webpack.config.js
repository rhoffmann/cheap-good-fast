const HtmlWebpackPlugin = require('html-webpack-plugin');

const createConfig = (env) => {
  console.log(env.NODE_ENV);

  return [
    {
      mode: 'development',
      entry: './src/electron.ts',
      target: 'electron-main',
      module: {
        rules: [
          {
            test: /\.ts$/,
            include: /src/,
            use: [{ loader: 'ts-loader' }],
          },
        ],
      },
      output: {
        path: __dirname + '/dist',
        filename: 'electron.js',
      },
    },
    {
      mode: 'development',
      entry: './src/main.tsx',
      target: 'electron-renderer',
      devtool: 'source-map',
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            include: /src/,
            use: [{ loader: 'ts-loader' }],
          },
        ],
      },
      output: {
        path: __dirname + '/dist',
        filename: 'main.js',
      },
      plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    },
  ];
};

module.exports = createConfig;
