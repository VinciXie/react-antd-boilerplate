// jest-puppeteer.config.js
module.exports = {
  launch: {
    headless: false,
    devtools: true
  },
  server: {
    command: 'node server.js',
    port: 3001,
    launchTimeout: 3000,
    debug: true,
  },
}