import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = () =>{
    const notes = [
      {
        id: 1,
        title: 'JS thoughts',
        body: 'I just <3 JS so much',
      },
      {
        id: 2,
        title: 'Breakfast',
        body: 'Never wake up for it',
      },
      {
        id: 3,
        title: 'Class Notes',
        body: 'REact is swell',
      },
    ]

    return (
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            <a className="active">
            { notes.map(note=> <Note key = {note.id} note={note}/>) }
            </a>
          </ul>
        </div>
      
    )
}

export default NoteList