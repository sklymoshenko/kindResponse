module.exports = {
  hooks: {
    "pre-commit": "npm run lint && npm run test:module && npm run test:snapshot"
  }
};
