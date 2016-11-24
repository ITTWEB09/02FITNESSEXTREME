cd %~dp0\client
call npm run tsc
cd ..
call node server.js