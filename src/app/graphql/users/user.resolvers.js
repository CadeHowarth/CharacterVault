const db = require('../../../../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const JWT_SECRET = 'JWT_SECRET_KEY'

const resolvers = {
    Query: {
        users: async () => {
            const res = await db.query('SELECT * FROM users')
            return res.rows
        },
        user: async (parent, { id }) => {
            const res = await db.query('SELECT * FROM users WHERE id = $1', [id])
            return res.rows[0]
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const { username, email, password } = args

            const hashedPassword = await bcrypt.hash(password, 10)

            const res = await db.query(
                `INSERT INTO users (username, email, password_hash, created_at, is_active) 
                VALUES ($1, $2, $3, NOW(), TRUE)
                RETURNING *`, 
                [username, email, hashedPassword])
            const user = res.rows[0]

            const token = jwt.sign({ userId: user.id }, JWT_SECRET, {expiresIn: '24h' })

            return {
                token,
                user,
            }
        },
        deleteUser: async (parent, { id }) => {
            const res = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id])
            return res.rows[0]
        },
        loginUser: async (parent, { username, password }) => {
            const res = await db.query(`SELECT * FROM users WHERE username = $1`, [username])
            const user = res.rows[0]

            if (!user) {
                throw new Error('User not found')
            }

            const passwordMatch = await bcrypt.compare(password, user.password_hash)
            if (!passwordMatch) {
                throw new Error('Invalid password')
            }

            const token = jwt.sign({ userId: user.id }, JWT_SECRET, {expiresIn: '24h' })

            return {
                token,
                user,
            }
        }
    }
}

module.exports = resolvers