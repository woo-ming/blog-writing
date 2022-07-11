import { SingleLinkedList, SingleNode } from "./linked-list";

describe("Linked List", () => {
  it("Linked List append", () => {
    const linkedList = new SingleLinkedList(new SingleNode("first node"));
    linkedList.append("second node");

    expect(linkedList.get(1)?.data).toBe("second node");
  });

  it("Linked List prepend", () => {
    const linkedList = new SingleLinkedList(new SingleNode("first node"));
    linkedList.prepend("second node");

    expect(linkedList.get(0)?.data).toBe("second node");
  });

  it("Linked List insert", () => {
    const linkedList = new SingleLinkedList(new SingleNode("first node"));
    linkedList.append("second node");
    linkedList.append("fourth node");
    linkedList.insert("third node", 2);

    expect(linkedList.get(2)?.data).toBe("third node");
  });

  it("Linked List remove", () => {
    const linkedList = new SingleLinkedList(new SingleNode("first node"));
    linkedList.append("second node");
    linkedList.append("fourth node");
    linkedList.insert("third node", 2);
    linkedList.remove(2);

    expect(linkedList.get(2)?.data).toBe("fourth node");
  });
});
