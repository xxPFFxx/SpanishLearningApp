const express = require('express');
const path = require('path');
const app = express();

// Serve static files from current directory
app.use(express.static('./'));

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});