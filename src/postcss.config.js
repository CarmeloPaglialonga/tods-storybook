const plugins = {
    autoprefixer: {},
};

if (process.env.NODE_ENV === 'production') {
    plugins.cssnano = {
        preset: 'default',
        discardComments: {
            removeAll: true,
        },
    };
}

module.exports = { plugins };
