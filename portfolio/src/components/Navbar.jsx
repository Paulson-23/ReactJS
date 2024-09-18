import { Link, NavLink } from "react-router-dom";
const Navbar = () =>{
    return (
        <div className="flex-1 h-[8vh] flex flex-row items-end justify-between text-white">
            <div className="flex justify-start font-mono text-3xl p-4 px-8 rounded-lg flex-1">
                Paulson M S
            </div>
            <div className="flex justify-end gap-[4rem]">
                <NavLink to="/">
                    <button className="flex justify-start font-mono text-xl active:text-blue-800 transition-all p-4 flex-1 rounded-lg">
                            Home
                    </button>
                </NavLink>
                <NavLink to="/projects">
                    <button className="flex justify-start font-mono text-xl active:text-blue-800 transition-all p-4 flex-1 rounded-lg">
                            Projects
                    </button>
                </NavLink>
                <NavLink to="/contacts">
                    <button className="flex justify-start font-mono text-xl active:text-blue-800 transition-all p-4 flex-1 rounded-lg">
                        Contacts
                    </button>
                </NavLink>
                <div className="flex justify-start font-mono text-2xl border-2 p-4 ml-3 px-8 rounded-lg flex-1">
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;