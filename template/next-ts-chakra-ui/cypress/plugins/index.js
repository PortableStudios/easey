// https://github.com/avanslaars/cypress-axe#in-cypress-plugins-file
module.exports = (on) => {
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
    table(message) {
      console.table(message);
      return null;
    },
  });
};
