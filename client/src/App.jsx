import React from 'react';
import ProjectPage from './componenets/project/ProjectPage';
import ProjectTasks from './componenets/tasks/ProjectTasks';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/projects" replace />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/project/:id/tasks" element={<ProjectTasks />} />
        </Routes>
    );
}

export default App;
