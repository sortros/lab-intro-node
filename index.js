class SortedList {
  constructor() {
    this.items=[];
    this.length= this.items.length;
  }

  add(item) {
      this.items.push(item);
      this.items.sort((a, b) => a - b);
      this.length = this.items.length;    
  }

  get(pos) {
    //if (this.items[pos] === undefinded){
    //  throw new Error('OutOfBounds');
    //} else {
    //  return this.items[pos];
    //}//---verde mi codigo, debajo el que hice con mi hermana, porque uno da mal y el otro bien??-----
    if (this.items[pos] === undefined ){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(!this.length){
        throw new Error('EmptySortedList');
    } else {
        return Math.max(...this.items);
    }
  }

  min() {
    if(!this.length){
        throw new Error('EmptySortedList');
    } else {
        return Math.min(...this.items);
    }
  }
  

  sum() {
    if(!this.length) return 0;
    let sumTotal = this.items.reduce((acc, value) => {
      return acc + value
    }, 0)
    return sumTotal;
  }

  avg() {
    if(!this.length) throw new Error("EmptySortedList")
    return this.sum()/this.length;
  }
}

module.exports = SortedList;
