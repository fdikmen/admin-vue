module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warning" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warning" : "off",
    "max-len": ["error", { "code": 360 }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
