# Israeli ID Validator API

A simple API that validates Israeli ID numbers using Node.js.

## Features
- Checks if an Israeli ID is valid according to the official checksum formula.
- Lightweight and easy to use.

## How to run locally

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-repo-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

## How to use the API
Send a GET request to:
```
http://localhost:3000/validate/:id
```
Replace `:id` with the ID number you want to validate.

### Example:
```
GET http://localhost:3000/validate/123456782
Response: { "valid": true }
```

## License
This project is open-source and free to use.
