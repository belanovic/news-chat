const mongoose = require('mongoose');
const config = require('config');


const messageSchema = new mongoose.Schema({

    room: {
        type: String
    },
    initialRooms: {
        type: Array
    },
    text: {
        type: String
    },
    messageToReply: {
        type: Number
    },
    username: {
        type: String
    },
    checked: {
        type: Array
    },
    milliseconds: {
        type: Number
    },
    profileImgURLLarge: {
        type: String
    }, 
    profileImgURLSmall: {
        type: String
    }
})

const copies = config.get('copies').split(' ');

module.exports = function createModel(origin) {

    let messageSuffix = '';

    copies.forEach((copy, i) => {

        if(origin.includes(copy)) {
            messageSuffix = copy;
        }
    })
     
    return mongoose.model(`Message${messageSuffix}`, messageSchema);
}
