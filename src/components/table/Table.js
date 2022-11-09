import React, { useState } from 'react'

function Table({data, deletedata}) {
  return (
    <div className='h-[300px] w-[450px] flex flex-col justify-between items-center'>
    <div className="w-full h-[50px] bg-white rounded flex items-center justify-center font-semibold text-lg">Contact</div>
        <div className="w-full h-[80%] bg-white rounded flex flex-col justify-between items-center">
            {data?.length > 0 ? (
                <div className='w-full h-[250px] nax-h-[250px] overflow-y-auto overflow-x-hidden'>
                <thead className='w-[450px] flex flex-row items-center px-3 bg-gray-300/70 justify-between py-2 rounded-t'>
                    <td className='text-center w-[112.5px] text-sm'>Username</td>
                    <td className='text-center w-[112.5px] text-sm'>Phone Number</td>
                    <td className='text-center w-[112.5px] text-sm'>Gender</td>
                    <td className='text-center w-[112.5px] text-sm'>Delete</td>
                </thead>
                <tbody className='w-full'>
                    {data?.map((user) => {
                        return (
                            <>
                                <tr className='w-[450px] flex flex-row items-center px-3 justify-between py-2'>
                                <td className='text-center w-[112.5px]'>{user?.name}</td>
                                <td className='text-center w-[112.5px]'>{user?.phone}</td>
                                <td className='text-center w-[112.5px]'>{user?.gender}</td>
                                <td onClick={() => {const index = data.indexOf(user); deletedata(index)}} className='text-center w-[112.5px] cursor-pointer hover:text-red-600 transition-all duration-200 text-md font-semibold'>X</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </div>
            ):(
                <div className='h-full w-full flex items-center justify-center'>
                    No Data Available
                </div>
            )}
        </div>
    </div>
  )
}

export default Table