"use strict";

const config = require("./config.json");

const app = require("./index.js").app;
const passport = require("./index.js").passport;
const Router = require("koa-router");

const routes = new Router();
const api = new Router({
	prefix: "/api/v1"
});

const channels = require("./controllers/channels.js");

// routes
let user = null;

routes.get("/", function* get() {
	if (this.isAuthenticated()) {
		user = this.session.passport.user;
	}
	this.redirect("/app/index.html");
});

app.use(routes.middleware());

// api routes go here
api.get("/channels", channels.getEnabledChannels);

app.use(api.middleware());
