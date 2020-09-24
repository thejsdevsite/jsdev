const React = require("react")

const HeadComponents = [
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
];

exports.onRenderBody = ({
  setHeadComponents
}, pluginOptions) => {
  setHeadComponents(HeadComponents)
}