'use client';

import { useState } from 'react';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== '') {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center gap-2 py-2 border-b border-border">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 cursor-pointer accent-accent"
      />
      
      {isEditing ? (
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 bg-card-bg text-foreground px-2 py-1 rounded border border-border"
            autoFocus
          />
          <button 
            onClick={handleEdit}
            className="bg-accent text-white px-3 py-1 rounded text-sm"
          >
            Save
          </button>
          <button 
            onClick={() => setIsEditing(false)}
            className="bg-highlight text-foreground px-3 py-1 rounded text-sm"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span 
            className={`flex-1 ${todo.completed ? 'line-through text-secondary-text' : 'text-foreground'}`}
          >
            {todo.text}
          </span>
          <button 
            onClick={() => setIsEditing(true)}
            className="text-accent p-1 rounded hover:bg-highlight"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 0L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button 
            onClick={() => onDelete(todo.id)}
            className="text-red-500 p-1 rounded hover:bg-highlight"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </>
      )}
    </li>
  );
} 