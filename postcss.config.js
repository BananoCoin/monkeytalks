// postcss.config.js
const join = require("path").join;
const purgecss = require("postcss-purgecss");

class CSSExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  plugins: [
    require("autoprefixer"),
    purgecss({
      content: [
        "./src/**/*.vue",
        "./src/**/*.js",
        "./src/**/*.ts"
      ],
      extractors: [
        {
          extractor: CSSExtractor,
          extensions: ["vue", "js", "ts", "html"]
        }
      ]
    })
  ]
};