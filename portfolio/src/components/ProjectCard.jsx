import { Check, Github, Link, ArrowBigRight, MessageCircleWarning, Trash } from "lucide-react"
import React, { useState } from 'react'
import { deleteProject, editProject } from '../services/api'

const ProjectCard = ({ title, desc, cover, id, link, fetchprojects }) => {
    const [titleState, setTitleState] = useState(title);
    const [descState, setDescState] = useState(desc);
    const [linkState, setLinkState] = useState(link);
    const [coverState, setCoverState] = useState(cover);

    const handleEdit = async (e) => {
        e.preventDefault()
        const projectdata = {
            title: titleState,
            desc: descState,
            link: linkState,
            coverimg: coverState
        }
        try {
            const response = await editProject(id, projectdata)
            console.log(response.status)
            if (response.status === 200) {
                console.log("updated")
                toast('Project updated !', {
                    className: 'bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
                    icon: <Check />,
                });
                fetchprojects()
            }
        } catch (error) {
            toast('Error', {
                className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
                icon: <MessageCircleWarning />,
            });
        }
    }

    const handledelete = async (id) => {
        try {
            const response = await deleteProject(id)
            console.log(response.status)
            if (response.status === 200) {
                console.log("deleted")
                fetchprojects()
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
            <div className="card flex flex-col transition-all text-black hover:text-white hover:bg-black">
                <div className="w-[30rem] bg-black ">
                    <img src={cover} alt={title} className="rounded-t-2xl"/>
                </div>
                <div className="flex min-h-full flex-grow flex-col gap-3 p-6">
                    <div className="text-5xl font-bold">{title}</div>
                    <div className="text-xl">{desc}</div>
                    <a href={link} target="_blank" className="">{link}</a>
                </div>
                    <div className="flex justify-end">
                        <ArrowBigRight className="size-14"/>
                    </div>
            </div>
    )
}
export default ProjectCard