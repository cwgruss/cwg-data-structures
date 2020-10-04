import LinkedListNode from "../src/linked-list-node";

describe('LinkedListNode', () => {
    it('should create an initial node with NULL as a value', () => {
        const node = new LinkedListNode(null);
        expect(node.value).toBeNull();
        expect(node.next).toBeNull();
    });
});