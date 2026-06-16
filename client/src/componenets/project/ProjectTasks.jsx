import { useParams } from 'react-router-dom';

const ProjectTasks = () => {
    const { id } = useParams();
    console.log(id);
};
export default ProjectTasks;
