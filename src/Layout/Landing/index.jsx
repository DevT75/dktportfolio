import React from 'react'

const TopCard = () => {
    return (
        <div className='flex flex-col items-center w-full h-full'>
            <div className='h-[10%] w-full bg-red-600 shadow-bottom'>

            </div>
            <div className='absolute right-10 bottom-5 shadow-custom w-[200px] h-[100px] border-2 border-black '>

            </div>
        </div>
    )
}

const BottomCard = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-full'>
            Hi
        </div>
    )
}

export const LandingPage = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 w-full h-full justify-center items-center bg-pokeball-sm bg-center transition-all duration-200 ease-out bg-cover lg:bg-pokeball-lg">
            <div className='relative bg-white border-2 border-black w-[80%] h-[40%] md:w-[70%] md:h-[40%] lg:w-[40%] lg:h-[60%]'>
                <TopCard />
            </div>
            <div className='relative bg-white border-2 border-black w-[80%] h-[40%] md:w-[70%] md:h-[40%] lg:w-[40%] lg:h-[60%]'>
                <BottomCard />
            </div>
        </div>
    )
}

// export default index
