import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "react-modal";
import { InputNode, Types } from "../context/types";
import { addTask } from "../context/api";
import { NoteContext } from "../context/context";


Modal.setAppElement("#root");

interface IProps {
  onClose: () => void;
}



export const AddNode: React.FC<IProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputNode>();
  const context = useContext(NoteContext);
  if (!context) throw new Error("Out of Provider");
  const { dispatch } = context;

  const handleAdd: SubmitHandler<InputNode> = async (data) => {
    try {
      const response = await addTask(data);
      dispatch({ type: Types.ADD_TASK, payload: response });
      reset();
      onClose();
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white w-full max-w-md sm:w-[700px] h-auto max-h-screen rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Add Node</h2>
        <form  onSubmit={handleSubmit(handleAdd)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Text</label>
            <textarea
              {...register("content", { required: "Content is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
            {errors.content && (
              <span className="text-red-500 text-sm">{errors.content.message}</span>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};