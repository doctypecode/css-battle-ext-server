import express from "express";
import cors from "cors";
import { minify } from "html-minifier";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.post("/api/minify", (req, res) => {
  const { html } = req.body;
  if (!html)
    return res.json({ success: false, message: "Please provide html" });
  const minified = minify(html, {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    minifyCSS: true,
    removeAttributeQuotes: true,
    removeComments: true,
  });
  return res.json({ success: true, minified });
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
});
