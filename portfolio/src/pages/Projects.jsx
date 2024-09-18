import Picture from '../assets/img/chopper.png'
const Project = () =>{
    return(
        <div className="w-screen h-screen text-white flex flex-col justify-center gap-10">
            <div className="text-4xl ml-10">
                Projects
            </div>
            <div className="flex justify-around gap-8">
                <div className="flex flex-col w-[25rem] border-2">
                    <div className="h-[15rem] border-2 flex justify-center">
                        <img className='h-[15rem]' src={Picture}></img>
                    </div>
                    <div className="h-[20rem] border-2">
                        <div className="">
                            STUDENT DB
                        </div>
                        <div className=''>
                            <ul>
                                <li>Developed a database application using Java and SQL to store student information.</li>
                                <li>Implemented user authentication and authorization using SQL.</li>
                            </ul>
                            <a href='https://github.com/Paulson-23/student_DB' target='_blank'>https//github.com/Paulson-23/student_DB</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[25rem] border-2">
                    <div className="h-[15rem] border-2 flex justify-center">
                        <img className='h-[15rem]' src={Picture}></img>
                    </div>
                    <div className="h-[20rem] border-2">
                        <div className="">
                            STUDENT DB
                        </div>
                        <div className=''>
                            <ul>
                                <li>Developed a database application using Java and SQL to store student information.</li>
                                <li>Implemented user authentication and authorization using SQL.</li>
                            </ul>
                            <a href='https://github.com/Paulson-23/student_DB' target='_blank'>https//github.com/Paulson-23/student_DB</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[25rem] border-2">
                    <div className="h-[15rem] border-2 flex justify-center">
                        <img className='h-[15rem]' src={Picture}></img>
                    </div>
                    <div className="h-[20rem] border-2">
                        <div className="">
                            STUDENT DB
                        </div>
                        <div className=''>
                            <ul>
                                <li>Developed a database application using Java and SQL to store student information.</li>
                                <li>Implemented user authentication and authorization using SQL.</li>
                            </ul>
                            <a href='https://github.com/Paulson-23/student_DB' target='_blank'>https//github.com/Paulson-23/student_DB</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[25rem] border-2">
                    <div className="h-[15rem] border-2 flex justify-center">
                        <img className='h-[15rem]' src={Picture}></img>
                    </div>
                    <div className="h-[20rem] border-2">
                        <div className="">
                            STUDENT DB
                        </div>
                        <div className=''>
                            <ul>
                                <li>Developed a database application using Java and SQL to store student information.</li>
                                <li>Implemented user authentication and authorization using SQL.</li>
                            </ul>
                            <a href='https://github.com/Paulson-23/student_DB' target='_blank'>https//github.com/Paulson-23/student_DB</a>
                        </div>
                    </div>
                </div>
                {/* <div>Project-2</div>
                <div>Project-3</div> */}
            </div>
        </div>
    )
}

export default Project