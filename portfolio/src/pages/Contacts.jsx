import { useState } from "react"
import { X } from "lucide-react";
const Contacts = () =>{
    const [visible,setvisible] = useState(false)
    return(
        <>
            {
                visible &&(
                    <>
                        <div className="bg-black bg-opacity-70 text-white h-screen w-screen absolute z-50 flex flex-col justify-center items-center">
                        <div className='h-3/5 w-1/3 bg-black flex flex-col justify-center items-center rounded-lg'>
                        <div className="flex justify-between ">
                            <h1 className='text-white font-bold text-3xl'>Sign-Up</h1>
                            <X onClick={() => setvisible(false)} className="ml-36"/>
                        </div>
                        <form className='w-[80%] h-[80%] flex flex-col justify-center items-center gap-5'>
                            <input type='text' name='' id='' placeholder='Name' className='p-3 outline-none active:outline-none focus:outline-blue-500 bg-gray-600 text-white rounded-md w-full'></input>
                            <input type='text' name='' id='' placeholder='E-mail' className='p-3 outline-none active:outline-none focus:outline-blue-500 bg-gray-600 text-white rounded-md w-full'></input>
                            <input type='tel' name='' id='' placeholder='Phone' className='p-3 outline-none active:outline-none focus:outline-blue-500 bg-gray-600 text-white rounded-md w-full'></input>
                            <input type='password' name='' id='' placeholder='Password' className='p-3 outline-none active:outline-none focus:outline-blue-500 bg-gray-600 text-white rounded-md w-full'></input>
                            <br></br>
                            <button type='submit' className='w-[30%] bg-blue-900 text-white p-3 rounded-md'>Submit</button>
                        </form>
                        </div>
                        </div>
                    </>
                )
            }
            <div className="h-screen w-screen flex justify-center items-center">
                <button onClick={() => setvisible(true)} className="bg-red-600 p-2 px-4 text-white rounded-md">
                    Delete
                </button>
            </div>
        </>
    )
}

export default Contacts