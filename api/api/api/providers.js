export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const key = process.env.TMDB_KEY;
  if (!key) return res.status(500).json({ error: 'API key not configured' });

  const { id, type = 'movie' } = req.query;
  if (!id) return res.status(400).json({ error: 'Missing id' });

  const url = `https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=${key}`;

  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
}
