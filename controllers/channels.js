"use strict";

const config = require("../config.json");

module.exports.getEnabledChannels = function* getEnabledChannels() {
	this.body = {error: false, channels: config.site.enabled_channels};
};
