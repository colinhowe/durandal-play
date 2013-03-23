define(['./project'], function (Project, widget) {
    
    availableChannels = ko.observableArray([
      {'id': 1, 'name': 'Superstore UK'},
      {'id': 2, 'name': 'Clothes US'},
      {'id': 3, 'name': 'Hatshop Ireland'},
      {'id': 4, 'name': 'Toycity France'}
    ])
    selectedChannels = ko.observableArray([4])
    inboxController = {
      selectedChannels: selectedChannels,
      availableChannels: availableChannels,
    }
    window.controller = inboxController

    return {
      inboxController: inboxController
    };
});
