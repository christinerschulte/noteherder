import React, {Component} from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends Component{
    constructor(){
        super()
        this.state = {
            currentNote: this.blankNote(),
            notes: [
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
              ],
        }
    }

    blankNote = () => {
        return {
            id: null,
            title: '',
            body: ''
        }
    }

    setCurrentNote = (note) =>{
        this.setState({ currentNote: note })
    }

    resetCurrentNote = () =>{
        this.setCurrentNote(this.blankNote())
    }
    
    render(){
    return(
        <div 
            className = "Main"
            style={style}
        >
            <Sidebar resetCurrentNote={this.resetCurrentNote} />
            <NoteList 
                notes={this.state.notes} 
                setCurrentNote={this.setCurrentNote}
            />
            <NoteForm 
                currentNote={this.state.currentNote}
                setCurrentNote={this.setCurrentNote}
            />
        </div>
    )
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
}
export default Main