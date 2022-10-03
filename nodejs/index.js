const express = require('express');
const cors = require('cors');
const Sequelize = require("sequelize");
const { QueryTypes } = require('sequelize');

async function getNames() {
  const sequelize = new Sequelize({
    host: 'node-server-api-mysql',
    port: 3306,
    dialect: 'mysql',
    username: 'root',
    password: 'root',
    database: 'fullcicle',
  }
  );

  sequelize.sync();
  let listWithHtml = "";
  const names = await sequelize.query("SELECT * FROM `names_list`", { type: QueryTypes.SELECT });
  names.forEach(name => {
    listWithHtml += "<p> - " + name.names + ".</p>";
  });
  router.get('/', (req, res) => res.send("</p><p>&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;</p><p> </p> " + listWithHtml + " <p>"));
}




const router = express.Router();
const server = express();

server.use(express.json());
server.use(cors());

setTimeout(() => {
  getNames();
}, 300);
server.use(router);
server.listen(3000);
