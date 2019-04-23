/** 
*  User model
*  Describes the characteristics of each attribute in a user resource.
*
* @author Jaswanthi Nannuru <s534803@nwmissouri.edu>
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  givenname: { type: String, required: true, default: 'Givenname' },
  familyname: { type: String, required: true, default: 'Familyname' },
  phonenumber: { type: Number, required: true, default: 'phonenumber' },
  accountnumber: { type: Number, required: false, default: 'accountnumber' },
  accounttype: { type: String, required: true, default: 'accounttype' },
  accountpasscode: { type: String, required: true, default: 'accountpasscode' },
  proof: { type: String, required: true, default: 'proof' },
 
})

module.exports = mongoose.model('User', UserSchema)
