import React, { useState } from 'react'

const Example1 = () => {
    const [value, setValue] = useState(0)
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h1>Counter App</h1>
            <h2 className='mt-2 mb-2'>Value {value}</h2>
            <button disabled={value > 49} onClick={() => setValue(value + 1)} type="button" class="btn btn-primary mt-2">Increment + 1</button>
            <button disabled={value < 1} onClick={() => setValue(value - 1)} type="button" class="btn btn-primary mt-2">Decrement - 1</button>
        </div>
    )
}

export default Example1