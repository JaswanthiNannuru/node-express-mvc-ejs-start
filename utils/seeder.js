// set up a temporary (in memory) database
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')

// require each data file

const transactions = require('../data/transactions.json')
const accounts = require('../data/accounts.json')
const users = require('../data/users.json')
const orderLineItems = require('../data/orderLineItems.json')
const puppies = require('../data/puppies.json')

// inject the app to seed the data

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}

  // Customers don't depend on anything else...................

  db.transactions = new Datastore()
  db.transactions.loadDatabase()

  // insert the sample data into our data store
  db.transactions.insert(transactions)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.transactions = db.transactions.find(transactions)
  LOG.debug(`${app.locals.transactions.query.length} transactions seeded`)

  // Products don't depend on anything else .....................

  db.accounts = new Datastore()
  db.accounts.loadDatabase()

  // insert the sample data into our data store
  db.accounts.insert(accounts)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.accounts = db.accounts.find(accounts)
  LOG.debug(`${app.locals.accounts.query.length} accounts seeded`)

  // Users need a customer beforehand .................................

  db.users = new Datastore()
  db.users.loadDatabase()

  // insert the sample data into our data store
  db.users.insert(users)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.users = db.users.find(users)
  LOG.debug(`${app.locals.users.query.length} users seeded`)

  // Each Order Line Item needs a product and an order beforehand ...................

  db.orderLineItems = new Datastore()
  db.orderLineItems.loadDatabase()

  // insert the sample data into our data store
  db.orderLineItems.insert(orderLineItems)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.orderLineItems = db.orderLineItems.find(orderLineItems)
  LOG.debug(`${app.locals.orderLineItems.query.length} orderLineItems seeded`)

  // extra...

  db.puppies = new Datastore()
  db.puppies.loadDatabase()

  // insert the sample data into our data store
  db.puppies.insert(puppies)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.puppies = db.puppies.find(puppies)
  LOG.debug(`${app.locals.puppies.query.length} puppies seeded`)

  LOG.info('END Seeder. Sample data read and verified.')
}
