const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config(); 


const server = express();

server.use(cors());
server.use(express.json());

const port = process.env.PORT || 4000;


async function connectBD() {
    const conex = await mysql.createConnection({
        host: process.env.HOST || "127.0.0.1",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "root",
        database: "books",
    });

    conex.connect();
    return conex;
}

connectBD();

server.listen(port, ()=> {
    console.log(`Servidor escuchando por http://localhost:${port}`)
});


// endpoints //



// mostrar todos los libros //

server.get('/allbooks', async(req, res)=> {
    const conex = await connectBD();
    const booksSQL = "select * from AllBooks";
    const [result] = await conex.query(booksSQL);

    res.json({
        info: { count: result.length },
        books: result,
    });
});

// buscar por id en la url //

server.get("/allbooks/:id", async (req, res)=> {
    const idBook = req.params.id; 
    const conex = await connectBD();

    if(isNaN(parseInt(idBook))){
        return res.json({ success: false, error: "El id debe ser un número"}); 
    }

    const idSQL = "select * from AllBooks where idBook = ?"; 
    const [result] = await conex.query(idSQL, [idBook]); 
    conex.end();

    if (result.length === 0) {
        return res.json({ success: true, message: "No hay ningún libro con ese id"}); 
    }

    res.json({ success: true, book: result[0] }); 
});

// añadir nuevo libro //

server.post("/allbooks", async(req, res)=> {
    const data = req.body;
    const {title, author, genre, year } = data;
    const conex = await connectBD();
    const sql = "insert into AllBooks (title, author, genre, year) values (?, ?, ?, ?)";
    const [result] = await conex.query(sql, [
        title,
        author, 
        genre,
        year,
    ]);
    res.json ({
        success: true,
        id: result.id,
    });
});

// modificar un libro //

server.put("/allbooks/:id", async (req, res) => {
    const conex = await connectBD();
    const id = req.params.id;
    const data = req.body;
    const { title, author, genre, year } = data;

    const updateSql = "update AllBooks set title = ?, author = ?, genre = ?, year = ? where IdBook = ?";
    
    const [result] = await conex.query(updateSql, [
        title, 
        author,
        genre,
        year,
        id,
    ]);

    res.json({ success: true, message: "Libro actualizado correctamente"
    });
});

// borrar un libro // 

server.delete("/allbooks", async (req, res) => {
    const conex = await connectBD();
    const idBook = req.query.id;

    const deleteSql = "delete from AllBooks where IdBook = ?";
    const [result] = await conex.query(deleteSql, [idBook]);

    if (result.affectedRows > 0) {
        res.json({ success: true, message: "Libro eliminado correctamente"
        });
    }else {
        res.json({ success: false, message: "No hay nada que eliminar",
        });
    }
});

// filtrar por género // 

server.get("/allbooks/genre/:genre", async (req, res) => {
    const conex = await connectBD();
    const genreFilter = req.params.genre;
    const filterSql = "select * from AllBooks where genre = ?";
    const [results] = await conex.query(filterSql, [genreFilter]);
    res.json({ success: true, books: results })
});



