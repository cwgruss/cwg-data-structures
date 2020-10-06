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
	 * Returns the node as a string value.
	 *
	 * @param {toStringLinkedListNodeCallback} callback
	 * @return {string}
	 */
	toString(callback) {
		return callback ? callback(this.value) : `${this.value}`;
	}
}

export default LinkedListNode;

/**
 * Callback for converting a node value to a string.
 *
 * @callback toStringLinkedListNodeCallback
 * @param {any} value - The value of the LinekdListNode
 * @return {string}
 */
