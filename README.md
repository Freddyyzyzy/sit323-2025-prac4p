# Calculator Microservice

## Overview
A simple RESTful calculator microservice built with Node.js and Express that provides basic arithmetic operations via API endpoints.

## Features
- Addition (`/add`)
- Subtraction (`/subtract`)
- Multiplication (`/multiply`)
- Division (`/divide`)
- Input validation and error handling
- Clear API documentation at root endpoint

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sit323-2025-prac4p.git
   cd sit323-2025-prac4p
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Base URL
`http://localhost:3000`

### Available Operations

#### Addition
```
GET /add?num1={number}&num2={number}
```
Example:
```
http://localhost:3000/add?num1=5&num2=3
```
Response:
```json
{"result":8}
```

#### Subtraction
```
GET /subtract?num1={number}&num2={number}
```
Example:
```
http://localhost:3000/subtract?num1=5&num2=3
```
Response:
```json
{"result":2}
```

#### Multiplication
```
GET /multiply?num1={number}&num2={number}
```
Example:
```
http://localhost:3000/multiply?num1=4&num2=5
```
Response:
```json
{"result":20}
```

#### Division
```
GET /divide?num1={number}&num2={number}
```
Example:
```
http://localhost:3000/divide?num1=10&num2=2
```
Response:
```json
{"result":5}
```

## Error Handling
The API returns appropriate error messages for:
- Invalid numeric input (non-number values)
- Division by zero attempts

Example error responses:
```json
{"error":"Invalid input. Please provide valid numbers."}
{"error":"Division by zero is not allowed."}
```

## Usage Examples
Using cURL:
```bash
curl "http://localhost:3000/add?num1=5&num2=3"
```

Using browser:
Simply visit the endpoint URLs in your web browser.

## Dependencies
- Express.js

## License
ISC
