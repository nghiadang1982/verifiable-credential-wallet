import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CredentialList from './components/CredentialList';
import IssueCredentialForm from './components/IssueCredentialForm';
import VerifyCredential from './components/VerifyCredential';

function App() {
    const [credentials, setCredentials] = useState([]);

    const fetchCredentials = async () => {
        const res = await axios.get('http://localhost:5000/api/list');
        setCredentials(res.data);
    };

    useEffect(() => { fetchCredentials(); }, []);

    return (
        <div>
            <h1>Verifiable Credential Wallet</h1>
            <IssueCredentialForm onIssued={fetchCredentials} />
            <CredentialList credentials={credentials} onDelete={fetchCredentials} />
            <VerifyCredential />
        </div>
    );
}

export default App;
