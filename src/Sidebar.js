import React from 'react'

import './Sidebar.css'
import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = ()=>{
    return(
        <nav 
            className="Sidebar"
            style = {styles.sidebar}    
        >
          <div 
            className="logo"
            style = {styles.logo}    
        >
            <img 
                src={quill} alt="Noteherder"
                style={styles.logoImg}    
            />
          </div>
          <a 
            className="new-note" 
            href="/notes"
            style={styles.newNote}
    
        >
            <img 
                src={newHover} 
                alt="New note"
                style = {styles.newNoteImg}
                
            />
            <img 
                className="outline" 
                src={newIcon} alt="New note" 
                style = {styles.newNoteImg}     
            />
          </a>
          <div 
            className="SignOut"
            style = {styles.signOut}  
          >
            <button
                style = {styles.btn}
            >
              <i 
                className="fa fa-sign-out"
                style = {styles.btnIcon}
              ></i>
            </button>
          </div>
        </nav>
    )
}

const styles = {
    sidebar: {
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        fontFamily: '"Fauna One"',
        color: '#666',
        fontSize: '5rem',
    },
    logoImg: {
        width: '3rem',
        paddingLeft: '0.4rem',
    },
    newNote: {
        marginTop: '2rem',
        position: 'relative',
        width: '4rem',
    },
    signOut: {
        position: 'absolute',
        bottom: '1rem',
    },
    btn: {
        backgroundColor: 'transparent',
        border: '0',
        color: '#008BF8',
        cursor: 'pointer',
        outline: 'none',
    },
    btnIcon: {
        fontSize: '2rem'
    },
    newNoteImg: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity 0.25s ease-in-out',
    }, 
    imgHover:{
        opacity: '0',
    },  
}

export default Sidebar