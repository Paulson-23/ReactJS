import { useEffect, useState } from "react"
import { getProjects } from "../services/api"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
  const [projectdata, setProjectdata] = useState(null)
  const fetchprojects = async () => {
    try {
      const { data } = await getProjects()
      setProjectdata(data)
    } catch (error) {
      console.warn(error);
    console.log(projectdata)
    }
  }


  useEffect(() => {
    fetchprojects()
  })
if (!projectdata) {
    return(
      <div className="flex h-full justify-center">
      <div className="w-[10%] items-center flex">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#F5F7FF" stroke="#F5F7FF" stroke-width="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#F5F7FF" stroke="#F5F7FF" stroke-width="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#F5F7FF" stroke="#F5F7FF" stroke-width="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
      </div>
      </div>
    )
  }
  return (
    <>
      <div className="w-full h-full min-h-screen flex flex-row flex-wrap gap-8 justify-center items-center text-white">
        {/* <div className="w-full h-[10%] flex justify-end items-center px-10">
          <AddComponent fetchprojects={fetchprojects} />
        </div> */}

        {
          projectdata.map((data, index) => (
            <ProjectCard title={data.Title} desc={data.Desc} key={index} cover={data.Cover} id={data.id} link={data.Link} fetchprojects={fetchprojects} />
          ))
        }
      </div >

      {/* <Toaster richColors /> */}
    </>
  )
}

export default Projects