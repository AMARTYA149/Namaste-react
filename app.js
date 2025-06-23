import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "abc",
//   },
//   "Hello from React!!!!"
// );

// JSX (transpiled before it reaches JS engine @ browser) - transpiled by Parcel using Babel package

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = (<h1 id="heading">
  Hello from React using JSX!!!
</h1>)

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("root: ", root);

root.render(jsxHeading);
