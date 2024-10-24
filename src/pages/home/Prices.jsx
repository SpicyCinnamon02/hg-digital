import React from 'react'
import { FaCheck,FaPlus } from "react-icons/fa";

export const priceOpt = [
    {
        title: 'Free Trial',
        price: '7 Days',
        description: 'Try our tools and services',
        inclusion: ['Try out all the Standard Tools'],
        button: 'Free',
    },
    {
        title: 'Standard',
        price: '$199',
        description: 'Try our tools and services',
        inclusion: ['Project Management', 'Project Camera', 'Proposal Tools', 'Referral App', 'Digital Business Card', 'Canvassing Tool', 'Reputation Management', 'Appointment Setting', 'Email Marketing'],
        button: 'Subscribe',
    },
    {
        title: 'Pro',
        price: '$299',
        description: 'Try our tools and services',
        inclusion: ['Project Management', 'Project Camera', 'Proposal Tools', 'Referral App', 'Digital Business Card', 'Canvassing Tool', 'Reputation Management', 'Appointment Setting', 'Email Marketing', 'Training Center', 'Marketing Links', 'VA Software', 'GHI Pipelines',],
        button: 'Subscribe',
    },
]
const Prices = () => {
    return (
        <div className='flex justify-center items-center gap-5 py-10'>
            {priceOpt.map((prices) => (
                <div className='flex justify-between items-start flex-col shadow-lg h-[700px] w-[400px] border border-green-light rounded-xl lg:px-[50px] lg:py-[30px] transform hover:scale-105 transition-all duration-300'>
                    <div className='border-b border-gray-400 pb-[20px]'>
                        <p className='text-[20px] lg:text-[40px] font-black text-green-darker'>{prices.title}</p>
                        <p className='text-20px '>{prices.description}</p>
                    </div>
                    <div className='flex justify-center items-start flex-col lg:gap-2'>
                        {prices.inclusion.map((features, i) => (
                            <div key={i} className='flex items-center'>
                                {prices.title === 'Pro' && !priceOpt[1].inclusion.includes(features) ? (
                                    <FaPlus className='text-yellow-dark text-[20px] mr-2' />
                                ) : (
                                    <FaCheck className='text-green-600 mr-2' />
                                )}
                                <p>{features}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center flex-col w-full gap-3'>
                        <p className='text-[28px] font-semibold text-green-mid'>{prices.price}</p>
                        <button
                        className="px-3 py-2 lg:px-0 lg:py-2 text-[14px] lg:text-[18px] lg:w-[150px] bg-green-light text-white font-semibold rounded-lg shadow-md hover:bg-green-darker focus:outline-none hover:text-white focus:ring-2 focus:ring-opacity-75 transition duration-300"
                    >
                            {prices.button}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Prices