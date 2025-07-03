import express from 'express';
import {
  createTask,
  getTasksByUser,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /api/tasks - create a new task
router.post('/', protect, createTask);

// GET /api/tasks/:userId - get all tasks for a user
router.get('/:userId', protect, getTasksByUser);

// PUT /api/tasks/:taskId - update a task
router.put('/:taskId', updateTask);

// DELETE /api/tasks/:taskId - delete a task
router.delete('/:taskId', deleteTask);

export default router;
