const catalog = [
  { id: 'inception', title: 'Inception', type: 'movie', year: 2010 },
  { id: 'interstellar', title: 'Interstellar', type: 'movie', year: 2014 },
  { id: 'dune', title: 'Dune', type: 'movie', year: 2021 },
  { id: 'stranger', title: 'Stranger Things', type: 'series', year: 2016 },
  { id: 'arcane', title: 'Arcane', type: 'series', year: 2021 },
  { id: 'andor', title: 'Andor', type: 'series', year: 2022 }
];

export default function handler(req, res) {
  const query = String(req.query?.q || '').trim().toLowerCase();
  const results = query ? catalog.filter(item => item.title.toLowerCase().includes(query)) : catalog;
  res.status(200).json({ results });
}
