![](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)![](https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white)![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)![](https://img.shields.io/badge/tmdb%20API-0088CC?style=for-the-badge&logo=&logoColor=white)
</br>[![Latest Stable Version](https://img.shields.io/badge/Express%20Winston-4.2.0-blue?style=for-the-badge)](https://www.npmjs.com/package/express-winston?activeTab=versions) 
[![Latest Stable Version](https://img.shields.io/badge/Winston-3.7.2-blue?style=for-the-badge)](https://www.npmjs.com/package/winston?activeTab=readme) 
[![Latest Stable Version](https://img.shields.io/badge/JOI-17.6.0-blue?style=for-the-badge)](https://www.npmjs.com/package/joi)
[![Latest Stable Version](https://img.shields.io/badge/bcryptjs-2.4.3-blue?style=for-the-badge)](https://www.npmjs.com/package/bcryptjs)
[![Latest Stable Version](https://img.shields.io/badge/passport%20jwt-4.0.0-blue?style=for-the-badge)](https://www.npmjs.com/package/passport-jwt)
[![Latest Stable Version](https://img.shields.io/badge/newman%20reporter-1.22.9-blue?style=for-the-badge)](https://www.npmjs.com/package/newman-reporter-htmlextra)
-----

# Assignment 2 - Web API.

<<<<<<< Updated upstream
Name: Your Name
=======
Name: Vibin Varghese [Student Id: 20096057]

## Overview 
>>>>>>> Stashed changes

> Project have APIs which is integrated to React Movies app. Which includes
+ TMDB endpoints and react movies app integration (Middleware APIs)
+ Account creation from movies app
+ Login from movies app 
+ Add, view and delete favourite movies
+ Create, view and delete fantasy movies
+ Private and public routes (Private : Favourite & Fantasy Movies) 
+ App is deployed in Microsoft Azure (Free tier account, for demonstration)
+ Winston logger enabled in the app
+ MongoDb as backend
+ JOI Validations(Account & Fantasy movie creation)
</br>

<<<<<<< Updated upstream
Give a brief overview of the Web API functionality.
=======
> List of APIs created and tested

##### Posting Data to MongoDB
+ Create Account
+ Create fantasy movies
+ Add favourite movies to Account
##### Geting Data from MongoDB & TMDB
+ Account Login, Get Token and account details by email id
+ Discover, upcoming, popular tv shows with **Pagination** from TMDB endpoints (integrated with React App)
+ Video Trailer, Poster from TMDB endpoints based on movies id
+ Get favourite movied based on user Id
+ Get fantasy movies based on id
##### Deleteing data from MongoDB
+ Delete favourite movies
+ Delete fantasy movies
>>>>>>> Stashed changes

## Installation Requirements
> Following softwares are required to run the API's.
+ Node.js 
   * Download Link: https://nodejs.org/en/  or Previous Releases: https://nodejs.org/en/download/releases/
   * Based on OS select the relevent installer   
   * Use *reccommended* version only
   * Web API App (ewd-api-2022) developed in **v16.13.2**   
+ MongoDB
   * For saving account details, favourite and fantasy movies   
   * Download Link: https://www.mongodb.com/try/download/community
   * Choose platform and package type and download
   * Web API App (ewd-api-2022) developed in **v5.0.8**
   * While installing, follow the instruction and accept all default settings. 
   * This will start a MongoDB service in the localhost after installation completed.
   * To view the MongoDB, open the MongoDBCompass from the start menu and press connect the localhost.
+ Windows Terminal to run command or use VS Integrated Terminal
> After all the software installation completed; Open the ternimal window, Using below command clone the API repository
```bat
git clone https://github.com/WIT-Vibin-2021/ewd-api-2022.git
```
> Once clone completed; Using terminal, navigate to cloned git repoistory path and run the below command
```bat
npm install
```

## API Configuration
> Before running the application, need to configure the environment of the app. User need to create a **".env"** file in the root directory of cloned repository. This file will not be available in this directory, since the gitignore have this file. Below is the structure of the .env file
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY=<<TMDB API Key>>
DATABASE_URL=mongodb://localhost:27017/movies_db
DATABASE_DIALECT=mongo
JWT_SECRET_KEY=ilikecake
```
* TMDB_KEY - API key from the TMDB webiste once register in the site.
  * Follow the link https://www.themoviedb.org/signup for register in TMDB. Once sign up, Settings > API > Create > Click on Request an API > Click "Developer" > Fill in Details to get the API key.
* DATABASE_URL - The URL of MongoDB installed and connected

## Start-up
> To run the app, open  the terminal and type the below command
```bat
npm start
```
* The npm start will invoke the scripts in package.json "nodemon --exec babel-node index.js" 
  * Nodemon - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
  * babel-node is a CLI that works exactly the same as the Node. js CLI, with the added benefit of compiling with Babel presets and plugins before running it.
  * index.js - Start index file of the app.
> To Stop the app, in the terminal press **ctrl + c** and press **'y'** for the prompted question *Terminate batch job (Y/N)?*.

## API Design
The layered approach used in this Web API App, whihc is influenced by clean architecture. The objective is to create software that is durable, split into layers, and independent of technology.
```bat
Routes ➡️ Controllers ➡️ Services ➡️ Repository ➡️ MongoDB 
                            ⬇️
                        TMDB AAPI   
```
## Swagger Document
[SwaggerHub Doc](https://app.swaggerhub.com/apis-docs/WIT-Vibin-2021/Movies_All_API/1.1-oas3) </br>
[Swagger Markdown](https://github.com/WIT-Vibin-2021/ewd-api-2022/blob/main/Swagger_Doc.md)

![image](https://github.com/WIT-Vibin-2021/ewd-api-2022/images/SwaggerHub.png)

## Security and Authentication
For security, few routes are protected with token and account verification is listed below..

| PATH                                 | GET                       | POST                          | PUT                      | DELETE                 |
| ------------------------------------ | ------------------------- | ----------------------------- | ------------------------ | ---------------------- |
| /api/accounts/email/{email}          | Fetch account by email    | N/A                           | N/A                      | N/A                    |
| /api/fantasymovies                   | N/A                       | Add new fantasy movie         | N/A                      | N/A                    |
| /api/movies/fantasymovie/{id}        | Fetch fantasy movie by Id | N/A                              | N/A                         | Delete fantasy movie   |
| /api/accounts/{userid}/favourites    | Fetch favourites by userid| Add new favorite movie        | N/A                      | N/A                    |
| /api/accounts/{userid}/favourites/{movieId}      | N/A                       | N/A       | N/A                      | Delete a favorite movie                    |


### Design

* WebApp API for movies is using MongoDB as backend to save Account details and Fantasy movies. 
* Two collections created in the MongoDb 
  * Accounts
  * Fantasymovies
* Each collection in DB have seperate folder structure in the app with new controller, services routes, repository.
* Account and fantasy movies have validation, JOI validation is added wit RegX
```bat
password:Joi.string().min(7).required().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/)
```
![image](https://github.com/WIT-Vibin-2021/ewd-api-2022/images/MongoDB.png)
## Integrating with React App

* Two major TMBD API(Upcoming movies and popular Tv shows with pagination) is replaced with the new Web app API. 
* Sign up account, Sign in, Add favourite movies to account, and Create fantasy movies are integrated with this Web app API.
* JWT Bearer token based authorization is set for the private routes.
> Github Repo of Movies App: https://github.com/WIT-Vibin-2021/moviesApp

> Example of an API call from React App. for deleting favourite movies based on movies id and user id

~~~Javascript
export const removeFavouriteMovies = (userid, movieid) => {
    return fetch(`/api/accounts/${userid}/favourites/${movieid}`, {
        headers: {
            'Content-Type': 'application/json',
            'token': window.localStorage.getItem('token')
        },
        method: 'delete',
        body: JSON.stringify({ movieId: movieid })
    }).then(res => res.json())
};

~~~
## Post Man Testing
- All API is tested in postman
- Seperate collection created and all passed test run.
- Good use of collection and environments variables
- Random variable learning and used in pre-request script for Fantasy movie POST testing
![image](https://github.com/WIT-Vibin-2021/ewd-api-2022/images/PostMan.png)
> Test Report
![image](https://github.com/WIT-Vibin-2021/ewd-api-2022/images/TestReport.png)

## Live Hosting
- Web API app is hosted in Microsoft Azure
- Based on WIT mail id, I have registered a free tire subscription with limited credit and resources
- Azure Cosmos DB is used to view the data stored in the Azure MongoDB
> Azure Console
![image](https://github.com/WIT-Vibin-2021/ewd-api-2022/images/AzureConsole.png)
> Azure CosmosDB
![image](https://github.com/WIT-Vibin-2021/ewd-api-2022/images/AzureCOSMOS.png)
> Azure call from Post man
![image](https://github.com/WIT-Vibin-2021/ewd-api-2022/images/AzurePostMan.png)

## Extra features

- Delete API for favourite and fantasy movies.
- JOI Validation while posting data to DB.
- Logging enabled in the app(writes to files and in console), Winston Logger used (https://www.npmjs.com/package/winston?activeTab=readme  v3.7.2).
- Express-winston for logging HTTP request. (https://www.npmjs.com/package/express-winston?activeTab=versions  v4.2.0)
- Authorization checking in all level in movies app.
- Token and related data saved in local, so that even after movies app reload user will not logout automatically. 
- Private and protected routes for movies app and web app API

## Independent learning.

- Microsoft Azure hosting of Nodejs API- 
- Multiple branch in git hub, with tag and release
- Swagger Documentation
- Winston logging options
- Post man test scripts
