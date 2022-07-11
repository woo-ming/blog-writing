export class HashTable {
  private table: any[];
  constructor({ tableSize }: { tableSize: number }) {
    this.table = new Array(tableSize);
  }

  set(key: string, value: any) {
    const hash: number = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = {};
    }
    this.table[hash][key] = value;
  }

  get(key: string) {
    const hash = this.hash(key);
    return this.table[hash][key];
  }

  remove(key: string) {
    const hash = this.hash(key);
    if (this.table[hash][key]) {
      this.table[hash][key];
      delete this.table[hash][key];
    }
  }

  hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
}
