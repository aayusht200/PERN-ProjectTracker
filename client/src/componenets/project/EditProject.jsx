import { useEffect, useState } from 'react';
import { replace, useNavigate, useParams } from 'react-router-dom';
import { BackButton } from '../BackButton';
import Input from '../Input';
import { fields } from './projectMetaData';
const EditProject = () => {
    const [data, setData] = useState([]);
    const { projectId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        function getData() {
            fetch(`http://localhost:3000/api/projects/${projectId}`)
                .then((response) => {
                    if (response.ok) return response.json();
                })
                .then((data) => {
                    setData(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        getData();
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/api/projects/${projectId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: data.title,
                description: data.description,
                status: data.status,
                start_date: data.start_date,
                end_date: data.end_date,
            }),
        })
            .then((response) => {
                if (response.ok) navigate('/projects', { replace: true });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function handleDelete() {
        fetch(`http://localhost:3000/api/projects/${projectId}`, { method: 'delete' })
            .then((response) => {
                if (response.ok) navigate('/projects', { replace: true });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div className="w-dvw h-dvh text-amber-200 p-5 text-sm md:text-md lg:text-lg bg-amber-800 grid grid-cols-10">
            <div className="col-span-1">
                <h1 className="font-extrabold text-2xl">Edit Project</h1>
                <BackButton />
            </div>
            <form className="edit-task col-span-9 grid gap-2" onSubmit={handleSubmit}>
                <Input
                    context={fields.title}
                    value={data.title || ''}
                    onChange={handleChange}
                    className="bg-amber-50  text-amber-500 h-fit"
                />
                <Input
                    context={fields.description}
                    value={data.description || ''}
                    onChange={handleChange}
                    className="bg-amber-50  text-amber-500 mb-4"
                />
                <Input
                    context={fields.status}
                    value={data.status || ''}
                    onChange={handleChange}
                    className="h-fit bg-amber-50  text-amber-500"
                />
                <Input
                    context={fields.start_date}
                    value={data.start_date || ''}
                    onChange={handleChange}
                    className=" bg-amber-50  text-amber-500"
                />
                <Input
                    context={fields.end_date}
                    value={data.end_date || ''}
                    onChange={handleChange}
                    className="bg-amber-50  text-amber-500"
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
export default EditProject;
