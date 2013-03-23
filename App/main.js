requirejs.config({
    paths: {
        'text': 'durandal/amd/text'
    }
});

define(['durandal/app', 'durandal/system', 'durandal/viewLocator', 'durandal/widget'],
  function (app, system, viewLocator, widget) {
    
    system.debug(true);
    

    app.title = 'Durandal Samples';
    app.start().then(function () {
      
        widget.registerKind('channelSelector');
        widget.mapKind('channelSelector', 'widgets/channelSelector.html', 'App/widgets/channelSelector.js')

        app.adaptToDevice();
        app.setRoot('shell');
    });
});
