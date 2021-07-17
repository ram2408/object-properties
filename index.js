const getKeys = (obj) => {
    let keysArray = [];
    if(typeof obj === 'object' && obj !== null){
        keysArray = Object.keys(obj);
    }
    return keysArray
}

module.exports = getKeys;