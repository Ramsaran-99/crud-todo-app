const expess = require("express");

const Todo = require("./models/todo");

const router = expess.Router();

router.get("/todos", async (req,res) => {
    const todos = await Todo.find();
    res.status(200).json(todos);
});

router.post("/todos", async (req,res) => {
    const {task} = req.body;

    if (!task){
        return res.status(400),json({ msg: "Todo is Required" })
    }

    const newTodo = new Todo({ task });
    await newTodo.save();
    res.status(201).json(newTodo);
});

router.put("/todos/:id",(req,res) => {
    res.status(200).json({msg:"PUT todos /api/todos" }); // PUT is for editing.
});

router.delete("/todos/:id", async (req,res) => {
    const {id} = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({msg:"Todo deleted successfully" });
});

module.exports = router;

