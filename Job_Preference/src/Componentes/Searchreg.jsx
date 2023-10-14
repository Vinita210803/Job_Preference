import React from 'react'

const Searchreg = (props) => {
// const searchimg = props.search
    const img = `https://source.unsplash.com/600x400?`
    return(
        <>
            <div>
                <img id="searchImg" src={img+`${props.search}`} alt="search an Image"></img>
            </div>
        </>
    )
}

export default Searchreg