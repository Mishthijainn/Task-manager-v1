
const Task=require('../models/Tasks')
const asyncWrapper=require('../middleware/async')
const {createCustomError,CustomAPIError}=require('../errors/custom-error')
// const getAllTasks=async (req,res)=>{
//     try{
//         const task=await Task.find({})
//         res.status(200).json({task})
//         // res.status(200).json({task,amount:task.length})
//         // res.status(200).json({success:true,data:{task,nbHits:task.length}})
        
//     }catch(err){
//         res.status(401).json({error:err.message})
//     }
// }
const getAllTasks=asyncWrapper(async (req,res)=>{
      const task=await Task.find({})
      res.status(200).json({task})
})
// const createTask=async (req,res)=>{
//     try{
//         const task=await Task.create(req.body)
//         res.status(201).json({task})
//     }catch(err){
//         res.status(500).json({error:err.message})
//     }
// }
const createTask=asyncWrapper(async (req,res)=>{
      const task=await Task.create(req.body)
      res.status(201).json({task})
})
const getTask = asyncWrapper(async (req, res,next) => {
        const task = await Task.findById(req.params.id);
        if (!task) {
          return next(createCustomError('Task not found',404))
        }
        res.status(200).json(task); 
});

const updateTask = asyncWrapper(async (req, res,next) => {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!task) {
      next(error)
      // return res.status(404).json({ msg: 'Task not found' }); // Send 404 if task doesn't exist
    }

    res.status(200).json({ task }); // Return updated task
  
});



const deleteTask = asyncWrapper(async (req, res) => {
    const task = await Task.findByIdAndDelete({_id:req.params.id}); 
    if (!task) {
      return res.status(404).send('Task not found'); 
    }
    res.status(200).json({task});
  
});
module.exports={getAllTasks,createTask,updateTask,deleteTask,getTask}