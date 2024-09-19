import { NavLink } from "react-router-dom";
import { User } from "lucide-react";
const Navbar = () =>{
    return (
        <div className="flex-1 h-[8vh] flex flex-row items-end justify-between text-white">
            <div className="flex justify-start font-mono text-3xl p-4 px-8 rounded-lg flex-1">
                Paulson M S
            </div>
            <div className="flex justify-end gap-5 pr-3">
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
                    <button className="flex justify-start font-mono text-xl active:text-blue-800 transition-all p-4 pr-2 flex-1 rounded-lg">
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