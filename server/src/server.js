import app from "./app.js";

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Your server is running on http://localhost:${port}`);
});
