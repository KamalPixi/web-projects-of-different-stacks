import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <span className="badge">Vite + React SPA</span>
        <h1>Static Site Platform Verification</h1>
        <p>This single page application is built via <code>npm run build</code> producing hashed static bundles in <code>dist/</code>.</p>
        
        <div className="interactive-box">
          <p>Client React State Test:</p>
          <button onClick={() => setCount((c) => c + 1)}>
            Clicked {count} times
          </button>
        </div>

        <div className="info-box">
          <div><strong>Publish Directory:</strong> <code>dist</code></div>
          <div><strong>Build Command:</strong> <code>npm run build</code></div>
          <div><strong>Routing Mode:</strong> SPA Catch-all (<code>/* -&gt; /index.html</code>)</div>
        </div>
      </div>
    </div>
  );
}
