class CustomAPIError extends Error{
    constructor(msg,statusCode){
        super(msg)
        this.statusCode=statusCode
    }
}
const createCustomError=(msg,code)=>{
    return new CustomAPIError(msg,code)
}
module.exports={createCustomError,CustomAPIError}