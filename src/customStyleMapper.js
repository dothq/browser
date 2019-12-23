module.exports = new Proxy({}, {
    get: (target, key) => key
  }
);
