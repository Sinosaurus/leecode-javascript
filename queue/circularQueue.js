/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  // 双指针
  // list
  this.list = []
  this.size = k // 数组长度
  this.head = -1
  this.end = -1
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) this.head = 0
  /**
   * TODO: 此处有个优势，取模可以直接获取到结果
   * 1. 当 end < size 时，直接就是 ++
   * 2. end > size 时，自动进行了值修改，而不是自己进行维护计算
   */
  this.end = (this.end + 1) % this.size
  this.list[this.end] = value
  return true
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false
  if (this.head === this.end) {
    this.head = -1
    this.end = -1
    return true
  }
  this.head = (this.head + 1) % this.size
  return true
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) return -1
  return this.list[this.head]
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1
  return this.list[this.end]
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.head === -1
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return (this.end + 1) % this.size === this.head
};

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/
const log = console.log
const q = new MyCircularQueue(10)
log(q.enQueue(3))
log(q.enQueue(1))
log(q.enQueue(2))
log(q.enQueue(3))
log(q.Rear())
log(q.isFull())
log(q.deQueue())
log(q.enQueue(4))
log(q.Rear())