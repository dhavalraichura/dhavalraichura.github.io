echo %1
echo %2
set arg1=%1
git checkout %2
git diff --name-only origin/main %2 > rec_files.txt
git commit -m '%arg1%'
pause