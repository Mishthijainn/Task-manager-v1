const asyncWrapper=(fn)=>{
    return async (req,res,next)=>{
        try {
            await fn(req,res,next)
        } catch (error) {
            next(error) //this will directly call error middleware
        }
    }

}
module.exports=asyncWrapper