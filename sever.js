const { Vonage } = require("@vonage/server-sdk");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const vonage = new Vonage({
  apiKey: "b36e2b34",
  apiSecret: "XlghbwWKBWolo8Cc",
});

app.use(cors());

app.use(bodyParser.json());

app.post("/send-otp", (req, res) => {
  let { phoneNumber } = req.body;
  console.log(phoneNumber);
  vonage.verify
    .start({
      number: phoneNumber,
      brand: "Vonage",
    })
    .then((resp) => {
      if (resp.request_id) {
        console.log(resp.request_id);
        res.json({ request_id: resp.request_id });
      }
    })
    .catch((err) => console.error(err));
});

app.post("/verify-otp", (req, res) => {
  const { requestId, code } = req.body;
  console.log(requestId, code);
  const REQUEST_ID = requestId;
  const CODE = code;
  vonage.verify
    .check(REQUEST_ID, CODE)
    .then((resp) => {
      console.log(resp);
      if (resp.status === "0") {
        res.json({ status: "success" });
      } else {
        res.json({ status: "fail", error_text: resp.error_text });
      }
    })
    .catch((err) => console.error(err));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
