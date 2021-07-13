// const fs = require('fs');
// //reading file
// fs.readFile('./docs/test.txt',(err, data)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('last line')

//writing file
// fs.writeFile('./docs/test.txt','hello kirakom',() =>{
//     console.log('file was written');
// });
//directories
fs.mkdir('.assets', (err)=>{
    if(err){
        console.log(err);
    }
    console.log('folder created')
})

