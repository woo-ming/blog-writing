export class SingleNode {
  constructor(public data: string, public next: SingleNode | null = null) {}
}

export class SingleLinkedList {
  constructor(public head: SingleNode | null = null) {}

  append(data: string) {
    const node = new SingleNode(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  get(index: number): SingleNode | null {
    if (this.head === null) return null;
    let current = this.head;
    let i = 0;
    while (i !== index) {
      if (current.next === null) {
        return null;
      }
      current = current.next;
      i++;
    }
    return current;
  }

  prepend(data: string) {
    const node = new SingleNode(data);
    node.next = this.head;
    this.head = node;
  }

  insert(data: string, index: number) {
    const node = new SingleNode(data);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let current = this.head;
    let previous = null;
    let i = 0;
    while (i !== index) {
      previous = current;
      if (current.next === null) {
        current.next = node;
        return;
      }
      current = current.next;
      i++;
    }

    node.next = current;
    if (previous) previous.next = node;
  }

  remove(index: number) {
    if (index === 0 || this.head === null) {
      this.head = null;
      return;
    }

    let current = this.head;
    let previous = null;
    let i = 0;
    while (i < index) {
      previous = current;
      if (current.next === null) {
        return;
      }
      current = current.next;
      i++;
    }
    if (previous) previous.next = current.next;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
