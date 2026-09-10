import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div style={{ fontFamily: "sans-serif", padding: 20 }}>
    <h2>Yeh Remote App hai (standalone, port 3001)</h2>
    <Button />
  </div>
);