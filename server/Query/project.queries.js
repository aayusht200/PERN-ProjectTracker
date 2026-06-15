export const project = {
    createNew: `INSERT INTO project (
      title,
      description,
      status,
      start_date,
      end_date
    )
    VALUES ($1, $2, $3, $4, $5);`,
    selectAll: `SELECT * FROM project;`,
    selectOne: `SELECT * FROM project WHERE id=$1;`,
    delete: `DELETE FROM project WHERE id=$1;`,
    edit: `UPDATE project SET title=$1,description=$2,status=$3,start_date=$4,end_date=$5,updated_at=NOW() WHERE id=$6;`,
};


