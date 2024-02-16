import Sequelize from "sequelize";
// var Sequelize = require("sequelize")

import { sequelize } from "../database/database";

const short = require("short-uuid");

const JWT = sequelize.define("JWT", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue() {
        // Create new short uuid
        return short.generate()
      },
    primaryKey: true,
  },
  jwt: {
    type: Sequelize.TEXT,
  },

  expiration: {
    type: Sequelize.STRING,
  },
  from: {
    type: Sequelize.STRING,
  }
  
});

export default JWT;
