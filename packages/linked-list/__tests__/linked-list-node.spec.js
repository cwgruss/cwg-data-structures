import LinkedListNode from "../src/linked-list-node";

describe('LinkedListNode', () => {
    it('should create an initial node with NULL as a value', () => {
        const node = new LinkedListNode(null);
        expect(node.value).toBeNull();
        expect(node.next).toBeNull();
    });

    it('should return \'null\' when value is NULL', () => {
        const node = new LinkedListNode(null);
        const value = node.toString();
        expect(typeof value).toBe('string');
        expect(value).toBe('null');
    });
});