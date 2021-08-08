function merge<T extends object, U extends object>(objA: T, objB: U) { //Function for merging generic objects
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Leo" }, { age: 26 });

interface Lengthy{
  length: number;
}
//Managing Connstraints
function countAndDescribe<T extends Lengthy>(element: T): [T,string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 Element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " Elements ";
  }
  return [element, descriptionText];
}

class DataStorage<T>{
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems(){
    return [...this.data];
} 
}