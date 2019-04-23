/** 
*  transaction model
*  Describes the characteristics of each attribute in a transaction resource.
*
* @author Sunil Mundru <s534939@nwmissouri.edu>
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  transactionDate: { type: Date, required: true, unique: true },
  transactionType: { type: String, required: true, default: 'Cheking' },
  transactionAmount: { type: Number, required: true, unique: true },
  transactionStatus: { type: String, required: true, unique: true },
  
})

module.exports = mongoose.model('Transaction', TransactionSchema)
