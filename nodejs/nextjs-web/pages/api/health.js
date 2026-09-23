export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    framework: 'nextjs',
    timestamp: new Date().toISOString()
  });
}
