import axios from "axios"

const API = "mongodb+srv://paulsonmsc:Cainemvhzc01@portfoliodb.93dr3.mongodb.net/?retryWrites=true&w=majority&appName=PortfolioDB"

const getProjects = () => axios.get(`${API}projects`)
const getProjectbyID = (id) => axios.get(`${API}/projects/${id}`)
const addProject = (projectdata) => axios.post(`${API}/projects`, projectdata)
const editProject = (id, projectdata) => axios.put(`${API}/projects/${id}`, projectdata)
const deleteProject = (id) => axios.delete(`${API}/projects/${id}`)
export { getProjects, getProjectbyID, addProject, editProject, deleteProject }
