import React from 'react'
import { useState } from 'react';
import './Home.css'

const Home = () => {
    const [translation, setTranslation] = useState('')
    const [grabMorse, setGrabMorse] = useState('')
    //use this to set our state
    //every time we click submit it updates our state which then updates the DOM 

    //useEffect(() => {
    // }, [])


    const decodeMorse = (morseCode) => {
        const alphabet = {
            '.-': 'a',
            '-...': 'b',
            '-.-.': 'c',
            '-..': 'd',
            '.': 'e',
            '..-.': 'f',
            '--.': 'g',
            '....': 'h',
            '..': 'i',
            '.---': 'j',
            '-.-': 'k',
            '.-..': 'l',
            '--': 'm',
            '-.': 'n',
            '---': 'o',
            '.--.': 'p',
            '--.-': 'q',
            '.-.': 'r',
            '...': 's',
            '-': 't',
            '..-': 'u',
            '...-': 'v',
            '.--': 'w',
            '-..-': 'x',
            '-.--': 'y',
            '--..': 'z',
        };

        let translate = morseCode.split('   ').map(a => a.split(' ').map(b => alphabet[b]).join('')).join(' ');
        return translate
    }

    //morseCode.split('   ') --> seperated words 
    //.map(a => a.split(' ')) --> seperate spaces between words
    //.map(b => alphabet[b])) --> translated to english w/ individual letters
    //.join('')) --> joins together the letters - still seperates words
    //.join(' ') --> joins together words

    //setTranslation(translate) --> sets our useState for 'translation' 




    const handleSubmit = async (event) => {
        //once submit button has been pressed, handleSubmit activates
        event.preventDefault()
        //prevents refresh of page once a form is submitted


        console.log(decodeMorse(grabMorse))
        setTranslation(decodeMorse(grabMorse))
        //calling the function

    }

    return (
        <>
            <div className='home-container'>
                <h1>Morse Code to English Translator</h1>
            </div>


            <div className='boxes'>

                <div class="box" id="morse">
                    <h4>Input Morse Code</h4>

                    <form onSubmit={handleSubmit}>
                        {/* once submitted -> handleSubmit is activated */}
                        <input onChange={(e) => { setGrabMorse(e.target.value) }} type="text" placeholder='--.--.--.. ......-..' />
                        {/* onChange gives the ability to retrieve user input from DOM */}
                        <button type="submit" id='btn'>Submit</button>
                        {/* calls our function */}
                    </form>
                </div>

                <div class="box" id="english">
                    <h4>English</h4>

                    <p>{translation}</p>
                    {/* passing the useState onto the DOM */}

                </div>

            </div>



        </>
    )



}

export default Home;