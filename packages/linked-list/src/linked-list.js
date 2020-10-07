import LinkedListNode from './linked-list-node';

/**
 * A linked-list of nodes
 */
const LinkedList = function () {
	this.head = null;
	this.tail = new LinkedListNode(null);
	this.size = 0;
};

/**
 * Add a new value to the end of the linked-list,
 * returns the now updated linked-list
 * @param {any} value
 * @return {LinkedList}
 */
LinkedList.prototype.append = function (value) {
	const newNode = new LinkedListNode(value);

	// # If no head exists, create one
	if (!this.head) {
		this.head = newNode;
		this.tail = newNode;
		this.size = 1;
		return this;
	}

	// # Otherwise, append the new node to the end
	// # and make it the new tail.
	// # Remember to increment the size by one new node
	this.tail.next = newNode;
	this.tail = newNode;
	this.size += 1;
	return this;
};

/**
 * Returns the linked-list as a string value.
 *
 * @param {toStringLinkedListNodeCallback} callback
 * @return {string}
 */
LinkedList.prototype.toString = function (callback) {
	let str = '';
	let currentNode = this.head;
	while (currentNode) {
		str = str.concat(currentNode.toString(callback));
		if (currentNode.next) {
			str = str.concat(', ');
		}
		currentNode = currentNode.next;
	}

	return str;
};

export default LinkedList;

/**
 * Callback for converting a node value to a string.
 *
 * @callback toStringLinkedListNodeCallback
 * @param {any} value - The value of the LinekdListNode
 * @return {string}
 */
