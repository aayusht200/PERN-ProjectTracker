import { formatDate, toCapitalize } from '../helperFunction/helperFunction';

const Input = ({ context, value = '', onChange, className = '', error = '' }) => {
    switch (context.type) {
        case 'text': {
            return (
                <TextField context={context} value={value} onChange={onChange} className={className} error={error} />
            );
        }
        case 'textarea': {
            return <TextArea context={context} value={value} onChange={onChange} className={className} error={error} />;
        }
        case 'select': {
            return (
                <DropDownList context={context} value={value} onChange={onChange} className={className} error={error} />
            );
        }
        case 'date': {
            return (
                <InputDate context={context} value={value} onChange={onChange} className={className} error={error} />
            );
        }
    }
};

const TextField = ({ context, value, onChange, className, error }) => {
    return (
        <div className={`flex`}>
            <label htmlFor={context.label}>{context.label} : </label>
            <input
                id={context.name}
                name={context.name}
                required
                value={value}
                onChange={onChange}
                type="text"
                className={error ? `border-red-500 ${className} rounded border` : `${className} rounded border`}
                required={context.required}
            />
            {error && <p>{error}</p>}
        </div>
    );
};
const TextArea = ({ context, value, onChange, className, error }) => {
    return (
        <div className="flex">
            <label htmlFor={context.name}>{context.label} : </label>
            <textarea
                id={context.name}
                name={context.name}
                value={value}
                onChange={onChange}
                type="text"
                className={
                    error
                        ? `border-red-500 ${className}  md:w-md lg:w-lg rounded border`
                        : `${className}  md:w-md lg:w-lg rounded border`
                }
                required={context.required}
            />
            {error && <p>{error}</p>}
        </div>
    );
};
const DropDownList = ({ context, value, onChange, className, error }) => {
    return (
        <div className="relative flex gap-2">
            <label htmlFor={`${context.name}-select`}>{context.label} :</label>
            <select
                name={context.name}
                id={`${context.name}-select`}
                onChange={onChange}
                className={`${className} rounded border cursor-pointer`}
                value={value}
            >
                {context.options.map((option) => (
                    <option key={option} value={option}>
                        {toCapitalize(option)}
                    </option>
                ))}
            </select>
        </div>
    );
};
const InputDate = ({ context, value, onChange, className, error }) => {
    return (
        <div>
            <label htmlFor={context.name}>{context.label} :</label>
            <input
                id={context.name}
                type="date"
                value={formatDate(value)}
                onChange={onChange}
                className={
                    error
                        ? `border-red-500 ${className} rounded border cursor-pointer`
                        : `${className} rounded border cursor-pointer`
                }
                name={context.name}
                required={context.required}
            />
            {error && <p>{error}</p>}
        </div>
    );
};
export default Input;
