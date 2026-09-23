export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Next.js Platform Verification</h1>
      <p>Status: Online</p>
      <p>Node Version: {process.version}</p>
      <ul>
        <li><a href="/api/health">/api/health</a></li>
      </ul>
    </main>
  );
}
