# Motorway API: Trainee Backend Engineer Tech Task

Your task is to build a simple API that reads from a database table and returns all the rows in the JSON format. You must use [Express](http://expressjs.com/) and [Sequelize](https://sequelize.org/). Your application must create a table called `vehicles` with the following fields:

- `id`: primary key, sequential integer
- `make`: string
- `model`: string
- `createdAt`: datetime
- `updatedAt`: datetime

Your code should include a seeder file to populate the DB with some dummy data.

You can use any database of your choice.

**Deliverable:**

A Github repository with the complete task.

**Bonus points for:**

- Error handling
- Good commit history and messages
- Separation between network, handler and database layers
