export function bai2(): Promise<number>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(10)
        },1000)
    })
}

bai2().then(data => console.log(data))