import React from "react";
import { Editor } from "react-draft-wysiwyg";

const Reports = () => {
  return (
    <div>
      {/* <div className="d-flex ">
        <div className="card-static-1 p-4 shadow-md me-3">
          <span>
            <i title="Go To User Page " className="fa-solid fa-user hover-icon cursor-pointer float-end" style={{ fontSize: "20px" }}></i>
          </span>
          <div className=" d-flex   mb-3">
            <img src="/assets/image/images.jfif" alt="User Avatar" className="me-3" style={{ height: "80px", width: "80px", borderRadius: "50%" }} />
            <div>
              <h2 className="text-xl font-bold text-foreground">Ragh</h2>
              <p className="">Software Engineer</p>
            </div>
          </div>
          <div className="">
            <p>Email: ragh@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <div className="d-flex justify-content-end align-items-center ">
              <span>
                <i title="Go To Dashboard Page " className="fa-solid fa-table-columns cursor-pointer hover-icon float-end" style={{ fontSize: "20px" }}></i>
              </span>
            </div>
          </div>
        </div>
        <div className="card-static-1 p-4 shadow-md me-3">
          <span>
            <i title="Go To User Page " className="fa-solid fa-user hover-icon cursor-pointer float-end" style={{ fontSize: "20px" }}></i>
          </span>
          <div className=" d-flex   mb-3">
            <img src="/assets/image/images.jfif" alt="User Avatar" className="me-3" style={{ height: "80px", width: "80px", borderRadius: "50%" }} />
            <div>
              <h2 className="text-xl font-bold text-foreground">Ragh</h2>
              <p className="">Software Engineer</p>
            </div>
          </div>
          <div className="">
            <p>Email: ragh@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <div className="d-flex justify-content-end align-items-center ">
              <span>
                <i title="Go To Dashboard Page " className="fa-solid fa-table-columns cursor-pointer hover-icon float-end" style={{ fontSize: "20px" }}></i>
              </span>
            </div>
          </div>
        </div>
        <div className="card-static-1 p-4 shadow-md me-3">
          <span>
            <i title="Go To User Page " className="fa-solid fa-user hover-icon cursor-pointer float-end" style={{ fontSize: "20px" }}></i>
          </span>
          <div className=" d-flex   mb-3">
            <img src="/assets/image/images.jfif" alt="User Avatar" className="me-3" style={{ height: "80px", width: "80px", borderRadius: "50%" }} />
            <div>
              <h2 className="text-xl font-bold text-foreground">Ragh</h2>
              <p className="">Software Engineer</p>
            </div>
          </div>
          <div className="">
            <p>Email: ragh@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <div className="d-flex justify-content-end align-items-center ">
              <span>
                <i title="Go To Dashboard Page " className="fa-solid fa-table-columns cursor-pointer hover-icon float-end" style={{ fontSize: "20px" }}></i>
              </span>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="mt-5">
        <div className="card-static-1 p-4 shadow-md me-3">
          <span>
            <i title="Go To User Page " className="fa-solid fa-user hover-icon cursor-pointer float-end" style={{ fontSize: "20px" }}></i>
          </span>
          <div className=" d-flex   mb-3">
            <img src="/assets/image/images.jfif" alt="User Avatar" className="me-3" style={{ height: "80px", width: "80px", borderRadius: "50%" }} />
            <div>
              <h2 className="text-xl font-bold text-foreground">Ragh</h2>
              <p className="">Software Engineer</p>
              <p>Email: ragh@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="">
            <div className="d-flex justify-content-end align-items-center ">
              <span>
                <i title="Go To Dashboard Page " className="fa-solid fa-table-columns cursor-pointer hover-icon float-end" style={{ fontSize: "20px" }}></i>
              </span>
            </div>
          </div>
        </div>

        <div className="card-static-2  shadow-md me-3 mt-5 bg-white">
          <div className=" text-center  mb-3">
            <img src="/assets/image/images.jfif" alt="User Avatar" className="" style={{ height: "200px", width: "350px", borderRadius: "0px 0px 50% 50%" }} />
            <div className="p-3 mt-3">
              <h2 className="text-xl font-bold text-foreground">Ragh</h2>
              <p className="mb-2">Software Engineer</p>
              <p>Email: ragh@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
          .
          <div className="bg-grey p-0" style={{ background: "grey", borderRadius: "12px" }}>
            <div className="p-3">
              <div className="d-flex justify-content-between align-items-center ">
                <span>
                  <i title="Go To Dashboard Page " className="fa-solid fa-table-columns cursor-pointer hover-icon" style={{ fontSize: "20px" }}></i>
                </span>
                <span>
                  <i title="Go To User Page " className="fa-solid fa-user hover-icon cursor-pointer" style={{ fontSize: "20px" }}></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-static-2  shadow-md me-3 mt-5 bg-white   ">
          <div className=" text-center  mb-3">
            <img src="/assets/image/images.jfif" alt="User Avatar" className="mt-3" style={{ height: "120px", width: "120px", borderRadius: "50%" }} />
            <div className="p-3 mt-3">
              <h2 className="text-xl font-bold text-foreground" style={{ fontSize: "32px" }}>
                Raghav Verma
              </h2>
              <p className="mb-2 ms-5 " style={{ fontSize: "12px" , fontWeight:""}}>
                Software Engineer
              </p>
            </div>
          </div>

          <div>
            <div className="mt-5">
              <div className="d-flex justify-content-between align-items-center ">
                <span className="bg-grey p-2 " style={{ background: "#4a4a4a", borderRadius: "0px 12px 12px 0px", width: "45%", height: "40px" ,fontSize:"12px"}}>
                ragh@example.com   <i title="Go To Dashboard Page " className="fa-regular fa-envelope cursor-pointer hover-icon float-end" style={{ fontSize: "16px" }}></i>  
          
                </span>
                <span className="bg-grey p-2 " style={{ background: "#4a4a4a", borderRadius: "12px 0px 0px 12px", width: "45%", height: "40px" ,fontSize:"12px"}}>
                  <i title="Go To User Page " className="fa-solid fa-phone hover-icon cursor-pointer me-2" style={{ fontSize: "16px" }}></i> (123) 456-7890
                 
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center  mt-3">
                <span className="bg-grey p-2 " style={{ background: "#4a4a4a", borderRadius: "0px 12px 12px 0px", width: "45%", height: "40px",fontSize:"12px" }}> Dashboard
                  <i title="Go To Dashboard Page " className="fa-solid fa-table-columns cursor-pointer hover-icon float-end" style={{ fontSize: "16px" }}></i>
                </span>
                <span className="bg-grey p-2 " style={{ background: "#4a4a4a", borderRadius: "12px 0px 0px 12px", width: "45%", height: "40px",fontSize:"12px" }}>
                  <i title="Go To User Page " className="fa-solid fa-user hover-icon cursor-pointer me-2" style={{ fontSize: "16px" }}></i> Profile
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Reports;
