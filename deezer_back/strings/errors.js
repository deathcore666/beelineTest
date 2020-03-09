module.exports = {
    resources: {
        notFound: (resourceName) => ({code: 404, error: `${resourceName} was not found on server.`})
    }
}