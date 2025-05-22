const notfound=(req,res)=>{
    return res.status(404).send("Route doesnot exists")
}
module.exports=notfound