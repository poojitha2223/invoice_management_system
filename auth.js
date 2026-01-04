const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");
const router = express.Router();
router.post("/signup",(req,res)=>{
 const {name,email,password}=req.body;
 const hash=bcrypt.hashSync(password,8);
 db.run("INSERT INTO users VALUES(NULL,?,?,?)",[name,email,hash],
 err=> err?res.status(400).json(err):res.json({message:"User created"}));
});
router.post("/login",(req,res)=>{
 const {email,password}=req.body;
 db.get("SELECT * FROM users WHERE email=?",[email],(e,u)=>{
  if(!u||!bcrypt.compareSync(password,u.password))
   return res.status(401).json({message:"Invalid"});
  res.json({token:jwt.sign({id:u.id},"secret")});
 });
});
module.exports=router;