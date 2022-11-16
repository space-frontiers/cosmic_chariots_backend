const { Schema, model } = require('mongoose');

const diningPackageSchema = new Schema({
    package: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cost: {
        type: String,
        required: true,
    },
});


const DiningPackage = model('DiningPackage', diningPackageSchema);

module.exports = DiningPackage;