# Shift Tracking Module

A backend system that allows employees to log in, start their shifts, and fill out their timesheets with project details. Built using Node.js, TypeScript, and PostgreSQL.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Use Cases](#use-cases)
- [Reporting](#reporting)
- [Contributing](#contributing)
- [License](#license)

## Features

- Employee registration and login
- JWT-based authentication
- Shift management (start and end shifts)
- Timesheet management
- Reporting of actual hours worked vs. assigned shift hours
- Export reports in Excel format

## Getting Started

### Prerequisites

- Node.js and npm
- PostgreSQL

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/dnyaneshwar33/shift-tracking-module.git
    cd shift-tracking-module
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the environment variables (see [Environment Variables](#environment-variables)).

4. Run database migrations:
    ```bash
    npx sequelize-cli db:migrate
    ```

5. Start the server:
    ```bash
    npm start
    ```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```plaintext
PORT=3000
DATABASE_URL=postgres://username:password@localhost:5432/shifttracking
JWT_SECRET=your_jwt_secret

Database Schema
Employee
id (UUID, Primary Key)
name (String)
email (String, Unique)
password (String, Hashed)
assignedShiftHours (Integer) - Number of hours assigned per shift
role (Enum: SuperAdmin, Manager, Employee)

Shift
id (UUID, Primary Key)
employeeId (UUID, Foreign Key)
startTime (Timestamp)
endTime (Timestamp, Nullable)
actualHours (Float, Computed)

Timesheet
id (UUID, Primary Key)
employeeId (UUID, Foreign Key)
shiftId (UUID, Foreign Key)
projectName (String)
taskName (String)
fromDate (Timestamp)
toDate (Timestamp)

Claims
id (UUID, Primary Key)
key (String) - Eg. CanReceiveReport, CanAssignTasks
value (String) - Eg. true, false
employeeId (UUID, Foreign Key)

### API Endpoints
Authentication
POST /register - Register a new employee
POST /login - Employee login

Shifts
POST /shifts/start - Start a new shift (Authenticated employees only)
POST /shifts/end - End a shift (Authenticated employees only)

Timesheets
POST /timesheets - Create a new timesheet entry (Authenticated employees only)

Reporting
GET /reports/hours - Generate a report of actual hours worked vs. assigned hours (Authenticated employees only)
GET /reports/hours/export - Export report in Excel format (Authenticated employees only)

Use Cases
Employee Login
An employee logs in using their email and password.
Upon successful login, a new shift record is created with the start time.

Shift End
When an employee logs out, the shift's end time is recorded, and the actual hours are calculated.

Timesheet Entry
The employee fills out a timesheet with details of the work done during the shift.
Timesheet entries include project name, task name, and the duration of the task.

Reporting
Generate a report comparing the actual hours worked to the assigned shift hours.
Export the report of actual hours worked by employees, assigned hours, date, and time in Excel format.

Reporting
Generate Reports
An API endpoint that aggregates and returns the data.

Export Reports
An API endpoint that returns the report in Excel format.
