# Motorway API

## Table of Contents

- [Description](#description)
  - [Built With](#built-with)
- [Endpoints](#endpoints)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
  - [Launch the App](#launch-the-app)

## Description

This Node.js application uses an Express.js server and a MySQL database with Sequelize ORM.

The database contains a `vehicles` table which is queried via the api/vehicles endpoint.

### Built With

- Node.js
- Express.js
- MySQL
- Sequelize

## Endpoints

### `GET /api/vehicles`

- returns a list of all vehicle records

Sample response:

```json
{
  "success": true,
  "allVehicles": [
    {
      "id": 1,
      "make": "Hyundai",
      "model": "Ioniq 5",
      "createdAt": "2022-05-14T14:52:21.000Z",
      "updatedAt": "2022-05-14T14:52:21.000Z"
    },
    {
      "id": 2,
      "make": "Kia",
      "model": "EV6",
      "createdAt": "2022-05-14T14:52:21.000Z",
      "updatedAt": "2022-05-14T14:52:21.000Z"
    },
    {
      "id": 3,
      "make": "Skoda",
      "model": "Enyaq",
      "createdAt": "2022-05-14T14:52:21.000Z",
      "updatedAt": "2022-05-14T14:52:21.000Z"
    },
    {
      "id": 4,
      "make": "Fiat",
      "model": "500",
      "createdAt": "2022-05-14T14:52:21.000Z",
      "updatedAt": "2022-05-14T14:52:21.000Z"
    },
    {
      "id": 5,
      "make": "BMW",
      "model": "i4",
      "createdAt": "2022-05-14T14:52:21.000Z",
      "updatedAt": "2022-05-14T14:52:21.000Z"
    },
    {
      "id": 6,
      "make": "BMW",
      "model": "iX",
      "createdAt": "2022-05-14T14:52:21.000Z",
      "updatedAt": "2022-05-14T14:52:21.000Z"
    },
    {
      "id": 7,
      "make": "Ford",
      "model": "Mustang Mach-E",
      "createdAt": "2022-05-14T14:52:21.000Z",
      "updatedAt": "2022-05-14T14:52:21.000Z"
    },
    {
      "id": 8,
      "make": "Porsche",
      "model": "Taycan",
      "createdAt": "2022-05-14T14:52:21.000Z",
      "updatedAt": "2022-05-14T14:52:21.000Z"
    },
    {
      "id": 9,
      "make": "Tesla",
      "model": "Model 3",
      "createdAt": "2022-05-14T14:52:21.000Z",
      "updatedAt": "2022-05-14T14:52:21.000Z"
    },
    {
      "id": 10,
      "make": "Tesla",
      "model": "Model Y",
      "createdAt": "2022-05-14T14:52:21.000Z",
      "updatedAt": "2022-05-14T14:52:21.000Z"
    }
  ]
}
```

## Getting Started

### Installation

```
$ git clone https://github.com/kayleriegerpatton/motorway-api.git
$ cd motorway-api
$ npm install
```

### Environment Variables

In the root folder, add an `.env` file following the structure below (also in the .envEXAMPLE file):

```
DB_NAME=''
DB_USER=''
DB_PASSWORD=''
DB_HOST=''
```

### Database Setup

Create the motorway_db database using the schema.sql file via the terminal or MySQL Workbench:

```
DROP DATABASE IF EXISTS motorway_db;

CREATE DATABASE motorway_db;
```

Seed the data:

```
$ npm run seed
```

### Launch the App

```
$ npm run start
```
