import React from 'react'
import { useSelector } from 'react-redux'

function Mycomp() {
    const state = useSelector((state) => state);
    return (
        <div><h1>
            Money:{state}
        </h1> </div>
    )
}

export default Mycomp