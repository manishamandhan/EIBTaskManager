import React, { useState } from 'react'
import { Myprojectmodel } from '../Model/Myprojectmodel'

interface Projectprops {
    MyprojectCL: Myprojectmodel[];
    fetchData: () => void;
}
export const Myprojectdetaillist: React.FC<Projectprops> = ({ MyprojectCL, fetchData }) => {
    const initialProjectdata: Myprojectmodel = {
        projectid: 0,
        name: "",
        description: "",
    };
    const [projectdata, setProjectdata] = useState(initialProjectdata)

return (
    <div className="mt-5  col-lg-12">
    <div className='col-xl-5 col-lg-6 col-md-12'>
      <h3 className='card-title'>Project  Detail</h3>
      <div className="profile-detail mt-3 Card-static">
        <p className='mb-4'><strong>projectid:</strong><br />{projectdata.projectid}</p>
        <p className='mb-4'><strong>name:</strong><br />{projectdata.name}</p>
        <p className='mb-4'><strong>description:</strong><br />{projectdata.description}</p>
      </div>
    </div>
  </div>
)

}