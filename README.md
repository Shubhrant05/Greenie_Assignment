# Greenie SDE Assignment

This repo consist of the Greenie assignment for SDE role.

## Table of Contents

- [Greenie Assignment](#project-title)
- [Features](#features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)



## Features

The key features of the project are.

- Handling dummy request on account creation
- Displaying data in tabular format
- Making the tabular data searchable on the basis of email
- Showing a short report of individual data.
- Creating report.pdf of particular user

## Getting Started

Please follow following steps to set-up the project
- Clone the repository
- Run ```npm install``` to install all dependencies.
- Run ```npm run dev``` to run in development environment.

After this your project should be up and runing on ```localhost:3000```.

All this will be done over dummy database mentioned in ```DummyDB``` folder.

I have also implemented it in such a way that it can be used with an actual Database on MongoDB. All the required code for that is commented.

## Folder Structure
- ```pages/api``` : This folder contains three files. One to make a connection to DB and other files to get and post user details.
- ```pages/UserCreation.js``` : This file contains user creation code but since the project required dummy data hence only submit button event in handled but MongoDB implementation is present which can be utilised.
- ```pages/UserTable.js``` : This file helps us to show the data in a searchable tabular format. Data can be searched on the basis of email.
- ```component``` : This folder contains required components for the project.


