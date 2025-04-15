const chalk = require('chalk');
const fs = require('fs');

async function createFile(){
    require('./readline').rl.question('masukan nama file :', (wallet)=>{
        if(!fs.existsSync(wallet)){
           formatTxt = `${wallet}.txt`
             fs.writeFile(formatTxt, 'isi default kareana file belum ada', (err)=>{
               if(err){
                   console.log(chalk.red('❌ gagal membuat file txt!!'));
                   process.exit(1);
               }
               console.log(chalk.green(`✅file ${formatTxt}, berhasil dibuat`));
               process.exit(0);
           })
        }else{
           console.log(chalk.red(`🚫nama file : ${wallet}.txt sudah ada!!, buat nama file lain!!`))
           process.exit(1);
        }     
   });
}

// console.log(formatPath);
async function main() {
    console.log(chalk.green('bot berjalan.....'));
    await createFile();
    // await showMainMenu();
    
}

main().catch(error =>{
    console.error('Startup errorr:', error.message);
    process.exit(1);
});
