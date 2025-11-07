import React, { useState } from 'react';
import axios from 'axios';

function VerifyCredential() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handleVerify = async () => {
        try {
            const credential = JSON.parse(input);
            const res = await axios.post('http://localhost:5000/api/verify', { credential });
            setResult(res.data.valid ? 'Valid' : 'Invalid');
        } catch {
            setResult('Invalid JSON');
        }
    };

    return (
        <div>
            <h2>Verify Credential</h2>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste credential JSON" />
            <button onClick={handleVerify}>Verify</button>
            {result && <p>Result: {result}</p>}
        </div>
    );
}

export default VerifyCredential;
