const { Schema, model } = require('mongoose');

const diningPackageSchema = new Schema({
    package: {
        type: String,
        required: true,
        trim: true,
    },
});


const DiningPackage = model('DiningPackage', diningPackageSchema);

module.exports = DiningPackage;