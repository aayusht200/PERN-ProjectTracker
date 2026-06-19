import { formatDate, toCapitalize } from '../helperFunction/helperFunction';

const Input = ({ context, value = '', onChange, className = '' }) => {
    switch (context.type) {
        case 'text': {
            return <TextField context={context} value={value} onChange={onChange} className={className} />;
        }
        case 'textarea': {
            return <TextArea context={context} value={value} onChange={onChange} className={className} />;
        }
        case 'select': {
            return <DropDownList context={context} value={value} onChange={onChange} className={className} />;
        }
        case 'date': {
            return <InputDate context={context} value={value} onChange={onChange} className={className} />;
        }
    }
};

const TextField = ({ context, value, onChange, className }) => {
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
                className={`${className} rounded border`}
                required={context.required}
            />
        </div>
    );
};
const TextArea = ({ context, value, onChange, className }) => {
    return (
        <div className="flex">
            <label htmlFor={context.name}>{context.label} : </label>
            <textarea
                id={context.name}
                name={context.name}
                value={value}
                onChange={onChange}
                type="text"
                className={`${className} md:w-md lg:w-lg rounded border`}
            />
        </div>
    );
};
const DropDownList = ({ context, value, onChange, className }) => {
    return (
        <div className="relative flex gap-2">
            <label htmlFor={`${context.name}-select`}>{context.label} :</label>
            <select
                name={context.name}
                id={`${context.name}-select`}
                onChange={onChange}
                className={`${className} cursor-pointer rounded border text-center`}
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
const InputDate = ({ context, value, onChange, className }) => {
    return (
        <div>
            <label htmlFor={context.name}>{context.label} :</label>
            <input
                id={context.name}
                type="date"
                value={value}
                onChange={onChange}
                className={`${className} border rounnded`}
            />
        </div>
    );
};
export default Input;
