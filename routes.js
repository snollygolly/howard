"use strict";

const config = require("./config.json");

const app = require("./index.js").app;
const passport = require("./index.js").passport;
const Router = require("koa-router");

const routes = new Router();

const main = require("./controllers/main.js");

// routes
let user = null;

routes.get("/", function* get() {
	if (this.isAuthenticated()) {
		user = this.session.passport.user;
	}
	yield this.redirect("/app/index.html");
});

app.use(routes.middleware());
