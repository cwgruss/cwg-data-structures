
/**
 * A node element in a linked-list 
 */
class LinkedListNode {

    /**
     * @param {any} value
     * @param {LinkedListNode | null} next
     */
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    /**
     * @param {(arg0: any) => string} callback
     */
    toString(callback) {
        return callback ? 
            callback(this.value) :
            `${this.value}`;
    }
} 

export default LinkedListNode;