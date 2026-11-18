@echo off
setlocal
cd /d "%~dp0"

if not exist "node_modules" (
  echo Paketlar o'rnatilmoqda, birinchi ishga tushirish biroz vaqt oladi...
  call npm install
  if errorlevel 1 (
    echo npm install bajarilmadi. Node.js o'rnatilganini tekshiring.
    pause
    exit /b 1
  )
)

start "GUZAL local server" cmd /k "cd /d "%~dp0" && npm run dev -- --host 127.0.0.1"
timeout /t 3 /nobreak >nul
start "" "http://127.0.0.1:5173/"

echo.
echo GUZAL sayti ochildi: http://127.0.0.1:5173/
echo Server oynasini yopmang. Tugatish uchun o'sha oynada Ctrl+C bosing.
pause
