const {createCustomError,CustomAPIError}=require('../errors/custom-error')

const errorHandlerMiddleware=((err, req, res) => {
    if(err instanceof CustomAPIError){
    return res.status(err.statusCode).json({ msg: err.msg });
    }
    return res.status(500).json({msg:"Not found"}) 
  });
module.exports=errorHandlerMiddleware