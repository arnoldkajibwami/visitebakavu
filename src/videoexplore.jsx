import React from 'react'
import './video.css'

export default function Videoexplore(props) {
    return (
        <>
            <div>
                <video loop autoPlay muted id='bg-video'>
                    {/* <source src={Clip1} type='video/mp4' /> */}
                    <source src={props.Clip} type='video/mp4' />
                </video>
            </div>
        </>
    )
}