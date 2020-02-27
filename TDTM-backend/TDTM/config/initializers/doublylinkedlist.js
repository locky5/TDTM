class Node {
  constructor(data, next, previous) {
    this.data = data
    this.next = next
    this.previous = previous
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  addDataToFront(data) {
    if (this.head === null) {
      this.head = new Node(data, this.head, null)
    } else {
      this.head = new Node(data, this.head, this.head.previous)
      this.head.next.previous = this.head //new node's next node's previous is current node 
    }
  }

  addDataToBack(data) {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = new Node(data, null, current)
  }

  printData() {
    let current = this.head
    while (current !== null) {
      console.log(current.data)
      current = current.next
    }
  }

  printDataInReverse() {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    while (current.previous) {
      console.log(current.data)
      current = current.previous
    }
    console.log(current.data)
  }
}

let ll = new doublyLinkedList()
ll.addDataToFront(100)
ll.addDataToFront(200)
ll.addDataToFront(300)
ll.addDataToBack(400)
ll.addDataToBack(600)
ll.printData()
console.log('///')
ll.printDataInReverse()
