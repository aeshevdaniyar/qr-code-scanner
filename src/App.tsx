import { useState } from "react";
import { useZxing } from "react-zxing";
import "./App.css";

function App() {
    const [result, setResult] = useState("");
    const { ref } = useZxing({
        onDecodeResult(result) {
            setResult(result.getText());
        },
    });

    return (
        <>
            <video ref={ref} height={400}/>
            <p>
                <span>Last result:</span>
                <span>{result}</span>
            </p>
        </>
    );
}

export default App;
