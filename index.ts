console.log("Hello via Bun!");

Bun.serve({
    port: 8080, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
    // hostname: "mydomain.com", // defaults to "0.0.0.0"
    fetch(req) {
        return new Response(Bun.file('./src/index.html'), {
            headers: {
                "Content-Type": "text/html",
            },
        });
    },
});