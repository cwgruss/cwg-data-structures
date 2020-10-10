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
	if (!this.head || !this.tail) {
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
 * Inserts the specified value at the provided index in the list
 * @param {number} index
 * @param {any} value
 * @return {LinkedList}
 */
LinkedList.prototype.insert = function (index, value) {
	let currentIndex = 0;
	let currentNode = this.head;
	const newNode = new LinkedListNode(value);

	if (index >= this.size) {
		// TODO: Throw an error if the specified index is larger than the size
		//  Saturday, October 10 2020
		// ******************************************
	}

	while (currentNode) {
		const nextIdndex = (currentIndex += 1);
		if (nextIdndex === index) {
			const nextNode = currentNode.next;
			currentNode.next = newNode;
			newNode.next = nextNode;
			this.size += 1;
			break;
		}

		currentIndex = nextIdndex;
		currentNode = currentNode.next;
	}

	return this;
};

/**
 * Appends all of the values to the end of the list, in the order they are provided
 * @param  {any[]} values
 * @return {LinkedList}
 */
LinkedList.prototype.appendAll = function (values) {
	for (const value of values) {
		this.append(value);
	}

	return this;
};

/**
 * Inserts all of the values in the specified array into the list, starting at the specified index.
 * @param {number} index
 * @param {any[]} values
 * @return {LinkedList}
 */
LinkedList.prototype.insertAll = function (index, values = []) {
	let currentIndex = 0;
	let currentNode = this.head;

	if (index >= this.size) {
		// TODO: Throw an error if the specified index is larger than the size
		//  Saturday, October 10 2020
		// ******************************************
	}

	while (currentNode) {
		const nextIdndex = currentIndex + 1;
		const nextNode = currentNode.next;
		if (nextIdndex === index) {
			let tmpTail;
			let tmpHead;
			for (const value of values) {
				const newNode = new LinkedListNode(value);
				if (!tmpTail) {
					tmpHead = newNode;
					tmpTail = newNode;
				} else {
					tmpTail.next = newNode;
					tmpTail = newNode;
				}
				this.size += 1;
			}

			if (!tmpHead || !tmpTail) {
				// TODO:Throw an error indicating that a sub list count not be created
				//  Saturday, October 10 2020
				// ******************************************
				break;
			}
			currentNode.next = tmpHead;
			tmpTail.next = nextNode;
			break;
		}

		currentIndex = nextIdndex;
		currentNode = nextNode;
	}

	return this;
};

LinkedList.prototype.clear = function () {
	/**
	 * The length of the LinkedList
	 * @type {number}
	 */
	this.size = 0;

	/**
	 * A reference to the first node in the LinkedList
	 * @type {LinkedListNode | null }
	 */
	this.head = null;

	/**
	 * A reference to the last node in the LinkedList
	 * @type {LinkedListNode | null}
	 */
	this.tail = null;
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
