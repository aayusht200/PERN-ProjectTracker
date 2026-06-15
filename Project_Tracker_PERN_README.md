# Project Tracker (PERN Learning Project)

## Overview

A full-stack Project Tracker application built with the PERN stack (PostgreSQL, Express, React, and Node.js).

The purpose of this project is to learn backend development fundamentals by building and consuming REST APIs, designing relational database schemas, and integrating a React frontend with a PostgreSQL database.

This project serves as a learning sandbox before migrating the Dashboard application from local state and `localStorage` to a full-stack architecture.

---

## Goals

### Backend Fundamentals
- Understand the client-server architecture
- Learn the HTTP request-response lifecycle
- Build and consume REST APIs
- Learn server-side routing with Express
- Understand request bodies, route parameters, and status codes
- Practice validation and error handling

### Database Fundamentals
- Understand relational database design
- Learn tables, rows, and columns
- Practice schema design and normalization
- Learn primary and foreign keys
- Understand one-to-many relationships
- Perform CRUD operations using PostgreSQL

### Frontend Integration
- Fetch data from APIs
- Create, update, and delete records through the API
- Handle loading and error states
- Understand data flow between React and the backend

---

## Tech Stack

### Frontend
- React
- Vite

### Backend
- Node.js
- Express

### Database
- PostgreSQL

---

## Features

### Projects
- Create projects
- View all projects
- View project details
- Edit projects
- Delete projects

### Project Tasks
- Create tasks within a project
- View all tasks for a project
- Edit project tasks
- Delete project tasks
- Track task status

---

## Data Model

### Project

| Column | Description |
| ------ | ----------- |
| id | Unique identifier |
| title | Project title |
| description | Project description |
| status | Current project status |
| start_date | Project start date |
| end_date | Project end date |
| created_at | Timestamp when the project was created |

### Task

| Column | Description |
| ------ | ----------- |
| id | Unique identifier |
| project_id | Reference to parent project |
| title | Task title |
| description | Task description |
| status | Current task status |
| created_at | Timestamp when the task was created |

Relationship:

```text
Project
└── Many Tasks
```

---

## API Roadmap

### Read

```text
GET /api/projects
GET /api/projects/:id

GET /api/projects/:projectId/tasks
GET /api/projects/:projectId/tasks/:taskId
```

### Create

```text
POST /api/projects
POST /api/projects/:projectId/tasks
```

### Update

```text
PUT /api/projects/:id
PUT /api/projects/:projectId/tasks/:taskId
```

### Delete

```text
DELETE /api/projects/:id
DELETE /api/projects/:projectId/tasks/:taskId
```

---

## Architecture

```text
Browser
↓
React Application
↓
HTTP Request (fetch)
↓
Express Route
↓
Controller
↓
PostgreSQL Query
↓
JSON Response
↓
React State Update
```

---

## Suggested Folder Structure

```text
project-tracker/
├── client/
│   └── React application
└── server/
    ├── src/
    │   ├── routes/
    │   ├── controllers/
    │   ├── db/
    │   ├── middleware/
    │   └── app.js
    ├── package.json
    └── .env
```

---

## Learning Milestones

### Phase 1 – Project Setup
- Set up React client
- Set up Express server
- Set up PostgreSQL database
- Establish project structure

### Phase 2 – Database Design
- Create tables
- Define relationships
- Seed initial data

### Phase 3 – Read Operations
- Build GET endpoints
- Connect React to the API

### Phase 4 – Create Operations
- Build POST endpoints
- Submit forms to the API

### Phase 5 – Update Operations
- Build PUT endpoints
- Synchronize UI and database state

### Phase 6 – Delete Operations
- Build DELETE endpoints
- Handle data removal and UI updates

---

## Success Criteria

By the end of this project, I should be able to:

- Build a REST API with Express
- Design and query a PostgreSQL database
- Model one-to-many relationships
- Connect React to a backend service
- Implement full CRUD functionality
- Understand the complete request-response lifecycle
- Confidently begin migrating the Dashboard application to a full-stack architecture

---

## Next Step

```text
Dashboard v1 (Frontend MVP)
        ↓
Dashboard v2 (PERN)
React
↓
Express API
↓
PostgreSQL Database
```

The Dashboard v1 application will remain the MVP reference implementation throughout the migration process.
