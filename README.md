# Rachei

**Rachei is a projet proudly designed by Ironhack SP students. Rachei is the sleekest and most practical way to split bills with your friends. Create your groups to share and follow your crew's expenses in real-time. Get insight, at any given moment, on how to balance all the group's expenses. Create your personal wallet and manage your pocket-money easily by paying your debts and reminding your friends of theirs.** 
  **To discover the platform just follow** <a href="www.rachei.herokuapp.com"><strong>this link</strong></a>


**_Attention: this is the repo for the front part of the app, please make sure you also visit the repo with the back-end code_** <a href="https://github.com/pdiv55/rachei-back">**_here_**</a>


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
Rachei's _front_ engine is built with NodeJS, Mongoose and ExpressJS.
The website was deployed with Heroku.

The following dependencies must be installed :
- fortawesome/fontawesome-svg-core (v. 1.2.19),
- fortawesome/free-solid-svg-icons (v. 5.9.0), 
- fortawesome/react-fontawesome"(v. 0.1.4), 
- axios (v. 0.19.0), 
- bulma (v. 0.7.5),  
- dotenv (v. 8.0.0), 
- react (v. 16.8.6),  
- react-dom (v. 16.8.6), 
- react-router-dom (v. 5.0.1), 
- react-scripts (v. 3.0.1)


## Route-Tree

"/"  ---> HOME <br>
"/user-form"  ---> USER FORM (for signup or user info edition) <br>
"/signin"  ---> SIGNIN <br>
"/forgot-password"  ---> FORGOT PASSWORD (to have a password recovery email sent to you) <br>
"/new-password/:token"  --> NEW PASSWORD (to update your password) <br>
"/my-rachadas"  ---> MY RACHADAS (dashboard with all groups where the user is a member) <br>
"/rachada-form/:id"  ---> RACHADA FORM (to create or edit groups) <br>
"/rachada/:id"  ---> RACHADA VIEW (dashboard with all the group's expenses and balance insights) <br>
"/despesa-form/:id"  --> DESPESA FORM (to create or edit expenses) <br>
"/my-carteira"  ---> CARTEIRA (dashboard to manage personal wallet) <br>
"/deposit"  ---> DEPOSIT (to desposit money on your personal wallet) <br>
"/logout"  ---> LOGOUT

## Authors
Marcelo Oliveira - @marbmo <br>
Paul Divet - @pdiv55 <br>
Fred Conti - @fredericonti <br>
José Luiz Coe - @joseluizcoe <br>
Gabriel Sicuto - @gsicuto
