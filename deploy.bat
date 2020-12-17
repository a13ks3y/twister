@echo off
xcopy dist\twister\assets\* \docs\assets\* /Y /S /E
xcopy dist\twister\main.*.js docs\main.js /Y
xcopy dist\twister\polyfills.*.js docs\polyfills.js /Y
xcopy dist\twister\runtime.*.js docs\runtime.js /Y
xcopy dist\twister\styles.*.css docs\styles.css /Y
