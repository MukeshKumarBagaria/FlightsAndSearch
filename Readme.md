# Welcome to FlightAndSearch Service it is one of microservice for AirlineManagement Backend Project

## Project setup in your system
- Clone the project in your local using ` git clone <project url>`
- Install required dependencies using ` npm install` 
- Inside the `src/config` folder create a new file name as `config.json` and add the following json code into it and put your db username and password

```
{
  "development": {
    "username": <your db login name>,
    "password": <your db password>,
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

```
 - once you have added your db config as listed above ,go to the source folder from your terminal and execute ` npx sequelize db:create`
 and then execute 
 `npx sequelize db:migrate`
```

