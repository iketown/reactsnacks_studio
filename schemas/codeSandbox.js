export default {
  name: "codeSandbox",
  title: "Code Sandbox",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "editorsize",
      title: "Editor Size",
      description: "defaults to 50",
      type: "number",
    },
    {
      name: "hidenavigation",
      title: "Hide Navigation",
      type: "boolean",
    },
    // {
    //   name: "codemirror",
    //   title: "Code Mirror",
    //   description: "use CodeMirror instead of Monaco",
    //   type: "boolean",
    // },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "number" }],
      description: "comma separated list of line numbers",
    },
    {
      name: "module",
      title: "Module",
      description: "Which module to open.  defaults to /",
      type: "string",
    },
    {
      name: "previewwindow",
      title: "Preview Window",
      description: "console, tests or browser",
      type: "string",
    },
  ],
};
