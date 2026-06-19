import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TableComponent from '../table/TableComponent';
import { columns } from './taskMetaData';
import { BackButton } from '../BackButton';
const ProjectTasks = () => {
    const { id } = useParams();
    const [tasks, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        function getData() {
            fetch(`http://localhost:3000/api/projects/${id}/tasks`)
                .then((response) => response.json())
                .then((data) => setData(data))
                .catch((error) => console.log(error));
        }
        getData();
    }, []);
    function createNewTask() {
        fetch(`http://localhost:3000/api/projects/${id}/tasks`, { method: 'post' })
            .then((response) => response.json())
            .then((task) => {
                navigate(`/project/${id}/tasks/${task.taskId}`);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div className="w-dvw h-dvh text-blue-200 flex  p-5 text-sm md:text-md lg:text-lg bg-blue-800">
            <div className="flex flex-col w-fit items-start gap-5">
                <h1 className="font-extrabold text-2xl">Tasks</h1>
                <BackButton path={`/projects`} />
                <button onClick={createNewTask}>New Task</button>
            </div>
            <TableComponent
                emptyMessage="No Tasks!"
                data={tasks}
                columns={columns}
                className="w-8/10 self-center text-center"
                renderActions={(taskId) => <ActionBar taskId={taskId} projectId={id} />}
            />
        </div>
    );
};

function ActionBar({ projectId, taskId }) {
    const navigate = useNavigate();
    return (
        <div className="grid">
            <button
                className=""
                onClick={() => {
                    navigate(`/project/${projectId}/tasks/${taskId}`);
                }}
            >
                Edit
            </button>
        </div>
    );
}
export default ProjectTasks;
