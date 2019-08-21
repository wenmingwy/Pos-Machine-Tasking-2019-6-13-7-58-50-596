function printReceipt(barID) {
    if(ID==''){
        return '[ERROR]:输入异常';
    }
    ItemCount = getCountByBar(barID)
    ItemInfo = getPrinceAndNameByBar(ItemCount)
    if(ItemInfo=='error'){
        return '[ERROR]:商品不存在';
    }
    result = getReceipt(ItemInfo)
    return result;
}

function getCountByBar(ID) {
    var obj = {};
    var key, result = [];
    for (var i = 0; i < ID.length; i++) {
		//获取商品的种类以及对应的个数
        key = ID[i];
        if (obj[key]) {
            obj[key]++;
        }
        else {
            obj[key] = 1;
        }
    }
	//进行return返回，用作下一个函数
    for (var i in obj) {
        result.push({ bar: i, count: obj[i] });
    }
    return result;
}

function getPrinceAndNameByBar(ItemCount) {
    var result = [] ;
    return result;
}
function getReceipt(ItemInfo) {
    var result = '';   
    return result
}

module.exports = printReceipt;