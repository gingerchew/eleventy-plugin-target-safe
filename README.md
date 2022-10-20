# Keep your outbound links safe

Link tags (`<a>`) with the `target` attribute may sometimes need a little extra care. This plugin is meant to do that for you automatically.

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

## Example

```html
<!-- before -->
<a target="_blank" href="https://website.com/">Unsafe Outbound Link</a>
<!-- after -->
<a target="_blank" href="https://website.com/" rel="noopener">Safe Outbound Link</a>
```

## Config Options

| Option      | Type | Default       | Explanation |
| ----------- | ---- | ------------- | ---- |
| opener | boolean | true | Adds traditional `rel="noopener"` attribute.
| follower | boolean | false | `rel="nofollower"` useful for blogs that don't want site crawlers to follow outbound links. |
| referrer | boolean | false | `rel="noreferrer"` [Read more here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noreferrer).

## Considerations

The world of web development is constantly changing. It is entirely possible you are writing code with a bias from someone who read a StackOverflow question 10 years ago, and that code is now in the browser and you just don't know it. That's why I wanted to include these two articles that talk specifically about what the `rel="noopener"` attribute does, and come from sources that are reliable.

Check out this [article](https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/) by Jake Archibald. There is also this note on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener), that in browsers today, adding `target="_blank"` implicitly adds `rel="noopener"`. 

## Future

- [ ] Forms and other potentially unsafe `target` elements
- [ ] Review dependencies and see what can be removed
- [ ] ???

## See it in action

[It is currently in use here.](https://resourcesandhelp.netlify.app)

## Credits

[11ty](https://www.11ty.dev)

[11ty Plugin Template](https://github.com/5t3ph/eleventy-plugin-template)
