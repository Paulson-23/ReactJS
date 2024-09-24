// import Picture from '../assets/img/chopper.png'
// const Project = () =>{
//     return(
//         <div className="min-w-full min-h-screen justify-center flex-col text-white">
//             {/* <div className="text-4xl ml-10">
//                 Projects
//             </div> */}
//             <br></br>
//             <br></br>
//             <div className='flex justify-center gap-16 flex-wrap'>
//             <div className="card"></div>
//             <div className="card"></div>
//             <div className="card"></div>
//             <div className="card"></div>
//             <div className="card"></div>
//             <div className="card"></div>
//             <div className="card"></div>
//             <div className="card"></div>
//             <div className="card"></div>
//             <div className="card"></div>
//             </div>    
//             {/*<div className="flex justify-around flex-wrap">
//             <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-[#e6dede] flex flex-col items-start gap-3 transition-all duration-300 hover:bg-[#f8f8f800] hover:border-cyan-300 hover:border-2">
//                 <svg
//                     strokeLinejoin="round"
//                     strokeLinecap="round"
//                     strokeWidth="2"
//                     stroke="#000000"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     className="text-5xl h-12 w-12 strokegray-800 group-hover:strokegray-400"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
//                     <line y2="21" x2="16" y1="21" x1="8"></line>
//                     <line y2="21" x2="12" y1="17" x1="12"></line>
//                 </svg>

//                 <p className="font-bold text-2xl group-hover:text-white text-black/80">
//                     WEBSITE SEO
//                 </p>
//                 <p className="text-gray-400 text-sm">
//                     Website ravida surna eveti semen the conse tusio anivite dianne one nivam
//                     acestion vue artin dictum.
//                 </p>
//                 <p
//                     // style="-webkit-text-stroke: 1px gray;
//                     //                           -webkit-text-fill-color: transparent;"
//                     className="text-5xl font-bold self-end"
//                 >
//                     09
//                 </p>
//             </div> */}

//                 {/* <div className="flex flex-col w-[25rem] border-2 p-3 gap-6 rounded-2xl">
//                     <div className="h-[15rem] border-2 flex justify-center rounded-2xl">
//                         <img className='h-[14.7rem]' src={Picture}></img>
//                     </div>
//                     <div className="h-[20rem] flex flex-col gap-3">
//                         <div className="text-xl">
//                             STUDENT DB
//                         </div>
//                         <div className='flex flex-col gap-3'>
//                             <ul>
//                                 <li>Developed a database application using Java and SQL to store student information.</li>
//                                 <li>Implemented user authentication and authorization using SQL.</li>
//                             </ul>
//                             <a href='https://github.com/Paulson-23/student_DB' target='_blank'>https://github.com/Paulson-23/student_DB</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-col w-[25rem] border-2 p-3 gap-6 rounded-2xl">
//                     <div className="h-[15rem] border-2 flex justify-center rounded-2xl">
//                         <img className='h-[14.7rem]' src={Picture}></img>
//                     </div>
//                     <div className="h-[20rem] flex flex-col gap-3">
//                         <div className="text-xl">
//                             Portfolio
//                         </div>
//                         <div className='flex flex-col gap-3'>
//                             <ul>
//                                 <li>Developed a react project to create my portfolio.</li>
//                                 <li>This consists of Home, Projects and Contacts pages.</li>
//                                 <li>Your are currently exploring this project ;)</li>
//                             </ul>
//                             <a href='https://github.com/Paulson-23/student_DB' target='_blank'>https://github.com/Paulson-23/student_DB</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-col w-[25rem] border-2 p-3 gap-6 rounded-2xl">
//                     <div className="h-[15rem] border-2 flex justify-center rounded-2xl">
//                         <img className='h-[14.7rem]' src={Picture}></img>
//                     </div>
//                     <div className="h-[20rem] flex flex-col gap-3">
//                         <div className="text-xl">
//                             STUDENT DB
//                         </div>
//                         <div className='flex flex-col gap-3'>
//                             <ul>
//                                 <li>Developed a database application using Java and SQL to store student information.</li>
//                                 <li>Implemented user authentication and authorization using SQL.</li>
//                             </ul>
//                             <a href='https://github.com/Paulson-23/student_DB' target='_blank'>https://github.com/Paulson-23/student_DB</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-col w-[25rem] border-2 p-3 gap-6 rounded-2xl">
//                     <div className="h-[15rem] border-2 flex justify-center rounded-2xl">
//                         <img className='h-[14.7rem]' src={Picture}></img>
//                     </div>
//                     <div className="h-[20rem] flex flex-col gap-3">
//                         <div className="text-xl">
//                             STUDENT DB
//                         </div>
//                         <div className='flex flex-col gap-3'>
//                             <ul>
//                                 <li>Developed a database application using Java and SQL to store student information.</li>
//                                 <li>Implemented user authentication and authorization using SQL.</li>
//                             </ul>
//                             <a href='https://github.com/Paulson-23/student_DB' target='_blank'>https://github.com/Paulson-23/student_DB</a>
//                         </div>
//                     </div>
//                 </div> */}
//             </div>
//         // </div>
//     )
// }

// export default Project
import { useEffect, useState } from "react"
import { getProjects } from "../services/api"
// import AddComponent from "../components/AddComponent"
// import { toast, Toaster } from "sonner"
import ProjectCard from "../components/ProjectCard"
// import { MessageCircleWarning } from "lucide-react"

const Projects = () => {
  const [projectdata, setProjectdata] = useState(null)
  const fetchprojects = async () => {
    // const {}
    try {
      const { data } = await getProjects()
      setProjectdata(data)
    } catch (error) {
      console.warn(error);
    //   toast('Error', {
    //     className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
    //     icon: <MessageCircleWarning />,
    //   });
    console.log(projectdata)
    }
  }


  useEffect(() => {
    fetchprojects()
  }, [])
//   if (!projectdata || projectdata.length === 0) {
//     return (
//       <div className="w-full h-[10%] flex justify-center items-center">
//         <AddComponent />
//       </div>
//     )
//   }
if (!projectdata) {
    return <div className="w-screen h-screen bg-grad-deep-space flex justify-center items-center text-6xl text-white">Loading pls wait</div>
  }
  return (
    <>
      <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center">
        {/* <div className="w-full h-[10%] flex justify-end items-center px-10">
          <AddComponent fetchprojects={fetchprojects} />
        </div> */}

        {
          projectdata.map((data, index) => (
            <ProjectCard title={data.Title} desc={data.name} key={index} pid={index} kid={index + 1} cover={data.cover} id={data.id} link={data.link} fetchprojects={fetchprojects} />
          ))
        }
      </div >

      {/* <Toaster richColors /> */}
    </>
  )
}

export default Projects