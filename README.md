# Rachei

**Rachei is a projet proudly designed by Ironhack SP students. Rachei is the sleekest and most practical way to split bills with your friends. Create your groups to share and follow your crew's expenses in real-time. Get insight, at any given moment, on how to balance all the group's expenses. Create your personal wallet and manage your pocket-money easily by paying your debts and reminding your friends of theirs.** 
  **To discover the platform just follow** <a href="www.rachei.herokuapp.com"><strong>this link</strong></a>


## Contribute
Rachei is the product of a lot of teamwork from a group of junior coders, all pull requests are welcome !

To start :
- Fork this repo
- Clone this repo

When you're done, enter on your console:
- git add .
- git commit -m "[ comment your code ]"
- git push origin master

Then create a Pull Request to suggest any optimizations to the team.
Thanks!


## Setup
Rachei's engine is built with React and MongoDB.
The site was deployed with Heroku.

The following dependencies must be installed :
- express (4.16.4),
- body-parser (1.19.0),
- cookie-session (1.3.3),
- dotenv (8.0.0),
- google-trends-api (4.9.0),
- hbs (4.0.4),
- mongoose (5.5.7),
- bcryptjs (2.4.3),
- connect-flash (0.1.1),
- passport (0.4.0),
- passport-google-oauth20 (2.0.0),
- passport-local (1.0.0),
- express-session (1.16.1).


## Arvore de Rotas
"/"  (landing page) <br>
 ↳ 'Como funciona ?' => "/"    <br>
 ↳ 'Cadastrar' => "/signin"   <br>
 -------------------↳ 'Cadastrar' => "/auth/local" <br>
 ↳ 'Entrar' => "/login"  <br>
-------------------↳ 'Entrar' => "/dashboard" <br>
-------------------↳ 'Entrar com Google' => "/auth/google" <br>
-----------------------------------------↳ 'Meus Paineis' => "/dashboard"  <br>
-----------------------------------------↳ 'Duvidas' => "/"  <br>
-----------------------------------------↳ 'Sair' => "/logout" <br>
-----------------------------------------↳ 'Ver Painel' => "/read/:panelId" <br>
--------------------------------------------------------------------------------↳ 'Voltar aos Meus Paineis' => "/dashboard"  <br>
--------------------------------------------------------------------------------↳ 'Editar' => "/read/:panelId"     (abertura de pop-up)<br>
-----------------------------------------------------------------------------------------------------↳ 'Editar' => "/update/:panelId"  <br>
--------------------------------------------------------------------------------↳ 'Deletar' => "/delete/:panelId" <br>
-----------------------------------------↳ '+' => "/dashboard"      (abertura de pop-up)<br>
---------------------------------------------------------------------↳ 'Criar' => "/panel"  <br>
--------------------------------------------------------------------------------↳ 'Voltar aos Meus Paineis' => "/dashboard"  <br>
-----------------------------------------↳ 'Comparar paineis' => "/battle"  <br>
--------------------------------------------------------------------------------↳ 'Voltar aos Meus Paineis' => "/dashboard"  <br>

## Authors
Marcelo Oliveira - @marbmo <br>
Paul Divet - @pdiv55 <br>
Fred Conti - @fredericonti <br>
José Luiz Coe - @joseluizcoe <br>
Gabriel Sicuto - @gsicuto