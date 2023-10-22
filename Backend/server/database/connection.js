const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    // DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, 
    // and will be removed in a future version. To use the new Server Discover and Monitoring engine,
    //  pass option { useUnifiedTopology: true } to the MongoClient constructor.
    await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true  })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
