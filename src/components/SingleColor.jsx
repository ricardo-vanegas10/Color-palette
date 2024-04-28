import React, { useState } from 'react'
import clip from '/clip.png'
// import DisplayColors from './DisplayColors'

const SingleColor = ({hexColor}) => {

    const[copy, setcopy] = useState(false);

    const handlecopy = (color) =>() =>{
        const NewColor = `#${color}`;
        navigator.clipboard.writeText(NewColor);

        setcopy(true);
    }

  return (
    <div className='single-card' style={{backgroundColor: `#${hexColor}` }}>
        <div className="content">
            <p>#{hexColor}</p>
            <button onClick={handlecopy(hexColor)}>
                <img src={clip} alt="" />
            </button>
        </div>
        {/* {copy ? alert("Copied to clipboard") : null} */}
    </div>
  )
}

export default SingleColor