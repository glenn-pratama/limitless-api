# Limitless API

A showcase for price monitoring apps. This is the backend. 

Based on [Expressjs](https://expressjs.com/)

The architecture is my interpretation of microservice paradigm and [clean architecture](http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). 

This is work in progress.

## Getting started

Install PostgreSQL for database.

Change [database config](https://github.com/glenn-pratama/limitless-api/blob/master/config/default.json) as necessary.

Run `yarn` to install all necessary packages.

Run `yarn run migrate` to create database schema.

## Available Scripts

In the project directory, you can run:

### `yarn run dev`

Runs the app in the development mode.<br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The application will reload when you make changes.

### `yarn run migrate`

Will create database schema

### `yarn run rollback`

Will rollback the creation of database schema. Careful with this as it will destroy the tables.

### `yarn run service`

Run service to collect price. `this is work in progress`
