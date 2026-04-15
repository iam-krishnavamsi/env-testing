console.log("Worker started");

// Try reading env
console.log("ENV TEST:", process.env.TEST_VAR);

// Keep alive
setInterval(() => {
  console.log("Worker running...");
}, 5000);
