const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.listen(3000);
app.get("/sendMessage", function (req, res) {
  
});

/*npm init
npm install express
npm install cors 
node index.js 
su browser localhost:3000/catcall?gianni=nome
*/
