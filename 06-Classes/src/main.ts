class Coder {

    // with TS you need to have the property data type defined in the class, even with a constructor
    name: string; 
    music: string;
    age: number;
    lang: string;

    constructor(name: string, music: string, age: number, lang: string) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}

// or we can use visibility modifiers o avoid duplication

class Coder2 {
    constructor(public readonly name: string, public music: string, private age: number, protected lang: string) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    // Dont forget to add visual modifiers to methods
    public getAge() {
        return `Hello, I'm ${this.age}`;
    }

}

const Name = new Coder2('Ryan', 'Rock', 42, 'Typescript')
console.log(Name.getAge());


// We can extend from anther class, and we dont need to include data types for the extended properties
class WebDev extends Coder2 {
    constructor(public computer: string, name: string, music: string, age: number, lang: string) {
        super(name, music, age, lang); // When you extend you need to use 'super' to bring in the extended properties
        this.computer = computer;
    }
    public getLang() {
        return `I write ${this.lang}`;
    }
}

const Sarah = new WebDev('Mac', 'Sarah', 'Lofi', 25, 'Typescript');
console.log(Sarah.getLang());

// Adding an interface to a class

interface Musician {
    name: string,
    instrument: string,
    plays(action: string): string
}

class Guitarist implements Musician {
    
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    plays(action: string) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.plays('strums'));