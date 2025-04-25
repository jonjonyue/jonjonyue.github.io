'use client';

import { useState, useEffect } from 'react';
import TodoItem, { Todo } from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (e) {
        console.error('Failed to parse saved todos', e);
      }
    }
    setIsInitialized(true);
  }, []);
  
  // Save todos to localStorage whenever they change
  useEffect(() => {
    // Only save to localStorage after initial load is complete
    // This prevents the initial empty array from overwriting saved todos
    if (isInitialized) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isInitialized]);
  
  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newItem: Todo = {
        id: Date.now().toString(),
        text: newTodo,
        completed: false
      };
      
      setTodos([...todos, newItem]);
      setNewTodo('');
    }
  };
  
  // Toggle todo completion status
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  // Edit a todo
  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo();
  };
  
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-card-bg rounded-lg shadow-md border border-border">
      <h2 className="text-2xl font-bold text-foreground mb-4">Todo List</h2>
      
      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 bg-highlight text-foreground rounded border border-border"
        />
        <button
          type="submit"
          className="bg-accent text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
        >
          Add
        </button>
      </form>
      
      {todos.length === 0 ? (
        <p className="text-secondary-text text-center py-4">
          No tasks yet. Add some tasks to get started!
        </p>
      ) : (
        <ul className="divide-y divide-border">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))}
        </ul>
      )}
      
      {todos.length > 0 && (
        <div className="mt-4 text-sm text-secondary-text">
          <p>
            {todos.filter(t => t.completed).length} of {todos.length} tasks completed
          </p>
        </div>
      )}
    </div>
  );
} 