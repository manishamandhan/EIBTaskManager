import React from 'react'
import { Dsrmodel } from '../Model/Dsrmodel'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
interface Iprops {
  DsrCL: Dsrmodel[]
  fetchData: () => void
}
export const Dsrpagedatadetaillist: React.FC<Iprops> = ({ DsrCL }) => {
  const intialdsrdata: Dsrmodel = {
    dsrDetailsId: 0,
    ticket_Link: "",
    ticket_Description: "",
    time_Started: new Date(),
    estimated_Time: 0,
    time_Completed: new Date(),
    status: "",
    notes: "",
    createdBy: 0,
    modifiedBy: 0,
    dateCreated: "",
    dateModified: "",
    isDeleted: false,
  }
  const [open, setOpen] = React.useState(false);

  const [formdata, setFormdata] = React.useState(intialdsrdata)

  const columns: GridColDef[] = [

    { field: 'dsrDetailsId', type: "number", headerName: 'ID',align: 'center', headerAlign: 'center', hideSortIcons: true,  minWidth: 60 },
    { field: 'ticket_Link', type: "string", headerName: 'Ticket Link',align: 'center', headerAlign: 'center', hideSortIcons: true,  minWidth: 120 },
    { field: 'ticket_Description', type: "string", headerName: 'Ticket Description', hideSortIcons: true, minWidth: 130 },
    { field: 'time_Started', type: 'date', headerName: 'Time Started', align: 'center', hideSortIcons: true, headerAlign: 'center',minWidth: 120 },
    { field: 'estimated_Time', type: "number", headerName: 'Estimated Time',align: 'center', headerAlign: 'center', minWidth: 120 },
    { field: 'time_Completed', type: "date", headerName: 'Time Completed',align: 'center', hideSortIcons: true, headerAlign: 'center', minWidth: 120 },
    { field: 'status', type: "string", headerName: 'Status',align: 'center', hideSortIcons: true, headerAlign: 'center', minWidth: 90 },
    { field: 'notes', type: "string", headerName: 'Notes',align: 'center', hideSortIcons: true, headerAlign: 'center', minWidth: 120 },
    { field: 'createdBy', type: "number", headerName: 'Created By',align: 'center', hideSortIcons: true, headerAlign: 'center', minWidth: 120 },
    { field: 'modifiedBy',type:"string", headerName: 'Modified By',align: 'center', hideSortIcons: true, headerAlign: 'center',minWidth: 120},
    { field: 'dateCreated',type:"string", headerName: 'Date Created',align: 'center', hideSortIcons: true, headerAlign: 'center',minWidth: 120},
    { field: 'dateModified',type:"string", headerName: 'Date Modified',align: 'center', hideSortIcons: true, headerAlign: 'center',minWidth: 120},
    { field: 'isDeleted',type:"boolean", headerName: 'Is Deleted',align: 'center', hideSortIcons: true,    headerAlign: 'center',minWidth: 120}
  ];
  return (
    <div style={{ height: '75vh' }} >

      <DataGrid
      rows={DsrCL}
      columns={columns}
      // pageSize={50}
      // rowsPerPageOptions={[10]}
      style={{ textAlign: 'center' }}
      />

    </div>
  );
}
