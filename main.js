function countItem(barCodes){
	var result =[] ;
	for(let i=0; i<barCodes.length;i++){
		let index;
		index = result.findIndex(element => element.id == barCodes[i]);
		if(index <= -1){
			result.push({
				id:barCodes[i],
				count:1
			})
		}
		else{
			result[index].count++;
		}
    }

	return result ;
}


	
function getItem(barCodes){
	var dataArr = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];
    var result = [] ;
	var itemList =  countItem(barCodes) ;
	for(let i=0; i<itemList.length;i++){
        for(let j=0; j<dataArr.length;j++){
            if(itemList[i].id==dataArr[j].id){
                result.push({
                    id:dataArr[j].id,
                    name:dataArr[j].name,
                    price:dataArr[j].price,
                    count:itemList[i].count
                })
            }
            }
	
    }
    return result;
    
}

 
function calculateTotalPrice(barCodes){
    var totalPrice=0;
    var tempPrice=0;
    var getItemResult = getItem(barCodes);
        for(let i=0;i<getItemResult.length;i++){
            tempPrice = getItemResult[i].price*getItemResult[i].count;
            totalPrice = tempPrice + totalPrice ;        
        }
     var barCodes= ["0001","0002","0001"] ;
    return totalPrice ;
}	

var barCodes= ["0001","0002","0001"] ;
console.log(calculateTotalPrice(getItem(barCodes)));

function printReceipt(barCodes){
    var getItemResult = getItem(barCodes);
    var totalPrice = calculateTotalPrice(barCodes);
    var printTable = "";
    printTable = "Receipts" + "\n" + "--------------------------" + "\n";
    for(let i=0;i<getItemResult.length;i++){
        printTable = printTable + getItemResult[i].name+"         " + getItemResult[i].price+"         " + getItemResult[i].count + "\n";
    }
    printTable = printTable + "--------------------------" + "\n"+"Price:" + totalPrice ;
    return printTable ;
}

module.exports = printReceipt;