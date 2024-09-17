const Navbar = () =>{
    return (
        <div className="w-full h-[8vh] flex flex-row items-end justify-between text-white">
            <div className="flex justify-start font-mono text-3xl p-4 ml-3 px-8 rounded-lg">
                Paulson M S
            </div>
            <div className="flex justify-end gap-8">
                <button className="flex justify-start font-mono text-xl active:text-blue-800 transition-all p-4 ml-3 px-8 rounded-lg">
                    Home
                </button>
                <button className="flex justify-start font-mono text-xl active:text-blue-800 transition-all p-4 ml-3 px-8 rounded-lg">
                    Projects
                </button>
                <button className="flex justify-start font-mono text-xl active:text-blue-800 transition-all p-4 ml-3 px-8 rounded-lg">
                    Contact
                </button>
                <div className="flex justify-start font-mono text-2xl border-2 p-4 ml-3 px-8 rounded-lg">
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;