export default function handler(req, res) {
  res.status(200).json({ ok: true, service: 'VYBORA API', version: '1.0.0' });
}
