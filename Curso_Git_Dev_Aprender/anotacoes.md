# Anotações git/github

códigos - git init: Cria repositório

code . - abre vsCode

git add - envia o arquivo para a stading area,no github desktop os arquivos já são direcionados automáticamente. basicamente é uma área antes de ir para o commit, se queremos por o readme nesse local basta digitar git add readme.md

git add . - podemos escrever isso para commitar todos os nossos arquivos

git restore --staged + nome do arquivo -  Tira o arquivo da area de stage para untracked

git config --global user.name 'nome do usuário' - configura usuário no git
git config --global user.email 'nome do email' - configura email do usuário
git config --global core.editor + código do editor de código(ex vscode: code .) - configura editor de código

git status - mostra se foram feitos comits e quais foram os arquivos postos na stading area

git commit -m '' - faz o commit,devemos escrever a mensagem nos parênteses

git branch -M 'main' - altera o nome da branch master para main

git remote add origin - linka o repositório remoto ao repositório local, para utilizar basta por o git remote add origin + link do repositório remoto utilizado

obs: caso não funcione tente git remote set-url origin + o seu link 

git push -u origin main - faz o push para o nosso repositório remoto,após o primeiro push não é necessário o -u  basta escrever push origin main

obs: ao criar repositório ao por licença gera bug na hora do push

clear  ou CTRL + L - limpa o nosso terminal do git

git checkout -b 'nome da branch' - cria uma nova branch e muda o local de desenvolvimento para o da branch nova 

git merge - para fazer o merge basta ir para a main e escrever git merge + nome do repositório que queremos juntar

git clone - clona repositórios, git clone + link do repositório

git pull - caso alteramos algo em nosso arquivo dentro do github e queremos que essa alteração também funcione no repositório local basta utilizarmos esse comando

cd - serve para abrir uma pasta, para utilizar basta digitar cd + nome da pasta aonde está situado o conteúdo

cd ~/nome do diretorio/ - Podemos alterar o diretório digitando tal código, ex: cd ~/Documents/cursos-programacao/

cd .. - volta uma pasta

cd ../..  - volta duas pastas

mv 'nome do arquivo' ./'nome da pasta que o arquivo sera redirecionado, ex:  mv cursos ./estudos/

Tab(atalho) - Ao entrarmos em um pasta através do cd para evitar escrever todo o nome complexo de uma pasta podemos escrever o início e apertar o tab,
dessa forma o git identifica e já busca tal informação.

dir ou ls - lista as pastas que estão no diretório

mkdir + nome da pasta - cria uma pasta

echo > 'nome do arquivo' - Podemos criar arquivos dentro da pasta também através do terminal,para isso basta escrever echo > index.html por exemplo e
criaremos um arquivo html dentro da nossa pasta

fork - é importante ressaltar que se clonarmos um repositório de alguem direto sem fazer um fork ele não irá aparecer no nosso repositório remoto,para isso precisamos dar um fork e a partir do fork fazemos a clonagem

pull request - se caso fizermos um fork em um projeto do vs code e acharmos um erro e concertarmos o erro ou melhorarmos o código podemos enviar um pull request para o pessoal da equipe do vs code,dessa forma eles podem ou não aprovar o meu pull request,caso eles realizem o pull a alteração que eu fiz no código será aplicada no projeto e com isso podemos contribuir com grandes empresas.


### Como navegar entre versôes de código

comandos utilizados - git reflog e git reset hard-- numeração do comit 

passo 1 - use o gitlog para ver as versões do código

passo 2 - use o git reset hard-- aqui dentro ponha a numeração do commit e de enter e pronto

### Como Corrigir Conflitos

Basta fazer manualmente,identificar qual o commit desatualizado e substituí-lo pelo atual,commitando-o e fazerndo um push novamente

### Como Cadastrar chave SSH - Passo a passo

O github utiliza essa chave para identificar se o usuário que está enviando o código é realmente o usuário do github

1 - Copie e cole isso no terminal substituindo o email padrão pelo seu ssh-keygen -t rsa -b 4096 -C "your_email@example.com" 

2 - para as mensagens seguintes basta apertar enter

3 - após criar a chave acesse cd ~/.ssh/

4 - Verifique suas chaves digitando ls ou dir

5 - digite o comando cat id_rsa.pub

6 - Copie a chave,entre no github,e nas configurações entre na aba 'SSH and GPG Keys'

7 - Entre em 'New SSH Key'

8 - cole a chave ssh na parte de key e dê um título,recomenda-se um título para o dispositivo por exemplo 'PC-Rafael'

9 - Volte para o terminal git no diretório ~/.ssh e digite o comando eval $(ssh-agent -s) e pressione enter

10 - digite o comando ssh-add + nome da chave ssh privada e basta pressionar enter

### Exemplo de utilização de chave SSH

1 - ao clonar um repositório por exemplo,precisamos cloná-lo utilizando a código ssh e não http

2 - basta dar um git clone + código ssh do repositório remoto







