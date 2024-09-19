import Picture from '../assets/img/chopper.png'
const Project = () =>{
    return(
        <div className="w-screen h-screen text-white flex flex-col justify-center gap-10">
            <div className="text-4xl ml-10">
                Projects
            </div>
            <div className="flex justify-around">
                <div className="flex flex-col w-[25rem] border-2 p-3 gap-6 rounded-2xl">
                    <div className="h-[15rem] border-2 flex justify-center rounded-2xl">
                        <img className='h-[14.7rem]' src={Picture}></img>
                    </div>
                    <div className="h-[20rem] flex flex-col gap-3">
                        <div className="text-xl">
                            STUDENT DB
                        </div>
                        <div className='flex flex-col gap-3'>
                            <ul>
                                <li>Developed a database application using Java and SQL to store student information.</li>
                                <li>Implemented user authentication and authorization using SQL.</li>
                            </ul>
                            <a href='https://github.com/Paulson-23/student_DB' target='_blank'>https://github.com/Paulson-23/student_DB</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[25rem] border-2 p-3 gap-6 rounded-2xl">
                    <div className="h-[15rem] border-2 flex justify-center rounded-2xl">
                        <img className='h-[14.7rem]' src={Picture}></img>
                    </div>
                    <div className="h-[20rem] flex flex-col gap-3">
                        <div className="text-xl">
                            STUDENT DB
                        </div>
                        <div className='flex flex-col gap-3'>
                            <ul>
                                <li>Developed a database application using Java and SQL to store student information.</li>
                                <li>Implemented user authentication and authorization using SQL.</li>
                            </ul>
                            <a href='https://github.com/Paulson-23/student_DB' target='_blank'>https://github.com/Paulson-23/student_DB</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[25rem] border-2 p-3 gap-6 rounded-2xl">
                    <div className="h-[15rem] border-2 flex justify-center rounded-2xl">
                        <img className='h-[14.7rem]' src={Picture}></img>
                    </div>
                    <div className="h-[20rem] flex flex-col gap-3">
                        <div className="text-xl">
                            STUDENT DB
                        </div>
                        <div className='flex flex-col gap-3'>
                            <ul>
                                <li>Developed a database application using Java and SQL to store student information.</li>
                                <li>Implemented user authentication and authorization using SQL.</li>
                            </ul>
                            <a href='https://github.com/Paulson-23/student_DB' target='_blank'>https://github.com/Paulson-23/student_DB</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[25rem] border-2 p-3 gap-6 rounded-2xl">
                    <div className="h-[15rem] border-2 flex justify-center rounded-2xl">
                        <img className='h-[14.7rem]' src={Picture}></img>
                    </div>
                    <div className="h-[20rem] flex flex-col gap-3">
                        <div className="text-xl">
                            STUDENT DB
                        </div>
                        <div className='flex flex-col gap-3'>
                            <ul>
                                <li>Developed a database application using Java and SQL to store student information.</li>
                                <li>Implemented user authentication and authorization using SQL.</li>
                            </ul>
                            <a href='https://github.com/Paulson-23/student_DB' target='_blank'>https://github.com/Paulson-23/student_DB</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project