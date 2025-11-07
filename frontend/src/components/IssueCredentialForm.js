import React, { useState } from 'react';
import axios from 'axios';

function IssueCredentialForm({ onIssued }) {
    const [claims, setClaims] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/issue', { claims });
        setClaims('');
        onIssued();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={claims} onChange={(e) => setClaims(e.target.value)} placeholder="Enter claims" />
            <button type="submit">Issue Credential</button>
        </form>
    );
}

export default IssueCredentialForm;
