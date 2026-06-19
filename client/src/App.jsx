import React from 'react';
import ProjectPage from './componenets/project/ProjectPage';
import ProjectTasks from './componenets/tasks/ProjectTasks';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router';
import { EditTask } from './componenets/tasks/EditTask';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/projects" replace />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/project/:id/tasks" element={<ProjectTasks />} />
            <Route path="/project/:projectId/tasks/:taskId" element={<EditTask />} />
        </Routes>
    );
}

export default App;
