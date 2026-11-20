@echo off
setlocal
if not exist "%~dp0index.html" (
    echo Could not find index.html. Keep this script in the portfolio folder.
    pause
    exit /b 1
)
start "" "%~dp0index.html"
