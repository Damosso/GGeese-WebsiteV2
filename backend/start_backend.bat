@echo off
echo Starting GGeese Studio Backend Server...
echo.

REM Check if virtual environment exists
if not exist "venv\" (
    echo ERROR: Virtual environment not found!
    echo Please run setup_backend.bat first
    echo.
    pause
    exit /b 1
)

REM Activate virtual environment
call venv\Scripts\activate.bat

REM Start the server
echo Starting FastAPI server on http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
uvicorn server:app --reload --port 8000
