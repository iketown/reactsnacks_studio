import React from "react";

export default {
  title: "Code Block",
  name: "codeBlock",
  type: "document",
  fields: [
    {
      title: "codeContent",
      name: "codeContent",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "pre" }],
        },
      ],
    },
  ],
};
