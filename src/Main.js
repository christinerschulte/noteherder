import React, {Component} from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends Component{
    constructor(){
        super()
        this.state = {
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
    
    render(){
    return(
        <div 
            className = "Main"
            style={style}
        >
            <Sidebar />
            <NoteList notes={this.state.notes} />
            <NoteForm />
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