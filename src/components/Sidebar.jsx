import React from 'react'
import { assets } from '../assets/assets'

function Sidebar() {
    return (
        <div className=' w-25 text-white p-2 d-flex flex-column' style={{height:'100%'}}>
            <div className='cls1 rounded d-flex flex-column ps-4'>
                <div className='cls2 d-flex align-items-center pt-2 gap-3'>
                    <img style={{width:"25px"}} src={assets.home_icon} alt="" />
                    {/* <i className="fa-solid fa-house" /> */}
                    <p style={{fontWeight:'bold'}} className=' mt-3'>Home</p>
                </div>
                <div className='cls2 d-flex align-items-center gap-3'>
                    <img style={{width:"25px"}}  src={assets.search_icon} alt="" />
                    {/* <i className="fa-solid fa-magnifying-glass" /> */}
                    <p style={{fontWeight:'bold'}} className='mt-3'>Search</p>
                </div>
            </div>

            <div className='cls3 rounded mt-2'>
                <div className='px-3 py-2 d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center gap-3'>
                        <img style={{width:"30px"}} src={assets.stack_icon} alt="" />
                        <p className='mt-3'>Your Library</p>
                    </div>
                    <div className='d-flex gap-3'>
                        <img style={{width:'20px'}} src={assets.arrow_icon} alt="" />
                        <img style={{width:'20px'}}  src={assets.plus_icon} alt="" />
                    </div>
                </div>
                <div className='cls4 p-4 m-2 rounded '>
                    <h5 style={{fontWeight:'bold'}}>Create your first playlist</h5>
                    <p className='text-light'>It's,easy we will help you</p>
                    <button style={{fontWeight:'bold'}} className='btn btn-light rounded-pill px-4'>Create Playlist</button>
                </div>
                <div className='cls4 p-4 m-2 mt-4 rounded '>
                    <h5 style={{fontWeight:'bold'}}>Let's find some podcasts to follow</h5>
                    <p className='text-light'>We'll keep you updated on new episods</p>
                    <button style={{fontWeight:'bold'}} className='btn btn-light rounded-pill px-4'>Browse podcasts</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar