Atom Package Manager cmd:

создаст txt файл со списком плагинов в папке из которой вызвали
apm list --installed --bare > atom-package-list.txt


Положить файл atom-package-list.txt в любую папку, зайти в нее в cmd и написать след комманду, это установит все плагины из txt файла

apm install --packages-file atom-package-list.txt
