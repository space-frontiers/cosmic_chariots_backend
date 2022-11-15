const { Schema, model } = require('mongoose');

const diningPackageSchema = new Schema({
    package: {
        type: String,
        required: true,
        trim: true,
    },
    reservation: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reservation'
          }
    ]
});


const DiningPackage = model('DiningPackage', diningPackageSchema);

module.exports = DiningPackage;