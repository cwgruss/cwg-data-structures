import LinkedList from "../src/linked-list";


describe('LinkedList', () => {
    it('should create an empty LinkedList', () => {
        const list = new LinkedList();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });
});