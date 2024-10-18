const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  return res.json({
    message: "hello Docker with Node inside of container",
  });
});
app.listen(PORT, () => console.log(`server started with Port:${PORT}`));
