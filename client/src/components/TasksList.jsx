import { useState } from 'react';
import { FiEdit, FiTrash2, FiCheckCircle } from 'react-icons/fi';

export default function TaskList({ tasks, onDelete, onEdit, onUpdate, onToggleDone }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editText, setEditText] = useState('');

  const startEdit = (task) => {
    setEditingTaskId(task._id);
    setEditText(task.title);
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="flex items-center justify-between p-2 border-b border-gray-300"
        >
          {editingTaskId === task._id ? (
            <div className="flex items-center gap-2 w-full">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 px-2 py-1 border rounded"
              />
              <button
                onClick={() => {
                  onUpdate(editingTaskId, editText);
                  setEditingTaskId(null);
                }}
                className="text-green-600 text-sm font-bold"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full">
              <span
                className={`font-medium ${task.isComplete ? 'line-through text-gray-400' : ''}`}
              >
                {task.title}
              </span>
              <div className="flex gap-2 text-gray-500">
                <FiCheckCircle
  onClick={() => onToggleDone(task._id)}
  className={`cursor-pointer text-xl ${
    task.isComplete ? 'text-green-600' : 'text-gray-400'
  }`}
/>
                <FiEdit onClick={() => startEdit(task)} className="cursor-pointer" />
                <FiTrash2 onClick={() => onDelete(task._id)} className="cursor-pointer text-red-500" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
