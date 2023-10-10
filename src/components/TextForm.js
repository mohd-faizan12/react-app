import React, { useState } from 'react'
import '../App.css';
export default function TextForm(props) {
    const handleUpCick = () => {

        const finalText = text.toUpperCase();
        updateText(finalText);
        props.showAlert("Text converted to UPPERCASE", "warning");
    }
    const handleLowerClick = () => {

        const lowertext = text.toLocaleLowerCase();
        updateText(lowertext);
        props.showAlert("Text converted to lowercase", "warning");
    }
    const handeOnChange = (event) => {

        updateText(event.target.value);

    }
    const [text, updateText] = useState('');

    return (
        <>
            <div className='position-relative mt-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                <div className="mb-3">
                    <h3>{props.heading}</h3>
                    <textarea className="form-control text-area" id="exampleFormControlTextarea1" rows="7" value={text} onChange={handeOnChange}></textarea>
                </div>
                <button className={`btn bg-${props.mode==='light'?'dark':'white'} text-${props.mode} px-3`} onClick={handleUpCick} >Convert to UPPER CASE</button>
                <button className={`btn bg-${props.mode==='light'?'dark':'white'} text-${props.mode} px-3 mx-3`}   onClick={handleLowerClick}>convert to lower case</button>
            </div>
            <div className='mt-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your text Summary:</h3>
                <p>{text.split(" ").filter(element => element).length} Words & {text.length} Characters</p>
                <p>{text.split(" ").length * 0.008} minutes read</p>
                <h4>Preview of the provided text:</h4>
                <p className='text bg-dark p-3'>{text.length > 0 ? text : "Enter the text in text area to preview your text"}</p>
            </div>
        </>
    )
}
