const http = require('http');
const clearCodeChecker = require('clearcodechecker');

function startServer() {
    const server = http.createServer((req, res) => {
        if (req.method === 'POST' && req.url === '/check') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });

            req.on('end', () => {
                // Parse the received JSON data
                const requestData = JSON.parse(body);

                if (requestData && requestData.code) {
                    // Check the quality of the provided code
                    const result = clearCodeChecker(requestData.code);

                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({ result }));
                } else {
                    res.writeHead(400, {'Content-Type': 'text/plain'});
                    res.end('Bad request: Missing code in the request body.\n');
                }
            });
        } else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found\n');
        }
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

// Export the startServer function for usage in other modules
module.exports = startServer;
