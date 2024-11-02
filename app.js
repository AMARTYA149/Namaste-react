import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "abc",
  },
  "Hello from React!!!!"
);

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement(
        "h1",
        {
          id: "heading",
          xyz: "abc",
        },
        "Hello from React 1!!!!"
      ),
      React.createElement(
        "h1",
        {
          id: "heading",
          xyz: "abc",
        },
        "Hello from React 2!!!!"
      ),
    ]
  )
);

// console.log("heading: ", heading);
// console.log("parent: ", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("root: ", root);

root.render(parent);
