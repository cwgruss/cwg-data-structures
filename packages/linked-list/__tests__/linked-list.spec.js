import LinkedList from '../src/linked-list';

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

	it('should be able to be printed as a string', () => {
		const list = new LinkedList();
		list.append(1);
		list.append(2);

		const listAsString = list.toString();
		expect(listAsString).toBeTruthy();
		expect(typeof listAsString).toBe('string');
	});
});
