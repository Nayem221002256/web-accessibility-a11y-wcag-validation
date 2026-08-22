const pa11y = require('pa11y');
const fs = require('fs');

async function runPa11y() {
  const url = 'http://127.0.0.1:4173';

  console.log(`Running Pa11y accessibility audit on ${url}`);

  try {
    const results = await pa11y(url, {
      standard: 'WCAG2AA',
      timeout: 30000,
      wait: 1000
    });

    fs.mkdirSync('reports', { recursive: true });

    fs.writeFileSync(
      'reports/pa11y-report.json',
      JSON.stringify(results, null, 2)
    );

    console.log(`Pa11y found ${results.issues.length} accessibility issues.`);

    results.issues.forEach((issue, index) => {
      console.log(
        `${index + 1}. [${issue.type}] ${issue.message}`
      );
    });

    if (results.issues.length > 0) {
      process.exitCode = 1;
    }
  } catch (error) {
    console.error('Pa11y audit failed:', error);
    process.exitCode = 1;
  }
}

runPa11y();
