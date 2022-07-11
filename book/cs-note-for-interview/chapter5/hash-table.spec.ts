import { HashTable } from "./hash-table";

describe("HashTable", () => {
  it("HashTable Set", () => {
    const hashTable = new HashTable({ tableSize: 32 });
    hashTable.set("hello", "world");
    expect(hashTable.get("hello")).toBe("world");
  });

  it("HashTable Remove", () => {
    const hashTable = new HashTable({ tableSize: 32 });
    hashTable.set("hello", "world");
    hashTable.remove("hello");
    expect(hashTable.get("hello")).toBe(undefined);
  });

  it("HashTable Collision", () => {
    const hashTable = new HashTable({ tableSize: 32 });
    hashTable.set("bow", "world");
    hashTable.set("wob", "world");

    expect(hashTable.get("bow")).toBe("world");
    expect(hashTable.get("wob")).toBe("world");
  });
});
