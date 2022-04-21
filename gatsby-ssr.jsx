const React = require("react");
const Layout = require("./src/components/Layout");

exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    className: "h-full",
  });
};

exports.wrapPageElement = ({ element, props }) => {
  if (typeof element === "object") return element;
  return <Layout {...props}>{element}</Layout>;
};
