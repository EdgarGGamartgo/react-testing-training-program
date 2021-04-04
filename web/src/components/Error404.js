import React from 'react'

const styles = {
    background: '#232323',
    minHeight: '90vh',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    position: 'relative'
}

const styleH = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    margin: '0',
    marginRight: '-50%'
}

const styleB = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-60%)',
    margin: '0',
    marginRight: '-50%',
    color: '#F65261',
    border: '2px solid #F65261',
    backgroundColor: '#232323'
}

export const Error404 = () => {
    return (
        <div style={styles}>
            <h1 style={styleH}>PAGE NOT FOUND 404</h1>
            <button style={styleB}>GO BACK TO HOME</button>
        </div>
    ) 
}