const { defineConfig } = require('cypress')
const fs = require('fs')
const path = require('path')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4173',
    video: false,
    screenshotsFolder: 'reports/screenshots',
    setupNodeEvents(on) {
      on('task', {
        saveA11yReport(payload) {
          const dir = path.join(__dirname, 'reports')
          fs.mkdirSync(dir, { recursive: true })
          const filename = `${payload.page}-${Date.now()}.json`
          const filePath = path.join(dir, filename)
          fs.writeFileSync(filePath, JSON.stringify(payload, null, 2))
          console.log(`A11Y report saved: ${filePath}`)
          return filePath
        },
        log(message) {
          console.log(message)
          return null
        },
        table(rows) {
          console.table(rows)
          return null
        }
      })
    }
  }
})
