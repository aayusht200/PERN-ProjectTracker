import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fields } from './taskMetaData';
import Input from '../Input';
import { BackButton } from '../BackButton';
export const EditTask = ({ data }) => {
    const { projectId, taskId } = useParams();
    const [task, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        function getData() {
            fetch(`http://localhost:3000/api/projects/${projectId}/tasks/${taskId}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => setData(data))
                .catch((error) => console.log(error));
        }
        getData();
    }, []);
    function handleChange(e) {
        const target = e.target.name;
        const value = e.target.value;
        setData((prev) => ({
            ...prev,
            [target]: value,
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/api/projects/${projectId}/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: task.title,
                description: task.description,
                status: task.status,
                start_date: '2026-05-28',
                end_date: '2026-05-28',
            }),
        })
            .then((response) => {
                if (response.ok) navigate(`/project/${projectId}/tasks`, { replace: true });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function handleDelete(e) {
        fetch(`http://localhost:3000/api/projects/${projectId}/tasks/${taskId}`, { method: 'delete' })
            .then((response) => {
                if (response.ok) navigate(`/project/${projectId}/tasks`, { replace: true });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div className="w-dvw h-dvh text-blue-200 p-5 text-sm md:text-md lg:text-lg bg-blue-800 grid grid-cols-10">
            <div className="col-span-1">
                <h1 className="font-extrabold text-2xl">Edit Tasks</h1>
                <BackButton />
            </div>
            <form className="edit-task col-span-9 grid gap-2" onSubmit={handleSubmit}>
                <Input
                    context={fields.title}
                    value={task.title || ''}
                    onChange={handleChange}
                    className="bg-blue-50  text-blue-500 h-fit"
                />
                <Input
                    context={fields.description}
                    value={task.description || ''}
                    onChange={handleChange}
                    className="bg-blue-50  text-blue-500 mb-4"
                />
                <Input
                    context={fields.status}
                    value={task.status || ''}
                    onChange={handleChange}
                    className="h-fit bg-blue-50  text-blue-500"
                />
                <Input
                    context={fields.start_date}
                    value={task.start_date || ''}
                    onChange={handleChange}
                    className=" bg-blue-50  text-blue-500"
                />
                <Input
                    context={fields.end_date}
                    value={task.end_date || ''}
                    onChange={handleChange}
                    className="bg-blue-50  text-blue-500"
                />
                <div className="action flex gap-20">
                    <button type="button" onClick={handleDelete}>
                        Delete
                    </button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};
