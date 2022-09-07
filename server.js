require("dotenv").config({ path: ".env" });

console.log(process.env.DATABASE_NAME);
const app = require("./middleware/app");
require("./config/db");
app.listen(process.env.PORT, () => {
  console.log("Listening");
});
