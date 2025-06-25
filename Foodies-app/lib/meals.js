import sql from 'better-sqlite3';

const db=sql('meals.db');

export async function getMeals() {//getMeals() fetches the data on the server, and the page is rendered with that data already in place, no need for useState.
  await new Promise((resolve)=> setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?'). get(slug);
}