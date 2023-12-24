import React, { useState } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addTtems = () => {
    if (!newNote.trim()) {
      alert('Please give some data');
    } else if (editingIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editingIndex] = newNote;
      setNotes(updatedNotes);
      setNewNote('');
      setEditingIndex(null);
    } else {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const deleteItem = (index) => {
    const newArr = notes.filter((_, ind) => ind !== index);
    setNotes(newArr);
    setEditingIndex(null);
  };

  const startEditing = (index) => {
    setNewNote(notes[index]);
    setEditingIndex(index);
  };

  return (
    <>
    <div className='main'>
      <center>
        <div className="app-container">
          <h1>Todo List <i class="fa-regular fa-address-book"></i></h1>
          </div>
          <div>
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <button className="add-btn" onClick={addTtems}>
            {editingIndex !== null ? <i class="fa-solid fa-pen-to-square"></i>
             : <i class="fa-solid fa-plus"></i>}
          </button>
          </div>
        
        <ul className="note-list">
          {notes.map((item, index) => (
            <li key={index} className="note-item">
              {index === editingIndex ? (
                <>
                  <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                  />
                  <button className="save-btn" onClick={() => addTtems()}>
                  <i class="fa-solid fa-check"></i>
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => setEditingIndex(null)}
                  >
                   <i class="fa-solid fa-xmark"></i>
                  </button>
                </>
              ) : (
                <>
                  {item}{' '}
                  <button className="delete-btn" onClick={() => deleteItem(index)}>
                  <i class="fa-solid fa-trash"></i>
                  </button>{' '}
                  <button className="edit-btn" onClick={() => startEditing(index)}>
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </center>
      </div>
    </>
  );
}

export default App;
