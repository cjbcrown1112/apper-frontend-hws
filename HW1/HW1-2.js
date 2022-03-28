const NoItem = "Last Item Removed"

class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }
    
    push(num) {
        this.items[this.count] = num
        this.count++
        return this.count -1
    }

    pop() {
      if(this.count == 0) return NoItem
      let removeItem = this.items[this.count -1]
      this.count--
      return removeItem
    }

    peek() {
      return this.items [this.count -1]
    }
}
const stack = new Stack()