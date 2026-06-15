export const tasks = {
    selectAll: `SELECT * FROM project_task WHERE project_id=$1; `,
    selectOne: `SELECT * FROM project_task WHERE project_id=$1 AND id=$2;`,
    delete: `DELETE FROM project_task WHERE id=$1`,
    edit: `UPDATE project_task SET title=$1,description=$2,status=$3,start_date=$4,end_date=$5,updated_at=NOW() WHERE id=$6;`,
    createNew: `INSERT INTO project_task (
      project_id,
      title,
      description,
      status,
      start_date,
      end_date
    )
    VALUES ($1, $2, $3, $4, $5,$6);`,
};
