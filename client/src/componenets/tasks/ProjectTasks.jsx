import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TableComponent from '../table/TableComponent';
import { columns } from './taskMetaData';
import { BackButton } from '../BackButton';
const ProjectTasks = () => {
    const { id } = useParams();
    const [tasks, setData] = useState([]);
    useEffect(() => {
        function getData() {
            fetch(`http://localhost:3000/api/projects/${id}/tasks`)
                .then((response) => response.json())
                .then((data) => setData(data))
                .catch((error) => console.log(error));
        }
        getData();
    }, []);
    return (
        <div className="w-dvw h-dvh text-blue-200 flex flex-col p-5 text-sm md:text-md lg:text-lg bg-blue-800">
            <div className="">
                <h1 className="font-extrabold text-2xl">Tasks</h1>
                <BackButton path={`/projects`} />
            </div>
            <TableComponent
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
