import Navbar from "../components/Navbar"
import Profile from "../assets/img/passport-size-photo.jpg"
const Home = () =>{
    return(
      <div className=" h-screen flex flex-col justify-between items-center ">
        {/* <Navbar></Navbar> */}
        <div className="w-full h-full flex flex-row justify-around items-center ">
          <div className="flex flex-col justify-center text-white gap-10">
            <div className="text-5xl">
              Paulson M S
            </div>
            <div className="">
              Committed software developer proficient in Java and SQL, supplemented by some exposure to Python,<br></br>
              HTML and CSS languages.Experienced in designing and implementing scalable solutions for projects. <br></br>
              Strong problem-solving abilities coupled with effective communication skills. <br></br>
              Committed to continuous learning and staying updated with emerging technologies.
            </div>
          </div>
          <div className="h-[40vh] w-[20vw] flex flex-col justify-center">
             <img className="rounded-[50%]" src={Profile}/>
           </div>
        </div>
      </div>
    )
}
export default Home