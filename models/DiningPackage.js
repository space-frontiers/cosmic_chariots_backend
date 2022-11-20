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
    href: {
        type: String,
        required: true,
    },
    imageSrc: {
        type: String,
        required: true,
    },
    imageAlt: {
        type: String,
        required: false,
    },
});


const DiningPackage = model('DiningPackage', diningPackageSchema);

module.exports = DiningPackage;