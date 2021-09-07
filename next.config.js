module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/product/1': { page: '/product', query: { id: "1" } }
        }
    }
}