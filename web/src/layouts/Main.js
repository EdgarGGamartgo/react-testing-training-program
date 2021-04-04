import React, { useState, useCallback, useEffect } from 'react'
import NavBar from './../components/NavBar'
import CardGallery from './../components/CardGallery'
import { MovieCounterStyles } from './../styles'
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Main = ({ className }) => {

    const [attrs, setAttrs] = useState(null)
    const { idPath } = useParams()

    useEffect(() => {
        if (idPath) {
            (async () => {
                try {
                    const mo = await axios.get(`http://localhost:4000/movies/${idPath}`)
                    setAttrs(mo.data)
                } catch(e) {
                    console.log(e)
                }
            })()
            
        }
    }, [idPath])

    return (
        <div className={className}>
            <NavBar/>
            <MovieCounterStyles/>
            {
                attrs !== null
                ? <CardGallery movies={[attrs]}/>
                : <CardGallery movies={[]}/>
            }
        </div>
    )
}

Main.propTypes = {
    className: PropTypes.string.isRequired,
}

export  { Main }