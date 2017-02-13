/**
    index.js

    @author:
      Derek Johnston

    @desc:
      The entry-point for the Node.js application.
*/
import express from "express";

const app = express();

app.listen(8888, () => {
  console.log("Application is listening on port 8888");
});
