const printReceipt = require('../main');

it('should return receipt when call printReceipt given ["0001","0002","0001"]', () => {
    expect(printReceipt(["0001","0002","0001"]))
        .toBe("Receipts\n--------------------------\nCoca Cola         3         2\nDiet Coke         4         1\n--------------------------\nPrice:10");});
