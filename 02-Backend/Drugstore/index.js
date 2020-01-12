const express = require("./node_modules/express");
const bodyParser = require("./node_modules/body-parser");
const cowsay = require("./node_modules/cowsay");
const app = express();

const DrogsRouters = require("./routers/DrugsRoute");
app.use(bodyParser.json());
app.use(DrogsRouters);

app.listen(3000, () => {
  console.log(
    cowsay.say({
      text: "Server started ",
      e: "oO",
      T: "U "
    })
  );
});
