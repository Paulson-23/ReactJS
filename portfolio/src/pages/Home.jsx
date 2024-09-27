import Profile from "../assets/img/passport-size-photo.jpg"
const Home = () =>{
    return(
      <div className="h-full flex flex-col justify-between items-center ">
        <div className="w-full h-full h-min-screen w-min-screen flex justify-center items-center">
          <div className="flex gap-20 flex-row-reverse rounded-lg p-24 flex-wrap justify-center items-center text-white">
            <div className="h-[40vh] w-[20vw] flex flex-col justify-center min-w-[20rem]">
              <img className="rounded-[50%]" src={Profile}/>
            </div>
            <div className="flex flex-col lg:max-w-[60%] gap-8 flex-1">
              <div className="text-6xl">
                Hi, I am Paulson M S
              </div>
              <div className="text-2xl font-medium">
                A committed software developer proficient in Java and SQL, supplemented by some exposure to Python,
                HTML and CSS languages.Experienced in designing and implementing scalable solutions for projects.
                Strong problem-solving abilities coupled with effective communication skills.
                Committed to continuous learning and staying updated with emerging technologies.
              </div>
              <div className="h-20 items-center flex justify-around">
                <button className="flex"><i className="fa-brands fa-java text-6xl hover:text-7xl text-red-700 transition-all"></i></button>
                <button className="flex"><i className="fa-brands fa-react text-6xl hover:text-7xl text-blue-400 transition-all"></i></button>
                <button className="flex"><i className="fa-brands fa-github text-6xl hover:text-7xl transition-all"></i></button>
                <button className="flex"><i className="fa-brands fa-js text-6xl hover:text-7xl text-yellow-300 transition-all"></i></button>
                <button className="flex"><i className="fa-solid fa-database text-6xl hover:text-7xl text-orange-500 transition-all"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Home