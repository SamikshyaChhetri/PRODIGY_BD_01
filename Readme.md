# User Management API

## Overview

This is a simple REST API built with Express.js that manages user data with basic CRUD (Create, Read, Update, Delete) operations. The API uses in-memory storage and implements validation using Zod schemas.

## Features

- Create new users
- Retrieve all users
- Update existing users
- Delete users
- Data validation

## API Endpoints

| Method | Endpoint    | Description            |
| ------ | ----------- | ---------------------- |
| POST   | /Create     | Create a new user      |
| GET    | /read       | Get all users          |
| PATCH  | /update/:id | Update a specific user |
| DELETE | /delete/:id | Delete a specific user |

## Dependencies

- Express.js - Web framework
- UUID - For generating unique IDs
- Zod - Schema validation library

## Author

- Samikshya Baniya Chhetri
