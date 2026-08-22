# Web Accessibility (a11y) Automation & WCAG Compliance Validation

**Student:** Md. Nayem Ibne Nur  
**Student ID:** 221002256  
**Course/Assignment:** KSA 1 — Section 223 D1  
**GitHub Username:** `Nayem221002256`  
**GitHub Repository:** Create a public repository under `Nayem221002256` and push this project.

## Project idea

This project demonstrates automated web accessibility testing against WCAG using **Cypress + cypress-axe/axe-core**, with **Pa11y** as a second validation tool.

The project contains two versions of the same demo page:

1. `public/vulnerable.html` — intentionally contains common accessibility defects.
2. `public/accessible.html` — fixes those defects.

The automated tests scan both pages and produce machine-readable reports.

## Requirements

- Node.js 20, 22, or 24 is recommended for the current Pa11y release.
- npm

## Installation

```bash
npm install
```

## Run the demo server

Open Terminal 1:

```bash
npm run serve
```

Keep it running at `http://localhost:4173`.

## Run Cypress + axe-core

Open Terminal 2:

```bash
npm test
```

Or use the interactive runner:

```bash
npm run cypress:open
```

The first Cypress test records violations from the intentionally vulnerable page without failing the test. The second test expects the remediated page to have no detectable WCAG 2A/2AA violations.

## Run Pa11y

With the server running:

```bash
npm run pa11y
```

Pa11y checks both pages and writes JSON output into `reports/`.

## Run everything

```bash
npm run accessibility
```

## Main findings demonstrated

The vulnerable page intentionally includes examples such as:

- missing `lang` attribute on `<html>`
- image without alternative text
- button without a discernible accessible name
- form input without a label
- poor color contrast
- weak heading structure
- missing semantic main landmark

The remediated page addresses these using semantic HTML, labels, alternative text, accessible names, improved contrast, and document structure.

## Important limitation

Automated accessibility tools cannot prove that a website is fully accessible. They detect many machine-testable problems, but manual keyboard testing, screen-reader testing, content review, and user testing are still required for stronger WCAG validation.

## References

- Cypress Accessibility Testing: https://docs.cypress.io/app/guides/accessibility-testing
- cypress-axe: https://github.com/component-driven/cypress-axe
- axe-core: https://www.npmjs.com/package/axe-core
- Pa11y: https://www.npmjs.com/package/pa11y
- WCAG: https://www.w3.org/TR/WCAG22/

## GitHub submission

Recommended repository name: `web-accessibility-a11y-wcag-validation`

After pushing the project to GitHub, the **Actions** tab will run the Cypress accessibility tests and the Pa11y audit automatically on every push and pull request. Cypress officially supports running tests in CI providers such as GitHub Actions.

Submission should include:

1. GitHub repository link
2. Successful GitHub Actions run screenshot
3. Cypress test result screenshot
4. Pa11y report/result screenshot
5. Final assignment report

The GitHub repository is for the source code and reproducible tests; the local browser screenshots are evidence for the assignment report.
