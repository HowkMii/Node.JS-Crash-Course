setTimeout(() => {
    console.log('in the time')
    clearInterval(int);
}, 3000);

const int = setInterval(() =>{
    console.log("in the interval");
},1000);