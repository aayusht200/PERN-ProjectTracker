import { useEffect, useState } from 'react';
import TableComponent from '../table/TableComponent';
import { columns } from './projectColumns.js';
import { useNavigate } from 'react-router-dom';
const ProjectPage = () => {
    const [projects, setData] = useState([]);
    useEffect(() => {
        function getData() {
            fetch('http://localhost:3000/api/projects')
                .then((response) => response.json())
                .then((data) => setData(data))
                .catch((error) => console.log(error));
        }
        getData();
    }, []);
    return (
        <div className="w-dvw h-dvh text-amber-200 flex flex-col p-5 text-sm md:text-md lg:text-lg bg-amber-800">
            <h1 className="font-extrabold text-2xl">Projects</h1>
            <TableComponent
                emptyMessage="No Projects!"
                data={projects}
                columns={columns}
                className="w-8/10 self-center text-center"
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
                    console.log(id);
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
