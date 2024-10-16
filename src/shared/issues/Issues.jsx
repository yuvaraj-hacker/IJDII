import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';

function Issues() {


    return (
        <>


            s
            <section >
                <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5 min-h-[85vh]">
                    <div className="lg:flex md:flex  gap-8 ">
                        <div className="max-w-full w-full ">
                            <h1 className="text-[#E4B1F0]    text-3xl font-bold ">Issues</h1>
                            <div className='grid  grid-flow-row grid-cols-2 mt-5 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                                <div className=' min-h-52 '>
                                    <h1 className='bg-[#E4B1F0] text-white p-2 pl-5 mb-2'>2024</h1>
                                    <ul className='list-disc pl-5'>
                                        <li><a href="#" className='text-[#4b2d8b] underline'>Volume 1  Issue 1</a></li>
                                    </ul>
                                </div>
                                {/* <div className=' min-h-52'>
                    <h1 className='bg-primary-dark-blue text-white p-2 pl-5 mb-2'>2025</h1>
                    <ul className='list-disc pl-5'>
                        <li><a href="#" className='text-primary-blue-color underline'>Volume 2  Issue 1</a></li>
                    </ul>
                    </div>
                    <div className=' min-h-52'>
                    <h1 className='bg-primary-dark-blue text-white p-2 pl-5 mb-2'>2026</h1>
                    <ul className='list-disc pl-5'>
                        <li><a href="#" className='text-primary-blue-color underline'>Volume 3  Issue 1</a></li>
                    </ul>
                    </div>
                    <div className=' min-h-52'>
                    <h1 className='bg-primary-dark-blue text-white p-2 pl-5 mb-2'>2027</h1>
                    <ul className='list-disc pl-5'>
                        <li><a href="#" className='text-primary-blue-color underline'>Volume 4  Issue 1</a></li>
                    </ul>
                    </div> */}

                            </div>



                        </div>



                    </div>


                </div>

            </section>

        </>
    )
}

export default Issues
