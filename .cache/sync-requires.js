const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/noctrem/Workspace/Port/.cache/dev-404-page.js"))),
  "component---src-components-post-layout-js": hot(preferDefault(require("/home/noctrem/Workspace/Port/src/components/postLayout.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/noctrem/Workspace/Port/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/noctrem/Workspace/Port/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/noctrem/Workspace/Port/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/noctrem/Workspace/Port/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/noctrem/Workspace/Port/src/pages/projects.js")))
}

