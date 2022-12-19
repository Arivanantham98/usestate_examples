import React, { useState } from "react";

const Example2 = () => {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [result, setResult] = useState(0)

    function add() {
        setResult(parseInt(input1) + parseInt(input2))
    }

    function sub() {
        setResult(input1 - input2)
    }

    function multiply() {
        setResult(input1 * input2)
    }
    function reset() {
        setInput1(0)
        setInput2(0)
        setResult(0)
    }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: "3em",
            }}
        >
            <h1>Calculator</h1>
            <div class="mb-3 mt-3">
                <label for="exampleFormControlInput1" class="form-label">
                    Input 1
                </label>
                <input
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    type="number"
                    class="form-control"
                    placeholder="Input 1"
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                    Input 2
                </label>
                <input
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    type="number"
                    class="form-control"
                    placeholder="Input 2"
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1em' }}>
                <button onClick={add} type="button" class="btn btn-primary">Add</button>
                <button onClick={sub} style={{ marginLeft: "1em" }} type="button" class="btn btn-primary">Sub</button>
                <button onClick={multiply} style={{ marginLeft: "1em" }} type="button" class="btn btn-primary">Multiply</button>
            </div>
            <h1 style={{ marginTop: '1em', marginBottom: '1em   ' }}>
                Result : {result}
            </h1>
            <button onClick={reset} type="button" class="btn btn-primary">Clear</button>
        </div>
    );
};

export default Example2;
