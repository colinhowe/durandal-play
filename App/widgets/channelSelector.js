/*
 * Channel selection widget.
 *
 * Settings:
 *
 *  owner - must have two observable arrays provided:
 *          selectedChannels - to store the channel IDs selected
 *          availableChannels - array of channel objects with a name and an ID
 */

define(function(require) {
    var widget = require('durandal/widget');
 
    var ctor = function(element, settings) {
      this.owner = settings.owner;
    };
 
    return ctor;
});
