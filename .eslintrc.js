module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
  },

  env: {
    es6: true,
  },
  plugins: ["sonarjs"],
  extends: ["plugin:sonarjs/recommended"],
};
