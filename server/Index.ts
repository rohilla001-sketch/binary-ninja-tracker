import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
