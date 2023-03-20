import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
var moment = require('moment')

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'name', headerName: 'Name', width: 330 },
  { field: 'description', headerName: 'Description', width: 400 },
  { field: 'created_at', headerName: 'Date', width: 100 },
  { field: 'html_url', headerName: 'Link', width: 400 },
];


type Repo = {
  id: number;
  name: string;
  description?:string;
  html_url: string;
  created_at: Date;
}

function DataTable() {

  const [ repositories, setRepositories ] = React.useState<Repo[]>([])

  const getData = () => {
    fetch('https://api.github.com/users/HTTyminski/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }

  React.useEffect(() => {
    getData();
  }, [])

  const rows = repositories.map((row) => ({
    id: row.id,
    name: row.name,
    description: row.description,
    html_url: row.html_url,
    created_at: moment(row.created_at).format("DD/MM/YY"),
  }))

  return (
    <div style={{ height: 400, width: '100%',color:"white" }}>
      <DataGrid
        className='dark:text-gray-600'
        getRowId={(row) => row.id}
        rows={rows}
        columns={columns}
      />
    </div>
  );
}

export default DataTable;