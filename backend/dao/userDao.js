const db = require('../config/db');

class UserDao {
    // Create new user
    async createUser(name, email, hashedPassword, age, gender, experienceLevel) {
        const sql = `
            INSERT INTO users (name, email, password, age, gender, experience_level)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        try {
            const result = await db.runAsync(sql, [name, email, hashedPassword, age, gender, experienceLevel]);
            return result.id;
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    // Find user by email
    async findUserByEmail(email) {
        const sql = 'SELECT * FROM users WHERE email = ?';
        try {
            const user = await db.getAsync(sql, [email]);
            return user;
        } catch (error) {
            throw new Error(`Error finding user by email: ${error.message}`);
        }
    }

    // Find user by ID
    async findUserById(userId) {
        const sql = 'SELECT user_id, name, email, age, gender, experience_level, created_at FROM users WHERE user_id = ?';
        try {
            const user = await db.getAsync(sql, [userId]);
            return user;
        } catch (error) {
            throw new Error(`Error finding user by ID: ${error.message}`);
        }
    }

    // Update user profile
    async updateUser(userId, name, age, gender, experienceLevel) {
        const sql = `
            UPDATE users 
            SET name = ?, age = ?, gender = ?, experience_level = ?
            WHERE user_id = ?
        `;
        try {
            await db.runAsync(sql, [name, age, gender, experienceLevel, userId]);
            return true;
        } catch (error) {
            throw new Error(`Error updating user: ${error.message}`);
        }
    }

    // Update user password
    async updatePassword(userId, hashedPassword) {
        const sql = `
            UPDATE users 
            SET password = ?
            WHERE user_id = ?
        `;
        try {
            await db.runAsync(sql, [hashedPassword, userId]);
            return true;
        } catch (error) {
            throw new Error(`Error updating password: ${error.message}`);
        }
    }

    // Delete user
    async deleteUser(userId) {
        const sql = 'DELETE FROM users WHERE user_id = ?';
        try {
            await db.runAsync(sql, [userId]);
            return true;
        } catch (error) {
            throw new Error(`Error deleting user: ${error.message}`);
        }
    }

    // Get all users (for admin purposes)
    async getAllUsers() {
        const sql = 'SELECT user_id, name, email, age, gender, experience_level, created_at FROM users';
        try {
            const users = await db.allAsync(sql);
            return users;
        } catch (error) {
            throw new Error(`Error getting all users: ${error.message}`);
        }
    }
}

module.exports = new UserDao();