import React from 'react'
import './video.css'

export default function Video(props) {
    return (
        <>
            <div>
                <video loop autoPlay muted id='bg-video'>
                    {/* <source src={Clip1} type='video/mp4' /> */}
                    <source src={props.Clip} type='video/mp4' />
                </video>
            </div>
            <div className='container position-absolute d-flex flex-column align-items-center videoall'>
                <h1 style={{color:"white"}}>{props.page}</h1>
                <div className='d-flex h4video'>
                    <h5 style={{marginRight:"2px"}}>Home</h5>
                    <h5>/</h5>
                    <h5 style={{marginLeft:"2px",}}>{props.page}</h5>
                </div>
            </div>
        </>
    )
}