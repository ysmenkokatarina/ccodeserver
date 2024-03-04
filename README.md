# ccodeserver

`ccodeserver` is a simple web server written in JavaScript that provides an endpoint for checking the quality of JavaScript code using `clearcodechecker` as a dependency.

## Installation

Install `ccodeserver` via npm:

```bash
npm install ccodeserver
```

## Usage

You can use `ccodeserver` to start a web server that listens for POST requests on the `/check` endpoint. You can send JavaScript code in the request body to be checked for quality.

Example:

```javascript
const startServer = require('ccodeserver');

// Start the web server
startServer();
```

Send a POST request to `http://localhost:3000/check` with JSON payload containing the code to be checked:

```json
{
    "code": "function greet(name) { console.log('Hello, ' + name); } greet('World');"
}
```

The server will return the output from `clearcodechecker` as the result.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
