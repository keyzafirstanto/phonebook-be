# Phonebook-be

## Overview

Phonebook-be is a backend project that serves as the backbone for a the client-site mobile application. It is built using TypeScript, JavaScript, Docker, MongoDB, and GraphQL. This repository contains the source code for the backend server, which handles data storage, retrieval, and serves as the API for the phonebook application.

## Table of Contents

- [Installation](#installation)
- [Tech Stacks](#tech-stack)
- [API Documentation](#api-documentation)

## Installation

To run this project locally, follow these steps:
  - `npm install`
    - if normal installation code return an error, you might use `npm install --force` to solve dependencies issue.
  - make sure docker daemon is running on your local computer
    - run `docker-compose up`
  - open new terminal and `cd` to the designated path where you this repo is cloned
    - run `npm start`
   
## Tech Stacks
  - GraphQL
  - Prisma
  - Typescript
  - Javascript
  - Docker
  - Redis

  Database: 
  - MongoDB
   
## API Documentation
  the server will be running on port `http://localhost:9001/core/contact` and you can create new postman with GraphQL as it type just like below
  <img width="1413" alt="Screen Shot 2023-09-06 at 8 53 38 am" src="https://github.com/keyzafirstanto/phonebook-be/assets/82820858/6ab909dd-1f23-4ad5-b065-3c468dbc3279">
  then all the available API will be automatically fetched
  
  <img width="1413" alt="Screen Shot 2023-09-06 at 8 56 46 am" src="https://github.com/keyzafirstanto/phonebook-be/assets/82820858/61a9b324-512f-4c54-b918-8d203c6df29f">


1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/phonebook-be.git
