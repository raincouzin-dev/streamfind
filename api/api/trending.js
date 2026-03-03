export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const key = process.env.TMDB_KEY;
  if (!key) return res.status(500).json({ error: 'API key not configured' });

  const { type = 'movie' } = req.query;
  const url = `https://api.themoviedb.org/3/trending/${type}/week?api_key=${key}`;

  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
}
