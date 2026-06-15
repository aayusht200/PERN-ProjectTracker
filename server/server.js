import express from 'express';
import projectRoutes from './routes/project.routes.js';
import taskRoutes from './routes/tasks.routes.js';
const app = express();
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/', taskRoutes);
app.listen(3000, () => {
    console.log('Connection sucessful.');
});
