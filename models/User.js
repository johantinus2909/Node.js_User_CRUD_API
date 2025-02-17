const db = require('../config/database');

class User {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(user) {
    const { id, name, email, age } = user;
    await db.query('INSERT INTO users (id, name, email, age) VALUES (?, ?, ?, ?)', [id, name, email, age]);
    return user;
  }

  static async update(id, user) {
    await db.query('UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?', [user.name, user.email, user.age, id]);
    return { id, ...user };
  }

  static async delete(id) {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
    return { message: 'User deleted' };
  }
}

module.exports = User;
