## Automatic unit testing

This is a little project showing how to avoid writing unit tests manually. 
Therefore the in- and output data of a function is recorded and saved to a database.

After changes on the functions, this data can be used to test if still the same outputs are produced. 

## Start

# Database

```
docker run -d -p 27017:27017 --name mongodb -v ~/Documents/Repositories/test/data:/data/db mongo:latest
```

# Project

```
npm install
npm start
```
