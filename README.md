Trendr is a responsive full-stack app that allows users to view a curated board and vote on pictures, thus producing “the most trending picture”.


<b>Getting Started</b>

	Installing
    - Git clone https://github.com/nfcortega89/trendr-client
    -	Cd trendr-client
    -	Npm install

  Launching
    -	Npm start

  Testing
    -	Npm test

Introduction

	The main focus of Trendr is to have users vote on curated images and based on the votes, they are sorted and returned to show the most trending picture for that category.

How it works

	Pictures
    -	To be able to create a board, Trendr uses images from live Instagram accounts.

  Voting
    -	To be able to vote on images, users have to sign in. Users not logged-in can still browse, just not vote.

Technology

	Frontend
    -	HTML5
    -	CSS3
    -	Javascript

 	Backend
    -	Node.js + Express.js
    -	MongoDB + Mongoose
    -	Mocha + Chai
    -	Continues integration and deployment with Travis CI

  Responsive
    -	The app is fully responsive and quickly adapts to mobile and desktop viewports

  Security
    -	User login is handled through firebase login
