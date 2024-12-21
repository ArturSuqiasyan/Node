import axios from "axios";
import { INode, InputNode } from "./types";
axios
const Axios = axios.create({
    baseURL:"http://localhost:4000"
})
export const getAllNode = async (): Promise<INode[]> => {
    const response = await Axios.get("/Node");
    return response.data;
}
export const deleteNode = async (id:string):Promise<INode[]> => {
    const response = await Axios.delete("/Node/" +id)
    return response.data
}

export const addTask = async (body:InputNode):Promise<InputNode> =>{
    const response = await Axios.post("/tasks", body)
    return response.data
}