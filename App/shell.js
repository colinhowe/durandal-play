define(['durandal/plugins/router'], function (router) {
    
    return {
        router: router,
        activate: function () {
            router.map([
                { url: 'hello', moduleId: 'modules/hello/index', name:'Hello World', visible: true },
            ]);
            
            return router.activate('hello');
        }
    };
});
