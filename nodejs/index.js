const express = require('express');
const cors = require('cors');

const router = express.Router();
const server = express();

server.use(express.json());
server.use(cors());

router.get('/', (req, res) => res.send("</p><p>&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;</p><p> </p> <p>- Lista de nomes cadastrada no banco de dados.</p> <p>"));

server.use(router);
server.listen(8081);
