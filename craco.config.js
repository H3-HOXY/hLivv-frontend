const webpack = require('webpack');

module.exports = {
    style: {
        postcssOptions: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
};