import { Router } from 'express'
import { pool } from './db.js'
const r = Router()

//health
r.get('/db/health', async (_, res) => {
    try {
        const [rows] = await pool.query('SELECT 1 AS db_ok')
        res.json({ ok: true, db: rows[0].db_ok })
    } catch {
        res.status(500).json({ ok: false, db: 'down' })
    }
})

//exemplo get
r.get('/users', async (_, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT id, name, email, created_at FROM users ORDER BY id DESC'
        )
        res.json(rows)
    } catch {
        res.status(500).json({ error: 'Erro ao listar usuários' })
    }
})

//exemplo post
r.post('/users', async (req, res) => {
    const { name, email } = req.body
    // Validação básica
    if (!name || !email) {
        return res.status(400).json({ error: 'name e email obrigatórios' })
    }
    try {
        // Insere no banco
        const [ins] = await pool.query(
            'INSERT INTO users (name, email) VALUES (?, ?)',
            [name, email]
        )
        // Busca o usuário recém-criado
        const [rows] = await pool.query(
            'SELECT id, name, email, created_at FROM users WHERE id = ?',
            [ins.insertId]
        )
        res.status(201).json(rows[0])
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'email já cadastrado' })
        }
        res.status(500).json({ error: 'Erro ao criar usuário' })
    }
})

export default r
