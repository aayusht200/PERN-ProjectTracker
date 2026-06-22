import { useEffect, useState } from 'react';
import TableComponent from '../table/TableComponent';
import { columns } from './projectMetaData.js';
import { useNavigate } from 'react-router-dom';
const ProjectPage = () => {
    const [projects, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        function getData() {
            fetch('http://localhost:3000/api/projects')
                .then((response) => response.json())
                .then((data) => setData(data))
                .catch((error) => console.log(error));
        }
        getData();
    }, []);
    function createNewProject() {
        fetch(`http://localhost:3000/api/projects`, { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                const { id } = data;
                navigate(`/project/${id}/edit`);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div className="w-dvw h-dvh text-amber-200 p-5 text-sm md:text-md lg:text-lg bg-amber-800 grid grid-cols-10">
            <div className="col-span-1 gap-5 flex flex-col items-center">
                <h1 className="font-extrabold text-2xl">Projects</h1>
                <button onClick={createNewProject}>New Project</button>
            </div>
            <TableComponent
                emptyMessage="No Projects!"
                data={projects}
                columns={columns}
                className="text-center col-span-9 h-fit"
                renderActions={(id) => <ActionBar id={id} />}
            />
        </div>
    );
};
function ActionBar({ id }) {
    const navigate = useNavigate();
    return (
        <div className="grid">
            <button
                className="border-b"
                onClick={() => {
                    navigate(`/project/${id}/edit`);
                }}
            >
                Edit
            </button>
            <button
                onClick={() => {
                    navigate(`/project/${id}/tasks`);
                }}
            >
                Tasks
            </button>
        </div>
    );
}
export default ProjectPage;
