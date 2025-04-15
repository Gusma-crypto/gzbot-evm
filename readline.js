const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function closeReadline(){
    rl.close();
}
module.exports ={
    rl,
    closeReadline
};