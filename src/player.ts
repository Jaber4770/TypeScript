export class Player {
    public name: string;
    private age: number;
    readonly country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }


    play() {
        console.log(`${this.name} is player of ${this.country}. His age is ${this.age}`);
    }
}