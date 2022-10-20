# Keep your outbound links safe

Link tags `<a>` with the `target` attribute may sometimes need a little extra care to keep them safe for users. This plugin is meant to do that for you automatically.
## Usage

Install using your package manager of choice

```bash
pnpm install eleventy-plugin-target-safe
```

Then, include it in your `.eleventy.js` config file:

```js
const eleventyTargetSafe = require("eleventy-plugin-target-safe");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventyTargetSafe, {
    // config
  });
};
```

## Config Options

| Option      | Type | Default       | Explanation |
| ----------- | ---- | ------------- | ---- |
| opener | boolean | true | Adds traditional `rel="noopener"` attribute.
| follower | boolean | false | `rel="nofollower"` useful for blogs that don't want site crawlers to follow outbound links. |
| referrer | boolean | false | `rel="noreferrer"` [Read more here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noreferrer).


## Credits

[11ty](https://www.11ty.dev)
[11ty Plugin Template](https://github.com/5t3ph/eleventy-plugin-template)
