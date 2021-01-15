import React from 'react'
import ProfilPhoto from './ProfilPhoto'
import FullName from './FullName'
import Address from './Address'




function Profile() {
    return (
        <div className="card bg-primary text-white mt-5" style={{ width: '400px', height: "400px" }}>
            <img className="card-img" width='400px' height = "400px"/>
            <div className="card-img-overlay d-flex flex-column ">
                <ProfilPhoto/>
                <FullName/> 
                <Address/>
            </div>
        </div>

    )
}

export default Profile
