Table project {
  id uuid pk
  title varchar
  description text
  status varchar
  start_date date
  end_date date
  created_at timestamp
  updated_at timestamp
}

Table project_task {
  id uuid [pk]
  project_id uuid
  title varchar
  description text
  status varchar
  start_date date
  end_date date
  created_at timestamp
  updated_at timestamp
}

Ref: "project"."id" <  "project_task"."project_id"