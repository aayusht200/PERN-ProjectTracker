import { toCapitalize } from '../../helperFunction/helperFunction';

const TableComponent = ({ data, columns, renderActions, className, emptyMessage }) => {
    // console.log(data);
    // console.log(columns);
    if (data.length <= 0) return <h2 className={`${className}`}>{emptyMessage}</h2>;
    return (
        <table className={`${className}`}>
            <thead className="border-inherit">
                <tr className="border border-inherit">
                    {Object.values(columns).map((data) => (
                        <th key={data.accessor}>{data.header}</th>
                    ))}
                    {renderActions && <th>Action</th>}
                </tr>
            </thead>

            <tbody className="overflow-auto border-inherit p-1">
                {Object.values(data).map((row) => {
                    return (
                        <tr key={row.id}>
                            {columns.map((col) => {
                                return (
                                    <td key={`${row.id}-${col.accessor}`} className="border p-1">
                                        {col.render ? col.render(row[col.accessor]) : toCapitalize(row[col.accessor])}
                                    </td>
                                );
                            })}
                            {renderActions && <td className="border p-1">{renderActions(row.id)}</td>}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TableComponent;
