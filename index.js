const chalk = require('chalk');
const { showMainMenu } = require('./menu-cli');
const fs = require('fs');
const path = require('path');

async function main() {
    console.log(chalk.green('bot berjalan.....'));
    await showMainMenu();    
}

main().catch(error =>{
    console.error('Startup errorr:', error.message);
    process.exit(1);
});
