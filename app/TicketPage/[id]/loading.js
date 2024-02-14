"use client"
import React from 'react';
import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className=' flex justify-center items-center h-screen w-screen'>
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#3D3E28"
            ariaLabel="ball-triangle-loading"
            wrapperClass={'mx-auto'}
            wrapperStyle=""
            visible={true}
        />
    </div>
  )
}

export default Loading