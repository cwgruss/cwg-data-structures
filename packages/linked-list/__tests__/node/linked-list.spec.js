import LinkedList from '../../src/linked-list';
import LinkedListNode from '../../src/linked-list-node';

describe('LinkedList', () => {
	it('should create an empty LinkedList', () => {
		const list = new LinkedList();
		expect(list.head).toBeNull();
		expect(list.tail).toBeDefined();
		expect(list.tail.value).toBe(null);
		expect(list.size).toBe(0);
	});

	it('should be able to append a new node', () => {
		const list = new LinkedList();
		list.append(1);

		expect(list.head).toBeTruthy();
		expect(list.tail).toBeTruthy();
		expect(list.size).toBe(1);
		expect(list.head.value).toEqual(1);
		expect(list.tail.value).toEqual(1);
	});

	it('should be able to append new new nodes', () => {
		const list = new LinkedList();
		list.append(1);
		list.append(2);

		expect(list.head).toBeTruthy();
		expect(list.tail).toBeTruthy();
		expect(list.size).toBe(2);
		expect(list.head.value).toEqual(1);
		expect(list.tail.value).toEqual(2);
	});

	it('should insert a new node at a given index', () => {
		const list = new LinkedList();
		list.append(1);
		list.append(2);
		list.append(4);

		list.insert(2, 3);
		expect(list.head).toBeTruthy();
		expect(list.tail).toBeTruthy();
		expect(list.size).toBe(4);
		expect(list.head.value).toEqual(1);
		expect(list.tail.value).toEqual(4);
	});

	it('should append an array of values to the end of the array', () => {
		const list = new LinkedList();
		list.appendAll([1, 2]);

		expect(list.head).toBeTruthy();
		expect(list.tail).toBeTruthy();
		expect(list.size).toBe(2);
		expect(list.head.value).toEqual(1);
		expect(list.tail.value).toEqual(2);
	});

	it('should insert an array of values to an existing list', () => {
		const list = new LinkedList();
		list.append(1);
		list.append(2);
		list.append(6);
		list.insertAll(2, [3, 4, 5]);

		console.log(list.toString());
		expect(list.head).toBeTruthy();
		expect(list.tail).toBeTruthy();
		expect(list.size).toBe(6);
		expect(list.head.value).toEqual(1);
		expect(list.tail.value).toEqual(6);
		const thirdNode = list.head.next.next;
		expect(thirdNode.value).toEqual(3);
		expect(thirdNode.next.value).toEqual(4);
		expect(thirdNode.next.next.value).toEqual(5);
	});

	it('should be renderable as a string', () => {
		const list = new LinkedList();
		list.append(1);
		list.append(2);

		const listAsString = list.toString();
		expect(listAsString).toBeTruthy();
		expect(typeof listAsString).toBe('string');
	});
});
