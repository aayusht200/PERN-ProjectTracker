const Button = ({ type = 'button', onClick, className, children }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${className} font-bold border rounded-2xl p-1 hover:scale-110 h-fit pl-2 pr-2 cursor-pointer`}
        >
            {children}
        </button>
    );
};
export { Button };
