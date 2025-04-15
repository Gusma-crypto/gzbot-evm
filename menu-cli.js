const chalk = require('chalk');

async function showMainMenu() {
    console.log(chalk.white('\n====MAIN MENU===='));
    console.log(chalk.yellow('🧑‍🏫 1. Profill'));
    console.log(chalk.yellow('ℹ️ 2. Transaksi'));
    console.log(chalk.yellow('❌ 3. Keluar'));
    console.log(chalk.yellow('More feature will add soon!!'));
    console.log(chalk.white('\n================='));

    require('./readline').rl.question(chalk.magenta('Masukan Pilihan anda (1-3): '), async(answer)=>{
           switch(answer){
            case '1':
                await profile();
                break;
            case '2':
                await showMenuTransaksi();
                break;
            case '3':
                console.log('sampai jumpa kembali!!');
                process.exit(0);
                break;
            default:
                console.log(chalk.red('pilihan anda tidak tersedia!!'));
                await returnMenuUtama();
           }
    });
    
}

async function returnMenuUtama(){
    require('./readline').rl.question(chalk.yellow('silahkan tekan enter untuk kembali ke menu utama .....'), ()=>{
        showMainMenu();
    })
}
async function profile(){
    console.log(chalk.yellow('\nNama: agus'));
    console.log(chalk.yellow('Email: agus@gmail.com'));
    await returnMenuUtama();
}

async function showMenuTransaksi() {
    console.log(chalk.yellow('\n============SILAHKAN PILIH MENU TRANSAKSI============='));
    console.log(chalk.green('1. Send'));
    console.log(chalk.green('2. Swap'));
    console.log(chalk.green('3. Bridge'));
    console.log(chalk.green('4. Receive'));
    console.log(chalk.yellow('======================================================'))
}

module.exports = {
    showMainMenu,
    profile,
    showMenuTransaksi,
    
}