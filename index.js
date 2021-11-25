import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to my API");
});

import okta from "@okta/okta-sdk-nodejs";

const client = new okta.Client({
  orgUrl: "https://dev-52092247.okta.com/",
  token: "00Juo-rB3CDkSuqsU2ATcfuJSCtzcJ8q86MkXeeeT3",
});

app.get("/alluser", (req, res) => {
  const userList = [];
  const orgUsersCollection = client.listUsers();

  orgUsersCollection
    .each((user) => {
      userList.push(user);
    })
    .then(() =>
      res.send({
        data: userList,
        messages: "Successfully fetch all users",
        error: false,
      })
    );
});

const PORT = 3050;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
