// Example use for the demo plugin:
// {{ 'Steph' | hello | safe }}
const { Transformer } = require('./index.js');

module.exports = (eleventyConfig, options = {}) => {
  // Define defaults for your plugin config
  const defaults = {
    opener: true, // add the opener rel?
    follower: false, // add the follower rel?
    referrer: false, // add the referrer rel?
  };
  
  // By default it adds to any <a> or <form>
  // with target="_blank|_self|_*|custom-id"
  
  // If follower is true, then any links that
  // don't match the url will have the follower
  // rel added to them

  // referrer rel can be considered as a "strict" mode?
  // might need to do more research on the *exact*
  // implications of that one

  const _options = Object.assign({}, defaults, options);

  // You can create more than filters as a plugin, but here's an example
  eleventyConfig.addTransform("safer-rel", (content, outputPath) => {
    return Transformer(content, _options);
  });
};
