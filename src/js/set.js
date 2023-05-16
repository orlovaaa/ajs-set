export default class Team {
  constructor() {
    this.member = new Set();
  }

  add(target) {
    if (this.member.has(target)) {
      throw new Error('Такой персонаж уже есть в команде');
    }
    this.member.add(target);
  }

  addAll(...сharacter) {
    сharacter.forEach((item) => this.member.add(item));
  }

  toArray() {
    this.member = Array.from(this.member);
  }
}