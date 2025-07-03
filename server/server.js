import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import moodLogRoutes from './routes/moodLogRoutes.js'
import taskRoutes from './routes/taskRoutes.js'

dotenv.config()

const app = express(); 
const PORT = process.env.PORT || 5000; 

app.use('api/auth', authRoutes); 
app.use('api/mood', moodLogRoutes); 
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send("NeuroNest backend running with ESM!");
}); 

//connect to mongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB"); 
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
}).catch((error) => {
     console.error("MongoDB connection error:", error);
}); 