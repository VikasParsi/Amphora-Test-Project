const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

const jsonDir = path.join(process.cwd(), 'cypress', 'reports', 'json');
const htmlReportDir = path.join(process.cwd(), 'cypress', 'reports', 'html');

[jsonDir, htmlReportDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

const jsonFiles = fs.readdirSync(jsonDir).filter(file => file.endsWith('.json'));

if (jsonFiles.length > 0) {
    report.generate({
        jsonDir: jsonDir,
        reportPath: htmlReportDir,
        reportName: 'Amphora Test Project',
        pageTitle: 'Automation Test Report',
        displayReportTime: true,
        metadata: {
            browser: {
                name: "chrome",
                version: "latest"
            },
            device: "Local machine",
            platform: {
                name: "Windows",
                version: "10"
            }
        }
    });
    console.log('HTML report generated successfully');
} else {
    console.log('No JSON report files found.');
}