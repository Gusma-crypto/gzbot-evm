const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

//inisialisas untuk path
const folderPath = __dirname;

//fungsi membaca file
async function bacaFile(){
    require('./readline').rl.question('masukan nama file :', (wallet)=>{
        //check jika file belum ada maka buat file
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
            //jika file udah ada baca nama file ada apa saja yang berakhiran txt
           fs.readdir(folderPath, (err, files)=>{
                if(err){
                    return console.error(chalk.red('❌ gagal membaca directory', err));
                }

                const txtfiles = files.filter(file=>path.extname(files)==='.txt');
                if(txtfiles.length === 0){
                    console.log(chalk.yellow('🚫 Tidak ada file ditemukan'));
                }else{
                    console.log('file .txt ditemukan');
                    txtfiles.forEach(file=>console.log(file));
                }
           });

        }     
   });
}

// console.log(formatPath);
async function main() {
    console.log(chalk.green('bot berjalan.....'));
    await bacaFile();
    
}

main().catch(error =>{
    console.error('Startup errorr:', error.message);
    process.exit(1);
});
