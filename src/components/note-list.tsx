import { useContext } from "react";
import { NoteContext } from "../context/context";
import { Node } from "./Node";
import { Types } from "../context/types";

export const NodeList = () => {
  const context = useContext(NoteContext);
  const { state, dispatch } = context;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Node List</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Content</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.Node.map((node) => (
              <Node
                key={node.id}
                node={node}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};