@echo off
echo Starting GitHub Pages deployment...

echo Setting environment variables...
set NODE_ENV=production
set GITHUB_PAGES=true

echo Installing dependencies...
call npm install

echo Building the project...
call npm run build

echo Deploying to GitHub Pages...
call npx gh-pages -d out -t true

echo Deployment completed!
pause
