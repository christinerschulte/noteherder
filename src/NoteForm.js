import React from 'react'

import './NoteForm.css'

const NoteForm = ({currentNote, saveNote, deleteNote}) =>{
  const handleChanges = (ev)=>{
    const note = {...currentNote}
    note[ev.target.name] = ev.target.value
    saveNote(note)
  }
  
    const handleDelete = (ev)=>{
      const note = {...currentNote}
      note[ev.target.name] = ev.target.value
      deleteNote(note)
    }
  

  

  return (
      <div className="NoteForm">
        <div className="form-actions">
          <button 
            type="button"
            onClick = {handleDelete} 
          >
            <i 
              className="far fa-trash-alt"
              title = "Trash" 
            ></i>
          </button>
        </div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              value = {currentNote.title}
              onChange={handleChanges}
            />
          </p>
          
          <textarea 
            name="body"
            value={currentNote.body} 
            onChange={handleChanges} 
          ></textarea>
        </form>
      </div>
  )
}

export default NoteForm