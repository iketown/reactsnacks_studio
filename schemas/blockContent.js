import React from "react";
import { TriggerText } from "./triggerText";
const WordTrigger = ({ children, displayAsCode }) => {
  return (
    <span>
      <a>{children}</a>
    </span>
  );
};

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "PRE", value: "pre" },
        { title: "code", value: "code" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          { title: "Code", value: "code" },
          { title: "CodeBlock", value: "codeBlock" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: "lineTrigger",
            type: "object",
            title: "Line Trigger",
            description: "Highlight one or more entire lines",
            blockEditor: {
              icon: () => "➡︎",
              render: WordTrigger,
            },
            fields: [
              {
                name: "startPrismId",
                type: "string",
                title: "Starting Line ID",
              },
              {
                name: "endPrismId",
                type: "string",
                title: "Ending Line ID",
              },
            ],
          },
          {
            name: "wordsTrigger",
            type: "object",
            title: "Words Trigger",
            blockEditor: {
              icon: () => "☞",
              render: WordTrigger,
            },
            fields: [
              {
                name: "prismId",
                type: "string",
                title: "Prism id",
              },
              {
                name: "extraPrismIds",
                type: "array",
                title: "Extra Prism Ids",
                of: [
                  {
                    name: "prismId",
                    type: "string",
                    title: "Extra Prism id",
                  },
                ],
              },
            ],
          },
          {
            name: "targetCode",
            type: "object",
            title: "Target",
            fields: [{ title: "targetId", name: "targetId", type: "string" }],
          },
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      options: { hotspot: true },
    },
    { type: "codeSandbox" },
    {
      type: "object",
      name: "codeWithId",
      title: "Code With ID",
      fields: [
        {
          type: "code",
          name: "code",
          options: {
            language: "js",
            theme: "tomorrow",
            withFilename: true,
          },
        },
        { type: "string", name: "id", title: "codeId" },
      ],
    },
  ],
};
