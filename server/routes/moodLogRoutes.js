import express from 'express';
import { createMoodLog, getMoodLogsByUser, upsertDailyLog } from '../controllers/moodLogController.js';

const router = express.Router();

router.post('/', createMoodLog);

router.post('/daily', upsertDailyLog); 

router.get('/:userId', getMoodLogsByUser);

export default router;
