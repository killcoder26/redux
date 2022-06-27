import React from 'react'
import { useSelector } from 'react-redux'

function Mycomp() {
    const state = useSelector((state) => state);
    return (
        <div><h1>
            Name:{state.name}<br />
            Money:{state.Money}
        </h1> </div>
    )
}

export default Mycomp