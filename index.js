class SortedList {
  constructor() {
    this.items=[]
    this.length= this.items.length
  }

  add(item) {
    if(this.length === undefined){
      this.items.push(item);
    } else {
        this.items.push(item);
        this.items.sort(function(a, b) {
        return a - b;
      });
    }
  }

  get(pos) {
    if (this.items[pos] === undefinded){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(this.length === undefinded){
      throw new Error('EmptySortedList');
    } else {
      this.items.reduce(function(a, b) {
        return Math.max(a, b);
    });
    }
  }

  min() {
    if(this.length === undefinded){
      throw new Error('EmptySortedList');
    } else {
        return Math.min(...this.items);
    }
  }
  

  sum() {
    if(this.length === undefined){
      return 0;
    }
  }

  avg() {}
}

module.exports = SortedList;
