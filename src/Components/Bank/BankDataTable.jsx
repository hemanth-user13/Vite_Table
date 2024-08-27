import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import 'tailwindcss/tailwind.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'Txn Date', headerName: 'Txn Date', width: 150 },
  { field: 'Value Date', headerName: 'Value Date', width: 150 },
  { field: 'Description', headerName: 'Description', width: 300 },
  { field: 'Ref No./Cheque No.', headerName: 'Ref No./Cheque No.', width: 200 },
  { field: '        Debit', headerName: 'Debit', width: 150 },
  { field: 'Credit', headerName: 'Credit', width: 150 },
  { field: 'Balance', headerName: 'Balance', width: 150 }
];

const BankDataTable = ({ data }) => {
  return (
    <div className="p-4">
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={data} columns={columns} pageSize={5} />
      </div>
    </div>
  );
};

export default BankDataTable;
