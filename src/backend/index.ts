import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Welcome to FoodLink" });
});

// get default port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
