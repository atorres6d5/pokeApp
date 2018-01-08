'use strict'
const path = require('path')
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/pokeApp'
  //   migrations: {
  //     directory: path.join(__dirname, 'db', 'migrations')
  //   },
  //   seeds: {
  //     directory: path.join(__dirname, 'db', 'seeds')
  //   }
  // }
  }
}
