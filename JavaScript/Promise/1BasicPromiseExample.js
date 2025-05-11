// 1. Basic Promise Creation

// Resolve 
// Reject
// Pending

const promiseExample = new Promise((resolve , reject) => {
    const flag = true;
    if(flag === true){
        resolve("Basic Promise Resolve")
    }else{
        reject("Basic Promise Reject")
    }
})


promiseExample.then((result) => console.log(result)).catch((err) => console.log(err))