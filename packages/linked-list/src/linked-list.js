import LinkedListNode from "./linked-list-node.js";

/**
 * A linked-list of nodes
 */
export default class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Add a new value to the end of the linked-list,
   * returns the now updated linked-list
   * @param {any} value
   * @returns {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    // If no head exists, create one
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    // Otherwise, append the new node to the end
    // and make it the new tail
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
}
