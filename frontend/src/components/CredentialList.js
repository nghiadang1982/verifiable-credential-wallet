import React from 'react';
import axios from 'axios';

function CredentialList({ credentials, onDelete }) {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/credential/${id}`);
        onDelete();
    };

    const handleCopy = (credential) => {
        const credentialBlob = JSON.stringify(credential, null, 2);
        navigator.clipboard.writeText(credentialBlob).then(() => {
            alert('Credential JSON copied to clipboard!');
        });
    };

    return (
        <div>
            <h2>Your Credentials Wallet</h2>
            <ul>
                {credentials.map(c => (
                    <li key={c.id}>
                        {JSON.stringify(c)}
                        <button onClick={() => handleDelete(c.id)}>Delete</button>
                        <button onClick={() => handleCopy(c)}>Copy to Share</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CredentialList;
