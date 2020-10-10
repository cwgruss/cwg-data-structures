/**
 * A node element in a linked-list
 * @param {any} value
 * @param {LinkedListNode | null} next
 */
const LinkedListNode = function (value, next = null) {
	this.value = value;
	this.next = next;
};

/**
 * Returns a shallow copy of the node and its value
 * @return {LinkedListNode}
 */
LinkedListNode.prototype.clone = function () {
	const copy = Object.assign({}, this);
	return copy;
};

/**
 * Returns the node as a string value.
 *
 * @param {toStringLinkedListNodeCallback} callback
 * @return {string}
 */
LinkedListNode.prototype.toString = function (callback) {
	return callback ? callback(this.value) : `${this.value}`;
};

export default LinkedListNode;

/**
 * Callback for converting a node value to a string.
 *
 * @callback toStringLinkedListNodeCallback
 * @param {any} value - The value of the LinekdListNode
 * @return {string}
 */
