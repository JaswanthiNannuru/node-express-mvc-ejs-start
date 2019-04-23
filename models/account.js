/** 
*  Account model
*  Describes the characteristics of each attribute in a product resource.
*
* @author Denise Case <dcase@nwmissouri.edu>
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  accountName: { type: String, required: true },
  numberOfTransactions: { type: Number, required: true, default: 'Null' },
  accountType: { type: String, required: true, default: 'Checking' },
})
  

module.exports = mongoose.model('Account', AccountSchema)
