# Development Server Startup Script
# Make sure Node.js is installed before running this

Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nStarting development server on http://localhost:8080" -ForegroundColor Green
    Write-Host "Press Ctrl+C to stop the server`n" -ForegroundColor Cyan
    npm run dev
} else {
    Write-Host "`nFailed to install dependencies. Please make sure Node.js is installed." -ForegroundColor Red
    Write-Host "Download Node.js from: https://nodejs.org/" -ForegroundColor Yellow
}













