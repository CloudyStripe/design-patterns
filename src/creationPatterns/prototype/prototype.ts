//prototype interface

abstract class Animal {
    protected name: string;
    protected age: number;
    protected color: string;

    constructor(name: string, age: number, color: string) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    public abstract clone(): Animal;

    public abstract makeSound(): void;

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getColor(): string {
        return this.color;
    }

    public setAge(age: number): void {
        this.age = age;
    }
}

//concrete prototype

class Dog extends Animal {
    protected breed: string;

    constructor( breed: string, name: string, age: number, color: string) {
        super(name, age, color)
        this.breed = breed;
    }

    public clone(): Dog {
        return new Dog(this.breed,this.name, this.age, this.color);
    }

    public makeSound(): void {
        console.log('Bark');
    }
}

//concrete prototype

class Cat extends Animal {
    protected breed: string;

    constructor( breed: string, name: string, age: number, color: string) {
        super(name, age, color)
        this.breed = breed;
    }

    public clone(): Cat {
        return new Cat(this.breed, this.name, this.age, this.color);
    }

    public makeSound(): void {
        console.log('Meow');
    }
}