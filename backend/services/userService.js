const bcrypt = require('bcryptjs');
const userDao = require('../dao/userDao');

class UserService {
    // Register new user
    async registerUser(name, email, password, age, gender, experienceLevel) {
        try {
            // Check if user already exists
            const existingUser = await userDao.findUserByEmail(email);
            if (existingUser) {
                throw new Error('User with this email already exists');
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create user
            const userId = await userDao.createUser(
                name,
                email,
                hashedPassword,
                age,
                gender,
                experienceLevel
            );

            return { userId, name, email };
        } catch (error) {
            throw new Error(`Registration failed: ${error.message}`);
        }
    }

    // Login user
    async loginUser(email, password) {
        try {
            // Find user
            const user = await userDao.findUserByEmail(email);
            if (!user) {
                throw new Error('Invalid credentials');
            }

            // Verify password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw new Error('Invalid credentials');
            }

            // Return user without password
            return {
                userId: user.user_id,
                name: user.name,
                email: user.email,
                age: user.age,
                gender: user.gender,
                experienceLevel: user.experience_level
            };
        } catch (error) {
            throw new Error(`Login failed: ${error.message}`);
        }
    }

    // Get user by ID
    async getUserById(userId) {
        try {
            const user = await userDao.findUserById(userId);
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            throw new Error(`Error getting user: ${error.message}`);
        }
    }

    // Update user profile
    async updateUserProfile(userId, name, age, gender, experienceLevel) {
        try {
            await userDao.updateUser(userId, name, age, gender, experienceLevel);
            return await this.getUserById(userId);
        } catch (error) {
            throw new Error(`Error updating profile: ${error.message}`);
        }
    }

    // Change password
    async changePassword(userId, oldPassword, newPassword) {
        try {
            const user = await userDao.findUserById(userId);
            if (!user) {
                throw new Error('User not found');
            }

            // Verify old password
            const isMatch = await bcrypt.compare(oldPassword, user.password);
            if (!isMatch) {
                throw new Error('Current password is incorrect');
            }

            // Hash new password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt);

            // Update password in database
            await userDao.updatePassword(userId, hashedPassword);
            return true;
        } catch (error) {
            throw new Error(`Error changing password: ${error.message}`);
        }
    }
}

module.exports = new UserService();