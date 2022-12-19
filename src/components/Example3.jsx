import React, { useState } from 'react'

const Example3 = () => {
    const text = "Lorem, ipsum dolor sit amet consectetur adipisici Lorem, ipsum dolor sit amet consectetur adipisici Lorem,  ipsum dolor sit amet consectetur adipisici Lorem,  ipsum dolor sit amet consectetur adipisici Lorem,  ipsum dolor sit amet consectetur adipisici Lorem,  ipsum dolor sit amet consectetur adipisici Lorem,  ipsum dolor sit amet consectetur adipisici Lorem,  ipsum dolor sit amet consectetur adipisici Lorem,  ipsum dolor sit amet consectetur adipisici Lorem,  ipsum dolor sit amet consectetur adipisici Lorem,  ipsum dolor sit amet consectetur adipisiLorem, ipsum dolor sit amet consectetur adipisiLorem, ipsum dolor sit amet consectetur adipising elit. Voluptatem ipsam illo rem enim ipsa neque sunt cupiditate.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsam illo rem enim ipsa neque sunt cupiditate "
    const [hideText, setHideText] = useState(true)

    const NumberOfLetters = 200

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: "3em",
            }
            }>
            <h1>Text Hide</h1>
            <p style={{ marginTop: "2em", width: '50%' }}>
                {hideText ? text.slice(0, NumberOfLetters) : text}
            </p>
            <button onClick={() => setHideText(!hideText)} type="button" class="btn btn-primary">{hideText ? "Show Full Text" : "Hide Text"}</button>
        </div >
    )
}

export default Example3