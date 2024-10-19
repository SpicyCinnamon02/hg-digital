import React from 'react'
import CanvassBG from "/src/assets/home-page/canvass-bg.png"
import canvassMobile from "/src/assets/home-page/canvass-bg-mobile.png"

const Canvass = () => {
    return (
        <div
            className="h-[500px] lg:h-[70vh] py-[80px] sm:pt-[100px] sm:pb-[80px] bg-fill lg:bg-cover lg:bg-center bg-no-repeat flex justify-center items-center lg:items-end flex-col gap-10 lg:gap-5"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url(${CanvassBG})` }}
        >
            <div className='flex justify-center items-center lg:items-start flex-col w-[85%] lg:w-[85%] p-0 pt-[70px] lg:pt-[0] lg:pl-[30%] lg:pr-[13%] gap-5 lg:gap-7' >
                <h1 className='text-[25px] lg:text-[60px] font-bold text-green-darker tracking-tight leading-tighter lg:text-left text-center'>
                    Simplify Canvassing<br></br> with Smart Solutions
                </h1>
                <p className='text-[15px] w-[65%] lg:w-[75%] lg:text-[25px] font-medium text-center lg:text-left text-green-dark tracking-tight'>
                Map, track, and manage your canvassing efforts with intuitive tools for maximum outreach efficiency
                </p>
                <img src={canvassMobile} alt=""
                    className='h-[180px] block lg:hidden'
                />
            </div>
        </div>
    )
}

export default Canvass