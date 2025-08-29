export function bai3(): Promise<string>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Something went wrong")
        },1000)
    })
}

bai3().catch(data => console.log(data))