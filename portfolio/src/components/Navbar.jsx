import { NavLink } from "react-router-dom";
import { User } from "lucide-react";
const Navbar = () =>{
    return (
        <div className="z-[1000] w-full static flex flex-row items-end bg-black text-white flex-wrap lg:justify-between justify-center">
            <div className="flex font-mono text-3xl p-4 px-8 rounded-lg">
                Paulson M S
            </div>
            <div className="flex justify-end items-center gap-5 pr-3">
                <NavLink to="/">
                    <button className="flex justify-start font-mono active:text-blue-800 transition-all p-4 flex-1 rounded-lg">
                            Home
                    </button>
                </NavLink>
                <NavLink to="/projects">
                    <button className="flex justify-start font-mono active:text-blue-800 transition-all p-4 flex-1 rounded-lg">
                            Projects
                    </button>
                </NavLink>
                <NavLink to="/contacts">
                    <button className="flex justify-start font-mono active:text-blue-800 transition-all p-4 flex-1 rounded-lg">
                        Contacts
                    </button>
                </NavLink>
                <div className="flex justify-start font-mono p-4 rounded-lg">
                    <User />
                </div>
            </div>
        </div>
    )
}

export default Navbar;