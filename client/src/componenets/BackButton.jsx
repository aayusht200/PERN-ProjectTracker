import { useNavigate } from 'react-router-dom';

export const BackButton = ({ path, className }) => {
    const navigate = useNavigate();
    return (
        <button
            className={`${className} font-bold  hover:scale-150 cursor-pointer`}
            onClick={() => navigate(path || -1)}
        >
            ⬅︎
        </button>
    );
};
