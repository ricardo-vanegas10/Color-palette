import React, { useState } from 'react'
import Values from 'values.js';

const FormColor = ({ setlist }) => {

    const [color, setcolor] = useState("black");

    const [error, seterror] = useState(false);

    const HandleGenerator = (e) => {
        e.preventDefault();

        try {
            let colors = new Values(color).all(4);
            setlist(colors);
            seterror(false);
        } catch (error) {
            console.log(error);
            seterror(true);
        }

        console.log(color);
    }

    return (
        <div className='palette-color'>
        <h1>Color Palette Generator</h1>
        <form onSubmit={HandleGenerator}>
            <input type="text" placeholder='#fff' onChange={e => setcolor(e.target.value)} />
            <input type="submit" value="Generate" />
        </form>
            {error ? <p className="error">This color does not exist</p> : null}
        </div>
    )
}

export default FormColor