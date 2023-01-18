import express from 'express'

import postgresClient from '../config/db.js'

const router = express.Router()



//Get users by name GUNCELLEMEYE CALISTIGIM
router.get('/get/:name?', async (req, res) => {
    try {
        const name = req.params.name;
        let text = "SELECT * FROM usertable"

        if(name){
            text += ` WHERE username = '${name}'`
        }
        const { rows } = await postgresClient.query(text)

        return res.status(200).json(rows)
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })
    }
})


// Create user +
router.post('/adduser', async (req, res) => { // '/' ı degistirebilirsin.
    try { // "await postgresClient.query(text, values)" fonksiyonu, "postgresClient"
        // nesnesi kullanarak PostgreSQL veritabanına bir SQL sorgusu çalıştırmak için kullanılır
        const text = "INSERT INTO usertable (fullname,username, password, role) VALUES ($1, $2, crypt($3, gen_salt('bf')),$4) RETURNING *"
        const values = [req.body.fullname, req.body.username, req.body.password, req.body.role];

        const { rows } = await postgresClient.query(text, values) // rows kaydedilen değerlerin hepsini geri döndürür.

        return res.status(201).json({ createdUser: rows[0] })
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })
    }
})






// Authenticate user
router.post('/login', async (req, res) => {
    try {
        const text = "SELECT * FROM usertable WHERE username = $1 AND password = crypt($2, password)"

        const values = [req.body.username, req.body.password]

        const { rows } = await postgresClient.query(text, values)
        if (!rows.length)
            return res.status(404).json({ message: 'User not found.' })

        return res.status(200).json({ message: 'Authentication successful.' })
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })
    }
})

// Update user + 
// username de degisebilir.
router.put('/update/:username', async (req, res) => { // eger bir degeri gondermezsek?, password olayi?
    try {
        const { username } = req.params

        const text = "UPDATE usertable SET username = $1, role = $2 WHERE username = $3 RETURNING *"

        const values = [req.body.username, req.body.role, username]

        const { rows } = await postgresClient.query(text, values)
        if (!rows.length)
            return res.status(404).json({ message: 'User not found.' })

        return res.status(200).json({ updatedUser: rows[0] })
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })
    }
})



// Delete user +
router.delete('/delete/:username', async (req, res) => {
    try {
        const { username } = req.params

        const text = "DELETE FROM usertable WHERE username = $1 RETURNING *"

        const values = [username]

        const { rows } = await postgresClient.query(text, values)
        if (!rows.length)
            return res.status(404).json({ message: 'User not found.' })

        return res.status(200).json({ deletedUser: rows[0] })
    } catch (error) {
        console.log('Error occured', error.message)
        return res.status(400).json({ message: error.message })
    }
})



export default router


