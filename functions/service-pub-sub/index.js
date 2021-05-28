const express = require("express");
const app = express();

if (process.env.NODE_ENV != "production") {
  require("dotenv").config(); // variables de entorno
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on port: ${port}`));

app.post("/", async (req, res) => {
  const data = decodeBase64Json(req.body.data);
  try {
    coreFunction(data);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

function coreFunction(data) {
  console.log("all the process");
  console.log(data);
}

function decodeBase64Json(data) {
  return JSON.parse(Buffer.from(data, "base64").toString());
}
