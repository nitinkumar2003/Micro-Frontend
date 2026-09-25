import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
        <h2>Yeh Remote App 2 hai (standalone, port 3002)</h2>
        <Footer />
    </div>
)