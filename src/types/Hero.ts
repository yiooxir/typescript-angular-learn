export interface Person {
    id: number;
    name: string;
}

export class Person implements Person {
    id: number;
    name: string;

    constructor(name) {
        this.id = Person.getId();
        this.name = name;
    }

    static id_counter: number = 1;

    static getId() {
        return Person.id_counter++;
    }
}

export class Hero extends Person {
    constructor(args) {
        super(args);

    }
}
