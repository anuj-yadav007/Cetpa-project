export var allData = [];

export function add_customer(newData) {
    var cus = {id:allData.length +1,customer:newData};
    allData.push(cus);
}


//{id:allData.length +1,data:newData};