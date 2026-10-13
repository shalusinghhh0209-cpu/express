// console.log("Hello from Node.js!");
// console.log("1 + 2 =", 1 + 2);

// const {
//     sum : jodo,
//     subtract : minus,
//     multiply,
// } = require("./math/airthmaticops");

// console.log(jodo(1,2));
// console.log(minus(1,2));
// console.log(multiply(1,2));

import {
    sum as jodo,
    subtract as minus,
    multiply,
}  from "./math/airthmaticops.js";

console.log(jodo(1,2));
console.log(minus(1,2));
console.log(multiply(1,2));

import express from "express";
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello world");
});

app.listen(3000,() =>{
   console.log("server is running on http://localhost:3000");
});

app.get("/api/add",(req,res) => {
   const a= Number(req.query.a);
   const b =Number(req.query.b);
   res.json({a,b, sum:a+b});
});
