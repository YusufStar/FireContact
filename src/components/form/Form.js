import React from 'react'
import { FaUserAlt } from "react-icons/fa"
import { AiFillPhone } from "react-icons/ai"

function Form({setname, setgender, setphone, add, name, gender, phone}) {
  return (
    <div className='h-[300px] w-[300px] flex flex-col justify-between items-center'>
        <div className="w-full h-[50px] bg-white rounded flex items-center justify-center font-semibold text-lg">Add Contact</div>
        <form onSubmit={(e) => add(e)} className="w-full h-[80%] bg-white rounded flex flex-col justify-between items-center py-5 px-3">
            <div className='border relative py-2 rounded pl-8 w-[95%] outline-none'>
                <FaUserAlt className='absolute left-2 group-focus:opacity-100 opacity-75' size={18}/>
                <input value={name} type="text" onChange={(e) => setname(e.target.value)} required placeholder='Name' className='w-full h-full outline-none'/>
            </div>
            <div className='border flex relative py-2 rounded pl-8 w-[95%] outline-none group'>
                <AiFillPhone className='absolute left-2 group-focus:opacity-100 opacity-75' size={20}/>
                <input value={phone} type="tel" onChange={(e) => setphone(e.target.value)} required placeholder='Phone Number' className='w-full text-black h-full outline-none'/>
            </div>
            <select required value={gender} onChange={(e) => setgender(e.target.value)} className='border py-2 rounded pl-3 w-[95%] outline-none'>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <button type='submit' className='py-2 w-[95%] bg-[#00b4ad] text-white font-semibold rounded'>Add</button>
        </form>
    </div>
  )
}

export default Form