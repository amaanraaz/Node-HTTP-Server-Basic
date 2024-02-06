const http = require('http');
const url = require('url');

// defining a port on which server will listen
const PORT = 3000;

// defining routes with handlers
const routes = {
    '/': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hi! Welcome to the root page');
    },
    '/about': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const aboutInfo = `A basic NodeJs server project created using built-in http module\nCreator: Aman Raj\nCreator Info: Hi, My name is Aman, I have experience of working in JS domain for more than a year and i have expertise of JS, NodeJs, ReactJs, ExpressJs, MySQL, TailwindCSS, TypeScript etc.`;
        res.end(aboutInfo);
    }
};

// Creating a HTTP server
const server = http.createServer((req, res) => {
    // parsing request URL
    const path = url.parse(req.url, true).pathname;

    // logging the request method and URL for the request incoming
    console.log(`Received request: ${req.method} ${req.url}`);

    // checking for existence of required route by using above routes method
    if (routes[path]) {
        // calling the corresponding handler for the route
        routes[path](req, res);
    } else {
        // handling non-existing routes with a 404 status code
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// server listening on the given port
server.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});
