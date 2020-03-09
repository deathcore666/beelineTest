module.exports = function(router){
    router.use('/', require('./api/authorization'))
};
