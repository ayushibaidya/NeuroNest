import Task from '../models/Task.js';

// CREATE task
export const createTask = async (req, res) => {
  try {
    const { title, description, priority, energyRequired } = req.body;

    const task = new Task({
      userId: req.user._id,
      title,
      description,
      priority,
      energyRequired
    });

    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create task.' });
  }
};

// READ all tasks for a user
export const getTasksByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const tasks = await Task.find({ userId });
    res.status(200).json(tasks); 
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// UPDATE a task (mark as complete, edit details, etc.)
export const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const updated = await Task.findByIdAndUpdate(taskId, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update task.' });
  }
};

// DELETE a task
export const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    await Task.findByIdAndDelete(taskId);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete task.' });
  }
};
