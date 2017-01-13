if (process.env.NODE_ENV === 'development') {
    module.exports = { configureStore: require('./configureStore.dev').configureStore };
} else {
    module.exports = { configureStore: require('./configureStore.prod').configureStore };
}