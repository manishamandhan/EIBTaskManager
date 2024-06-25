import React, { useState } from 'react';
import { TaskModel } from '../Model/TaskModel';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef, GridToolbarFilterButton } from '@mui/x-data-grid';
// import { TaskDetailAddEdit } from '../AddeditPages.tsx/TaskDetailAddEdit';
import Swal from 'sweetalert2';
import { config } from '../Pages/Constant';
import { RiExpandUpDownLine } from "react-icons/ri";
import { Box, Button, IconButton, Link } from '@mui/material';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import Moment from 'moment';
import { TaskDetailAddEdit } from '../AddeditPages.tsx/TaskDetailAddEdit';
import { UserModel } from '../Model/UserModel';

interface Iprops {
  TaskCL: TaskModel[],
  fetchData: () => void
}
export const TaskDetailList: React.FC<Iprops> = ({ TaskCL, fetchData }) => {
  const initialtaskdata: TaskModel = { 
    taskId: 0,
    name: '',
    description: '',
    status: '',
    isDeleted: false,
    createdBy: 0,
    modifiedBy: 0,
    dateCreated: new Date(),
    dateModified: new Date(),
    devStartDate: new Date(),
    devCompleteDate: new Date(),
    devEstimateDate: new Date(),
    qaStartDate: new Date(),
    qaCompleteDate: new Date(),
    qaEstimateDate: new Date(),
    ownerId: 0,
    owner : {} as UserModel,
    reporteeId: 0,
    assigneeId: 0,

    projectId : 0,};

  
  const [Open, setOpen] = React.useState(false);
  const [Formdata, setFormData] = React.useState(initialtaskdata);

  const navigate = useNavigate();
  const goBack = () => {
      navigate(-1);
  }
  const columns: GridColDef[] = [

      {
        field: 'name', type: 'string', headerName: 'Task Name', flex: 3, hideSortIcons: true,
        renderHeader: (params) => (
            <div>
                <span className="table-card-title" >{params.colDef.headerName}</span>
                <RiExpandUpDownLine />
            </div>
        ), align: 'center', headerAlign: 'center'
      },
      {
        field: 'description', type: 'string', headerName: 'Task Description', flex: 3, hideSortIcons: true,
        renderHeader: (params) => (
            <div>
                <span className="table-card-title" >{params.colDef.headerName}</span>
                <RiExpandUpDownLine />
            </div>
        ), align: 'center', headerAlign: 'center'
      },
      {
        field: 'status', type: 'string', headerName: 'Task Status', flex: 3, hideSortIcons: true,
        renderHeader: (params) => (
            <div>
                <span className="table-card-title" >{params.colDef.headerName}</span>
                <RiExpandUpDownLine />
            </div>
        ), align: 'center', headerAlign: 'center'
      },
    //   {
    //     field: 'owner.email', type: 'string', headerName: 'Owner Email', flex: 3, hideSortIcons: true,
    //     valueGetter: (params) => ({params.row.attributes.identification_number}),
    //     renderHeader: (params) => (
    //         <div>
    //             <span className="table-card-title" >{params.colDef.headerName}</span>
    //             <RiExpandUpDownLine />
    //         </div>
    //     ), align: 'center', headerAlign: 'center'
    //   },
    //   {
    //     field: 'devStartDate', type: 'date', headerName: 'devStartDate', flex: 3, hideSortIcons: true,
    //     renderHeader: (params) => (
    //         <div>
    //             <span className="table-card-title" >{params.colDef.headerName}</span>
    //             <RiExpandUpDownLine />
    //         </div>
    //     ), align: 'center', headerAlign: 'center'
    //   },
    //   {
    //     field: 'devCompleteDate', type: 'date', headerName: 'devCompleteDate', flex: 3, hideSortIcons: true,
    //     renderHeader: (params) => (
    //         <div>
    //             <span className="table-card-title" >{params.colDef.headerName}</span>
    //             <RiExpandUpDownLine />
    //         </div>
    //     ), align: 'center', headerAlign: 'center'
    //   },



    //   {
    //       field: 'dateCreated', type: 'date', headerName: 'Date Created ', hideSortIcons: true,
    //       renderHeader: (params) => (
    //           <div>
    //               <span className="table-card-title" >{params.colDef.headerName}</span>
    //               <RiExpandUpDownLine />
    //           </div>
    //       ), flex: 3,
    //     //   valueFormatter: (params) => Moment(params?.value).format("YYYY-MM-DD")
    //        renderCell: (params) => 
    //         (<div> {params.row.dateCreated ? Moment(params.row.dateCreated).format("YYYY-MM-DD") : ""}</div>),
    //         align: 'center', headerAlign: 'center'
    //   },
    //   {
    //       field: 'dateModified', type: 'date', headerName: 'Date Modified ', flex:3, hideSortIcons: true,
         
    //       renderHeader: (params) => (
    //           <div>
    //               <span className="table-card-title" >{params.colDef.headerName}</span>
    //               <RiExpandUpDownLine />
    //           </div>
    //       ),  valueGetter: (params) => {
            
    //         const dateString = params.rows.dateModified;
    //         return dateString ? Moment(dateString, "YYYY-MM-DD").toDate() : null;
    //       },
    //   },
      {
          field: 'taskId', flex:3, align: 'center', headerAlign: 'center', hideSortIcons: true,
          renderHeader: (params) => (
              <div>
                  <span className="table-card-title" >{params.colDef.headerName}</span>
                  <RiExpandUpDownLine />
              </div>
          ), headerName: "Action", renderCell: (params) => (<div>
              <IconButton
                  color="primary"
                  onClick={() => { handleEdit(params.row) }}

              >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke="#02A4E3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
              </IconButton >
              
                  {/* <IconButton
                      color="error"
                      onClick={() => { handleDelete(params.row.transactionId) }}
                  >
                      {params.row.isDeleted ? <RestoreFromTrashIcon /> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 6H5M5 6H21M5 6V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6H5ZM8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="#162E3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      }
                  </IconButton > */}
                  
          </div>)
      }


  ];

  const handleClickOpen = () => {
      setFormData(initialtaskdata);
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };
  const handleSubmit = () => {
      fetchData();
      setOpen(false);
  };

  const handleEdit = (ttlData: TaskModel) => {
      setFormData(ttlData);
      setOpen(true);
  };

  const handleDelete = (id: number) => {
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          // icon: null, // Remove the icon property
          iconHtml: '<svg width="70" height="70" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="31" cy="31" r="31" fill="#02A4E3"/><path d="M31.0003 25.6667V31M31.0003 36.3334H31.0137M44.3337 31C44.3337 38.3638 38.3641 44.3334 31.0003 44.3334C23.6365 44.3334 17.667 38.3638 17.667 31C17.667 23.6362 23.6365 17.6667 31.0003 17.6667C38.3641 17.6667 44.3337 23.6362 44.3337 31Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          showCancelButton: true,
          confirmButtonColor: '#02A4E3',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Delete',
          customClass: {
              confirmButton: 'btn-radius',
              cancelButton: 'btn-radius',
              popup: 'card-radius'
          }
      })
          .then((result) => {
              if (result.isConfirmed) {
                  fetch(config.url.API_URL + "/Task/GetById?TaskId=1" + `${id}`
                      
                         )
                         
                      .then((response) => {
                          if (response.ok) {
                              Swal.fire(
                                  'Deleted!',
                                  'Your file has been deleted.',
                                  'success'
                              )
                              return response.json();
                          }
                          throw new Error('Something went wrong');
                      })
                      .then((res) => {
                          fetchData();
                          setOpen(false);
                      }).catch((error) => {
                          console.log(error)
                      });
                
              }
          })
      };

  function EditToolbar() {


      return (
          <Box
              sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  p: 1,
              }}
          >
              <div className="row col-lg-12" style={{ marginBottom: "10px" }}>

                  <div className="col-lg-4" style={{ fontSize: "32px" }}>
                      <span className="d-flex card-title">Task</span>
                  </div>
                  <div className="col-lg-4" style={{ textAlign: "center" }}>
                      <span className="card-title filter-blue" > <GridToolbarFilterButton /></span>
                  </div>
                  <div className="col-lg-4" style={{ textAlign: "right" }}>
                      <button
                          onClick={handleClickOpen}
                          style={{ marginRight: "30px", float: 'right', height: "50px" }}
                          className="btn active-btn-blue"
                      >
                          Add New
                      </button>
                  </div>


              </div>



          </Box>

      );

  }
  return (

      <div style={{ height: '75vh', width: '100%' }}>
          <DataGrid
              getRowId={(r) => r.taskId}
              rows={TaskCL}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[50]}
            //   pageSize={50}
            //   rowsPerPageOptions={[10]}
              style={{ textAlign: 'center' }}
              editMode="row"
            //   experimentalFeatures={{ newEditingApi: true }}
              slots={{
                  toolbar: EditToolbar,
              }}
              sx={
                  {
                      fontFamily: "'Proxima Nova', sans-serif;",
                      border: "0px",
                      fontSize: "16px"

                  }
              }
          />


          <TaskDetailAddEdit handleClose={handleClose} Open={Open} TaskCL={Formdata} handleSubmit={handleSubmit} initValues={initialtaskdata} ></TaskDetailAddEdit>

      </div>




  );
}
function useAuth(): { user: any; } {
  throw new Error('Function not implemented.');
}

