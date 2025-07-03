import express from 'express';
import { createMoodLog, getMoodLogsByUser } from '../controllers/moodLogController.js';

const router = express.Router();

router.post('/', createMoodLog);

router.get('/:userId', getMoodLogsByUser);

export default router;
