let sub : number | string = '1M'

let apiRequest : 'pending' | 'success' | 'error' = 'pending'

apiRequest = 'success'

let airLineSeat : 'aisle' | 'window-side' | 'middle' = 'middle'

airLineSeat = 'aisle'

const orders = ['12', '11', '67', '28' , '42']
let currentOrder : string | undefined;

for(let order of orders){
    if(order === '11'){
        currentOrder = order
        break
    }
    currentOrder = '11'
}

console.log((currentOrder));
