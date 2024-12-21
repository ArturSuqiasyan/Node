
import { useState } from "react"
import { AddNode } from "./Add-note"
import { NodeList } from "./note-list"

 export const Dashboard = () => {
    const [open, setOpen] = useState<boolean>(false)
    return <>
   
    <div>
    <NodeList />

    </div>
    <button onClick={()=>setOpen(true)} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">AddNode</button>
    {open && <AddNode onClose={()=>setOpen(false)} />}
    </>
}