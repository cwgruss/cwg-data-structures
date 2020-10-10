import LinkedListNode from '../../src/linked-list-node';

describe('LinkedListNode', () => {
	it('should create an initial node with NULL as a value', () => {
		const headNode = new LinkedListNode(null);
		expect(headNode.value).toBeNull();
		expect(headNode.next).toBeNull();
	});

	it('should create a new node pointed at the next node', () => {
		const nextNode = new LinkedListNode(2);
		const headNode = new LinkedListNode(1, nextNode);

		expect(headNode.value).toBe(1);
		expect(headNode.next).toBe(nextNode);
	});

	describe('clone', () => {
		it('should create a shallow clone of the node object', () => {
			const original = new LinkedListNode(2);
			const clonedNode = original.clone();

			expect(original.prototype).toBe(clonedNode.prototype);
			expect(original.value).toEqual(clonedNode.value);
			expect(original === clonedNode).toBeFalse();
		});
	});

	describe('toString', () => {
		it("should return 'null' as a string when value is NULL", () => {
			const headNode = new LinkedListNode(null);
			const value = headNode.toString();
			expect(typeof value).toBe('string');
			expect(value).toBe('null');
		});

		it('should use callback function to create string response', () => {
			const node = new LinkedListNode(null);
			const toStringCallback = (value) => {
				return '--';
			};
			const value = node.toString(toStringCallback);
			expect(typeof value).toBe('string');
			expect(value).toBe('--');
			// expect(toStringCallback.mock.calls.length).toBe(1);
		});
	});
});
