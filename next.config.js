const withSass = require("@zeit/next-sass");
const withSourceMaps = require("@zeit/next-source-maps");

module.exports = withSourceMaps(withSass());
