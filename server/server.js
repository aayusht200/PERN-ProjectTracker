import express from 'express';
import projectRoutes from './routes/project.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import cors from 'cors';
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:5173',
    })
);
app.use('/api/projects', projectRoutes);
app.use('/api/projects', taskRoutes);
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found',
    });
});
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        message: 'Internal Server Error',
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
