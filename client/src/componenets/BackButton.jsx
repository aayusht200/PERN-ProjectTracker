import { useNavigate } from 'react-router-dom';

export const BackButton = ({ path }) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(path || -1)} className="pl-10 pt-10">
            ⬅︎
        </button>
    );
};
