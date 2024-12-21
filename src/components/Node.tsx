import { useContext } from "react";
import { INode, Types } from "../context/types";
import { NoteContext } from "../context/context";
import { deleteNode } from "../context/api";

interface NodeProps {
    node:INode;
    deleteNode: (id: number) => void;
}
export const Node: FC<NodeProps> = ({ node }) => {
    const context = useContext(NoteContext)
    if (!context) throw new Error("Out of Provider!")
        const {dispatch} = context
    const handelDelet = async (id:string) =>{
        await deleteNode(id)
        dispatch({type:Types.DELETE_TASK, payload:id})
    }
    return (
      <tr className="hover:bg-gray-50">
        <td className="border border-gray-300 px-4 py-2">{node.title}</td>
        <td className="border border-gray-300 px-4 py-2">{node.content}</td>
        <td className="border border-gray-300 px-4 py-2">
          <button
            onClick={()=> handelDelet(node.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };