// import React, { useState } from 'react'
// import Sidebar from './Sidebar';
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom"
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";
const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (

    <>
      <div className='d-flex'>
        {/* <!-- Toggler button only visible on smaller screens --> */}
        <button className="d-lg-none menu-btn-sidebar sidebar_toggle_btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <i className="fa-solid fa-bars"></i>
        </button>
        {/* <!-- Sidebar - visible on all screens, but offcanvas on small screens --> */}
        <div className="offcanvas-lg  offcanvas-start sidebar-offcanvas  canvas-width-set overflow-scroll-md " id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" >
          <div className="offcanvas-header bg-color"  >
            <h5 className="offcanvas-title img-logo-eib" id="offcanvasExampleLabel"><img src="assets/image/logo-inverse.png" alt="" /></h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body ">
            <ul className='text-start side-nav-items metismenu main-sidebar' id="sidebar_menu">  <a className='img-logo-eib-1' href='/'>
              <img src="/assets/image/logo-inverse.png" alt="" />
            </a>
              <li className="mb-2 mt-5 list-unstyled">
                <a href="/Dashboard" className="sidebar-nav-links" title="Dashboard">
                  <i className="fa-solid fa-table-columns"></i> <span className='ms-2'>Dashboard</span>
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a href="/Myprojects" className="sidebar-nav-links" title="My Projects">
                  <i className="fa-solid fa-diagram-project"></i><span className='ms-2'>My Projects</span>
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a href="/Calender" className="sidebar-nav-links" title="Calender">
                  <i className="fa-solid fa-calendar-days"></i> <span className='ms-2'>Calender</span>
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a href="/Reports" className="sidebar-nav-links" title="My Reports">
                  <i className="fa-solid fa-flag-checkered"></i><span className='ms-2'>My Reports</span>
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a href="/Mytasks" className="sidebar-nav-links" title="My Tasks">
                  <i className="fa-solid fa-list-check"></i><span className='ms-2'>My Tasks</span>
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a href="/Users" className="sidebar-nav-links" title="My Users">
                  <i className="fa-solid fa-list-check"></i><span className='ms-2'>Users</span>
                </a>
              </li>
              <li className="mb-2 list-unstyled">
                <a href="/Profilepage" className="sidebar-nav-links" title="">
                  <i className="fa-solid fa-user"></i> <span className='ms-2'>Profile</span>
                </a>
              </li>
              <li className=' list-unstyled mb-2'>
                {/* <a href="/Login"><Button className='main-btn'>Logout</Button></a> */}
                <a href="/Login"><Button
                  startIcon={<LogoutIcon />}
                  className='main-btn mr-5 '
                >
                  Log Out
                </Button></a>
              </li>
            </ul>

          </div>
        </div>
        <div className="w-100 " >
          <div className="p-2">


            <nav className="navbar navbar-expand navbar-custom-styling " aria-label="Seventh navbar example">
              <div className="container-fluid">

                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleXxl" aria-controls="navbarsExampleXxl" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleXxl">
                  <form role="search" className=" me-auto mb-2 mb-xl-0">
                    {/* <h3 className="card-title">Welcome,Username </h3>
                    <p className="grey"> Department Name</p> */}
                  </form>
                  <ul className="navbar-nav align-items-center">
                    <li className="nav-item ">
                      {/* <input
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        className="search-bar me-2"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      /> */}
                      {/* <a className="nav-link active Add-task-btn me-2" aria-current="page" href="#"><i className="fa-solid fa-plus me-2" ></i> Add New Task </a> */}
                    </li>

                    <li className="nav-item">
                      <a className="nav-link me-2" aria-current="page" href="#"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="23"
                        height="23"
                      >
                        <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                      </svg> </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link me-2 " aria-current="page" href="/Login"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="25"
                        height="25"
                      >
                        <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                      </svg> </a>
                    </li>
                  </ul>

                </div>
              </div>
            </nav>
          </div>
          <Box
            className="layout-padding m-2"
          >
            <div className="p-5">
              <Outlet />
            </div>

          </Box>
        </div>
      </div>


    </>
  )
}

export default Layout