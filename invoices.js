const express = require("express");
const db = require("../db");
const router = express.Router();
router.get("/",(req,res)=>{
 db.all("SELECT * FROM invoices",[],(e,r)=>res.json(r));
});
router.post("/",(req,res)=>{
 const {invoiceNumber,clientName,date,amount,status}=req.body;
 db.run("INSERT INTO invoices VALUES(NULL,?,?,?,?,?)",
 [invoiceNumber,clientName,date,amount,status],
 e=> e?res.status(400).json(e):res.json({message:"Added"}));
});
router.put("/:id",(req,res)=>{
 const {clientName,date,amount,status}=req.body;
 db.run("UPDATE invoices SET clientName=?,date=?,amount=?,status=? WHERE id=?",
 [clientName,date,amount,status,req.params.id],
 ()=>res.json({message:"Updated"}));
});
router.delete("/:id",(req,res)=>{
 db.run("DELETE FROM invoices WHERE id=?",[req.params.id],
 ()=>res.json({message:"Deleted"}));
});
module.exports=router;