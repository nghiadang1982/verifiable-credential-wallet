# Verifiable Credential Wallet

## How to Run Locally

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd verifiable-credential-wallet
```

### 2. Run Backend
```bash
cd backend
npm install
npm start
```

### 3. Run Frontend
```bash
cd ../frontend
npm install
npm start
```

Access frontend at http://localhost:3000 and backend at http://localhost:5000

### 4. Run with Docker
```bash
docker-compose up --build
```

This will start both backend and frontend containers.
