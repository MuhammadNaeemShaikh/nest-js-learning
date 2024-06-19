"use strict";
// let message = "hello";
// message = 3;
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(message);
//strongly typed syntax
// let a: string = 'hi';
// let b: number = 1;
// let c: number[] = [1, 2]
//type interference
// let e = 'Usa';
// let f = 2.1;
// f = 22;
// let g = false;
// g = true;
//use const where variable do not change
// const a = 5;
// const b: number = 33;.
// const c = 'best';
//I suggest use let instead of var everywhere,
//becuase let has blocked scope
// if (true) {
//     let z: number = 4;
// } else {
//     let z: string = "hello"
// }
// console.log(`let z `); //z is not accessible because z is blocked
// let myName: string | null | string[];
// myName = [];
// console.log(typeof myName);
// <------------- Difference between undefined and null ---------------------------->
//undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value,
// meaning that a variable has been declared and given the value of null
// <------------- Difference between undefined and null ---------------------------->
//type narrowing
// let a: string | number;
// a = 'narrowing' //narrowing
// console.log(a.charAt(0));
// console.log(a.at(0));
// let myAge: string | number;
// myAge = 17;
// myAge = 'Dont know any thing'
// console.log(myAge.lastIndexOf("k"));
//union literals
// let age: number | 'Died' | "unknown";
// age = 90;
// age = "unknown"
// age = 'hello' error
// let zia: 'zia';
// zia = 'zia';
// let teacher = {
//     name: 'Muhammad Naeem',
//     eperience: 20
// }
// console.log(teacher.eperience);
// console.log(teacher.name);
// let student: {
//     name: string,
//     age: number
// }
// student = {
//     name: 'tabish',
//     age: 90
// }
// console.log(student);
// type Student = {
//     name: string,
//     age?: number //optional
// }
// let student: Student = {
//     name: 'rafay',
//     age: 100
// }
// let student2: Student = {
//     name: 'Hira',
// }
// console.log(student);
// console.log(student2);
// interface Manager {
//     name: string,
//     subOrdinate?: number
// }
// let storeManager: Manager = {
//     name: "shams"
// }
//<---------------------------------------------------- structural typing ----------------------------------------------------------------------------->
// interface Ball {
//     diameter: number
// }
// interface Sphere {
//     diameter: number
// }
// let ball: Ball = { diameter: 10 };
// let sphere: Sphere = { diameter: 20 };
// ball = sphere;
// sphere = ball;
// interface Tube {
//     diameter: number,
//     length: number;
// }
// let tube: Tube = {
//     diameter: 10,
//     length: 20
// }
// ball = tube;
// tube = ball;
// let myType = { name: "Zia", id: 1 }
// myType = { id: 2, name: 'Bhutto' }
//<---------------------------------------------------- structural typing ----------------------------------------------------------------------------->
//<------------------------------------ Nested Objects ------------------------------------------------------->
// interface Author {
//     firstName: string;
//     lastName: string;
// }
// interface Book {
//     author: Author,
//     name: string
// }
// let book: Book = {
//     author: {
//         firstName: "Muhammad",
//         lastName: "Naeem"
//     },
//     name: "Harry Potter"
// }
// console.log(book);
//<------------------------------------ Nested Objects ------------------------------------------------------->
//<------------------------------------ Intersection Types ---------------------------------------------------->
//intersection type only worked in types only
// interface Student {
//   studentId: number,
//   name: string
// }
// interface Teacher {
//   teacherId: number,
//   teacherName: string
// }
// type intersectedType = Student & Teacher
// let intersectedObj: intersectedType = {
//   studentId: 1,
//   name: 'bajaj',
//   teacherId: 1,
//   teacherName: 'shweta'
// }
// console.log(intersectedObj);
//<------------------------------------ Intersection Types ---------------------------------------------------->
// any || unknown || never
// let a: any = '';
// a = 1;
// let b: unknown = 'ddfa'
// b as string;
// b = 'dsfkj';
// b = 1;
// b:string = 'true';
// <--------------------------------------------------- Enum Types ------------------------------------------------------------------>
// enum Color {
//     'Red', 'Green', 'Blue'
// }
// // let c: Color = Color.Blue;
// // console.log(c);
// let d: string = Color[1];
// console.log(d);
// <--------------------------------------------------- Enum Types ------------------------------------------------------------------>
// <--------------------------------------------------- Array ----------------------------------------------------------------------->
// first syntax
// let arr: number[] = [1, 2, 3];
// console.log(arr[1]);
// Another syntax
// let arr: Array<number> = [1, 2, 3, 4];
// console.log(arr);
// let arr: number[] = [];
// arr.push(1)
// let arr: Array<number> = [];
// arr.push(1, 2,10)
// console.log(arr);
// <--------------------------------------------------- Array ----------------------------------------------------------------------->
// <--------------------------------------------------- Function -------------------------------------------------------------------->
// <--------------------------------------------------- Named Function -------------------------------------------------------------------->
// function add(x: number, y: number): number {
//     return x + y;
// }
// console.log(add(1, 2));
// <--------------------------------------------------- Named Function -------------------------------------------------------------------->
// <--------------------------------------------------- Anonymous Function -------------------------------------------------------------------->
// let add: (x: number, y: number) => number = (x: number, y: number): number => {
//     try {
//         return x + y;
//     } catch (error) {
//         return NaN;
//     }
// };
// console.log(add(3,1));
// <--------------------------------------------------- Anonymous Function -------------------------------------------------------------------->
// <--------------------------------------------------- Optional Parameter Function -------------------------------------------------------------------->
// let add: (x: number, y?: number) => number = (x: number, y?: number): number => {
//     if (y) {
//         return x + y
//     }
//     return x;
// };
// console.log(add(1));
// console.log(add(1, 3));
// <--------------------------------------------------- Optional Parameter Function -------------------------------------------------------------------->
// <--------------------------------------------------- Default Parameter Function -------------------------------------------------------------------->
// let add = (x: number, y: number = 10): number => {
//     try {
//         return x + y;
//     } catch (err) {
//         console.log(`error ${err}`);
//         return NaN;
//     }
// }
// console.log(add(1, 2));
// console.log(add(1));
// <--------------------------------------------------- Default Parameter Function -------------------------------------------------------------------->
// <--------------------------------------------------- Rest Parameter Function -------------------------------------------------------------------->
// let add = (...rest: number[]): number => {
//     return rest.reduce((p, c): number => {
//         return p + c
//     }, 0);
// }
// console.log(add(1, 2, 3, 4, 5));
// <--------------------------------------------------- Rest Parameter Function -------------------------------------------------------------------->
// <--------------------------------------------------- Call Back Function -------------------------------------------------------------------->
// let callbackfunc = (): string => {
//     return `call back function`;
// }
// let parentFunction = (cb: () => string): string => {
//     console.log('run');
//     return cb();
//     console.log('run');
//     return cb()
// }
// console.log(parentFunction(callbackfunc));
// let callbackfunc = (): void => {
//     console.log(`call back function`);
// }
// let parentFunction = (cb: () => void): void => {
//     setTimeout(() => {
//         cb();
//         cb();
//     }, 1000)
// }
// parentFunction(callbackfunc);
// let callbackFunc = (): string => {
//   // Simulate an operation that might fail
//   throw new Error('Simulated error');
// };
// let errorFunc = (err: Error): string => {
//   // Ensure the error message is included in the returned string
//   return `Error Occurred: ${err.message}`;
// };
// let parentFunction = (cb: () => string, error: (err: Error) => string): string => {
//   try {
//     return cb(); // Directly invoke the callback
//   } catch (err) {
//     // Pass the caught error to the error handler
//     return error(err as Error); // Type assertion is safe here because we know err is an Error
//   }
// };
// // Call parentFunction with the callback and error handlers
// console.log(parentFunction(callbackFunc, errorFunc));
// <--------------------------------------------------- Call Back Function -------------------------------------------------------------------->
// <--------------------------------------------------- Promise -------------------------------------------------------------------->
// let orderPizza = () => {
//     return new Promise((resolve, reject) => {
//         let isBurnt = true;
//         if (isBurnt) {
//             resolve('Pizza is Ready');
//         } else {
//             reject('Pizza is not ready');
//         }
//     })
// }
// orderPizza().then((res) =>
//     {
//     console.log(res);
// }
// );
// let orderPizza = () => {
//   return new Promise((resolve, reject) => {
//     let isBurnt = false;
//     if (isBurnt) {
//       resolve("Pizza is Ready");
//     } else {
//       reject('Pizza is burnt');
//     }
//   })
// }
// orderPizza().then((res) => { console.log(res); }).catch((err) => { console.log(`err`); })
// <--------------------------------------------------- Promise -------------------------------------------------------------------->
// <--------------------------------------------------- Function Overloading -------------------------------------------------------------------->
// function add(arg1: string, arg2: string): string;
// function add(arg1: string, arg2: number): string;
// function add(arg1: number, arg2: number): number;
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2
// }
// console.log(add(1, 2));
// console.log('heelo');
// <--------------------------------------------------- Function Overloading -------------------------------------------------------------------->
// <--------------------------------------------------- Tuple -------------------------------------------------------------------->
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// let ourTuple: [number, boolean, string];
// ourTuple = [1, true, 'hello']
// console.log(ourTuple);
// <--------------------------------------------------- Tuple -------------------------------------------------------------------->
// <--------------------------------------------------- Function -------------------------------------------------------------------->
// <--------------------------------------------------- OOP -------------------------------------------------------------------->
// <--------------------------------------------------- Class -------------------------------------------------------------------->
// class Human {
//   name!: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// // let h1 = new Human('John');
// // console.log(h1.name);
// class Animal {
//   name: string;
//   age: string;
//   constructor(name: string, age: string) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(this.name, 'is a animal and it is eating');
//   }
// }
// let a1 = new Animal('Dog', '12');
// a1.eat();
// <--------------------------------------------------- Inheritance -------------------------------------------------------------------->
// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   move(meter: number = 0) {
//     console.log(`${ this.name } moved ${ meter } m.`);
//   }
// }
// class Snake extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(meter: number): void {
//     console.log('sliterring');
//     super.move(meter);
//   }
//   bite() {
//     console.log('bites');
//   }
// }
// class Horse extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(meter?: number): void {
//     super.move(meter);
//   }
// }
// class Donkey extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(meter?: number): void {
//     super.move(meter);
//   }
// }
// <--------------------------------------------------- Inheritance -------------------------------------------------------------------->
// <--------------------------------------------------- TYPES OF Inheritance -------------------------------------------------------------------->
//                                                      1. Single Inheritance
// Single inheritance occurs when a class inherits from exactly one superclass.This is the most basic form of inheritance where a subclass inherits from a single superclass.
// It allows for a hierarchical organization of classes, enabling code reuse and polymorphism.
// class Vehicle {
//   protected color: string;
//   constructor(color: string) {
//     this.color = color;
//   }
//   protected vehicle(color: string) {
//     this.color = color;
//   }
// }
// class Car extends Vehicle {
//   constructor(color: string) { super(color) }
//   get Color() {
//     return `Your Rools Ryce is ready in ${this.color} `
//   }
// }
// let c = new Car('black');
// console.log(c.Color);
//                                                      1. Single Inheritance
//                                                     2. Multilevel Inheritance
// Multilevel inheritance occurs when a class inherits from a class that itself inherits from another class.
//  This forms a chain of inheritance, allowing for deeper hierarchies and further code reuse.
// class GrandParent {
//   protected name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Parent extends GrandParent {
//   protected parentName: string;
//   constructor(name: string, parentName: string) {
//     super(name);
//     this.parentName = parentName;
//   }
// }
// class Child extends Parent {
//   protected childName: string;
//   constructor(name: string, parentName: string, childName: string) {
//     super(name, parentName);
//     this.childName = childName;
//   }
//   get familyName(): string {
//     return `Grand Parent Name:${this.name} Parent Name: ${this.parentName} Child Name: ${this.childName}`
//   }
// }
// let famileName = new Child('john', 'doe', 'king');
// console.log(famileName);
//                                                     2. Multilevel Inheritance
//                                                     3. Hierarchical Inheritance
// Hierarchical inheritance happens when multiple subclasses inherit from a single superclass.This allows for sharing common functionality among unrelated classes.
// class Fruit {
//   protected fruitName: string
//   constructor(fruitName: string) {
//     this.fruitName = fruitName;
//   }
// }
// class Apple extends Fruit {
//   constructor(fruitName: string) {
//     super(fruitName)
//   }
// }
// class Banana extends Fruit {
//   constructor(fruitName: string) {
//     super(fruitName)
//   }
//   get fruit(): string {
//     return this.fruitName;
//   }
// }
// let f1 = new Banana('banana');
// console.log(f1.fruit);
//                                                     3. Hierarchical Inheritance
//                                                     4. Hybrid Inheritance
// Hybrid inheritance combines two or more types of inheritance in a single class hierarchy.
//  For example, a class might inherit from one class and implement an interface, combining single inheritance with interface implementation.
// interface Flyable {
//   fly(): void;
// }
// class Bird implements Flyable {
//   fly(): void {
//     console.log("Flying...");
//   }
// }
// class Sparrow extends Bird {
//   // Inherits from Bird and implements Flyable implicitly
// }
//                                                     4. Hybrid Inheritance
//                                                     5. Delegation Inheritance
// Delegation inheritance is not a built-in feature of languages like Java or C#, but rather a design pattern where a class delegates responsibilities to another class.
//  This is achieved by composition rather than inheritance, allowing for flexible and modular designs.
// interface Delegate {
//   doSomething(): void;
// }
// class ConcreteDelegate implements Delegate {
//   doSomething(): void {
//     console.log("Doing something...");
//   }
// }
// class Delegator {
//   private delegate: Delegate;
//   constructor(delegate: Delegate) {
//     this.delegate = delegate;
//   }
//   doSomething(): void {
//     this.delegate.doSomething();
//   }
// }
//                                                     5. Delegation Inheritance
// <--------------------------------------------------- TYPES OF Inheritance -------------------------------------------------------------------->
// <--------------------------------------------------- Interface -------------------------------------------------------------------->
// Interfaces in TypeScript serve multiple purposes, primarily as a way to define contracts within your code and to enforce certain structures on objects. When you say "implement," in the context of interfaces, it means that a class agrees to adhere to the structure defined by the interface. This adherence ensures that instances of the class have a consistent shape, making the code easier to understand and maintain.
// Purpose of Interfaces
// Define Contracts: Interfaces define a blueprint of a class. They specify what methods and properties a class should have.
//  This is useful for enforcing a certain level of abstraction and ensuring that different parts of your application communicate consistently.
// Enforce Structure: By implementing an interface, a class guarantees that it will have certain methods or properties.
//  This is particularly useful in large applications where you might not know all the details of a class upfront.
// Code Organization and Maintenance: Interfaces help organize your code by providing clear expectations of how classes should behave.
//  They make your codebase easier to navigate and maintain.
// Extensibility: Interfaces can be extended to create new interfaces that inherit the signatures of the base interface(s) but add new ones. This allows for a flexible and extensible architecture.
// Implementing Interfaces
// When a class implements an interface, it must provide implementations for all the methods and properties defined in the interface. This is how TypeScript enforces the contract specified by the interface. If a class claims to implement an interface but does not provide implementations for all required members, TypeScript will raise a compile-time error.
// interface Drawable {
//   draw(): void;
// }
// class Circle implements Drawable {
//   draw(): void {
//     console.log("Drawing a circle");
//   }
// }
// class Square implements Drawable {
//   draw(): void {
//     console.log("Drawing a square");
//   }
// }
// <--------------------------------------------------- Interface -------------------------------------------------------------------->
// <--------------------------------------------------- Abstract Class -------------------------------------------------------------------->
// in abstract class this is not necessuary to define an abstract method an abstract class should be empty. in abstract which class extends abstract should have to
// define abstract method.
// abstract class Animal {
//   abstract makeSound(): void;
//   move(): void {
//     console.log('Moving along');
//   }
// }
// class Dog extends Animal {
//   makeSound(): void {
//     console.log('bark');
//   }
// }
// const dog = new Dog();
// dog.makeSound();
// <--------------------------------------------------- Abstract Class -------------------------------------------------------------------->
// <--------------------------------------------------- Encapsulation -------------------------------------------------------------------->
// Encapsulation is one of the fundamental concepts in object-oriented programming (OOP), including languages like JavaScript and TypeScript which you're familiar with as a Node.js expert. It refers to the bundling of data (attributes or properties) and methods that operate on that data into a single unit, or class, and restricting access to some of the object's components.
//  This concept is crucial for achieving data hiding, abstraction, and increased security in your codebase.
// class Bank {
//   private Balance: number;
//   constructor(initialBalance: number) {
//     this.Balance = initialBalance;
//   }
//   public deposit(amount: number): void {
//     this.Balance = this.Balance + amount;
//     console.log(`Deposited Amount: ${ amount } New Balance: ${ this.Balance } `);
//   }
//   public withDraw(amount: number): void {
//     this.Balance -= amount;
//     console.log(`With Draw Amount: ${ amount } and Balance is ${ this.Balance } `);
//   }
//   public getBalance(): number {
//     return this.Balance;
//   }
// }
// let acc1 = new Bank(1000);
// acc1.deposit(2000);
// console.log(acc1.getBalance());
// class Bank {
//   private balance: number;
//   constructor(balance: number) {
//     this.balance = balance;
//   }
//   set desposit(amount: number) {
//     this.balance += amount;
//   }
//   get withDraw(): string {
//     return `Amount With Draw ${this.balance}`
//   }
// }
// let b1 = new Bank(10);
// b1.desposit = 20;
// console.log(b1.withDraw);
// <--------------------------------------------------- Encapsulation -------------------------------------------------------------------->
// <--------------------------------------------------- Polymorphism -------------------------------------------------------------------->
// Polymorphism is another core concept in object-oriented programming (OOP), including TypeScript, which you're exploring alongside Next.js. It allows objects of different types to be treated as objects of a common type. Polymorphism enables developers to write more flexible and extensible code by allowing methods to act on various data types or classes that share a common interface.
// There are two main forms of polymorphism in TypeScript: compile-time polymorphism (static dispatch) and runtime polymorphism (dynamic dispatch).
// Compile-Time Polymorphism (Static Dispatch)
// Compile-time polymorphism occurs when the compiler determines which version of a method to call at compile time. This is achieved through method overloading and function overloading.
// Method Overloading: Method overloading allows a class to have multiple methods with the same name but different parameters. TypeScript supports method overloading but does so through function overloads rather than traditional class method overloads found in languages like Java.
// Function Overloading: Function overloading is supported in TypeScript, allowing you to declare multiple signatures for a function. The correct signature to use is determined at compile time based on the arguments provided.
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b;
//     } else {
//         return a.toString() + b.toString();
//     }
// }
// console.log(add(1, 2)); // Outputs: 3
// console.log(add("Hello", "World")); // Outputs: HelloWorld
// Runtime Polymorphism (Dynamic Dispatch)
// Runtime polymorphism happens when the decision of which method to call is made at runtime based on the actual type of the object. This is achieved through inheritance and interfaces.
// Inheritance: Inheritance allows a class to inherit properties and methods from another class. The subclass can then override the inherited methods to provide specific implementations.
// Interfaces: Interfaces define a contract for classes, specifying what methods a class should implement. Classes implementing an interface can provide their own implementations of the interface's methods,
//  leading to polymorphism.
// Example of Runtime Polymorphism:
// interface Drawable {
//     draw(): void;
// }
// class Circle implements Drawable {
//     draw() {
//         console.log("Drawing a circle");
//     }
// }
// class Square implements Drawable {
//     draw() {
//         console.log("Drawing a square");
//     }
// }
// function drawShape(shape: Drawable) {
//     shape.draw();
// }
// const shapes: Drawable[] = [new Circle(), new Square()];
// shapes.forEach(drawShape); // Outputs: Drawing a circle, Drawing a square
// In this example, both Circle and Square classes implement the Drawable interface, each providing their own draw method. The drawShape function accepts any object that implements the Drawable interface, demonstrating how runtime polymorphism allows us to treat different types uniformly.
// Understanding and leveraging polymorphism in TypeScript is essential for writing flexible, reusable, and efficient code, especially in large-scale applications like those you might build with Next.js.
// <--------------------------------------------------- Method Overriding -------------------------------------------------------------------->
// Method overriding is a feature in object-oriented programming (OOP) that allows a subclass or child class to provide a specific implementation
//  of a method that is already provided by its superclass or parent class.
//  This mechanism enables polymorphism, allowing objects of different classes to respond differently to the same method call, depending on their actual type at runtime.
// In TypeScript, which you're familiar with as a Node.js expert and are currently learning Next.js, method overriding works similarly to other OOP languages. When a subclass overrides a method from its superclass, the method in the subclass takes precedence when called on an instance of the subclass. This is particularly useful for extending functionality or changing the behavior of inherited methods.
// Basic Structure of Method Overriding in TypeScript
// To override a method in TypeScript, the subclass must declare a method with the same name as the one in the superclass. The method in the subclass must either have the same parameter list or a covariant (less restrictive) one. If the superclass method has no parameters, the subclass method can have any parameters.
// Example of Method Overriding in TypeScript
// Consider a simple example involving a Vehicle class and a Car class that inherits from Vehicle. We'll override the startEngine method in the Car class to provide a specific implementation.
// Superclass
// class Vehicle {
//     startEngine(): void {
//         console.log("The vehicle's engine starts.");
//     }
// }
// // Subclass
// class Car extends Vehicle {
//     startEngine(): void {
//         console.log("The car's engine starts with a soft hum.");
//     }
// }
// // Usage
// const myCar = new Car();
// myCar.startEngine(); // Outputs: The car's engine starts with a soft hum.
// <--------------------------------------------------- Method Overriding -------------------------------------------------------------------->
// <--------------------------------------------------- Polymorphism -------------------------------------------------------------------->
// <--------------------------------------------------- Class -------------------------------------------------------------------->
// <--------------------------------------------------- OOP -------------------------------------------------------------------->
// <----------------------------------------------- Random Question ----------------------------------------------------------------->
// print odd number 1000 to 1 skip 1 odd number after print 1 like 999 then skip 997 and so on with out using loop
// let printOddNumber = (num: number) => { ///1000 999
//   if (num < 1) { //1000<1 false
//     return 0;
//   }
//   if (num % 2 !== 0) { //999
//     console.log(num);
//     printOddNumber(num - 4); ///999-4 = 995
//   } else {
//     // console.log(num)
//     printOddNumber(num - 1); /// 1000-1 999
//   }
// };
// printOddNumber(1000);
// print odd number 1000 to 1 skip 1 odd number after print 1 like 999 then skip 997 and so on with out using loop
// swap two numbers with out using third variable
// let x = 10;
// let y = 19;
// y = x + y; //29
// x = y - x; //29 - 10 = 19
// y = y - x; // 28 -19 = 10;
// console.log(x,y)
// swap two numbers with out using third variable
// swap two strings with out using third variable
// let a = "Hello";
// let b = "World";
// [a, b] = [b, a];
// console.log(a);
// swap two strings with out using third variable
//<------------------------------------------- hoisting -------------------------------------------->
// a = 1;
// console.log(a);
// var a;
//Variables declared with var are fully hoisted, meaning they are initialized with undefined.
// This allows you to use them before they are declared in the code,
// although attempting to access them will result in an undefined value until the declaration is reached during execution.
// Variables declared with let and const are partially hoisted. They are hoisted to the top of their scope, but they are not initialized. Accessing them before their declaration results in a ReferenceError because trying to reference an uninitialized variable throws an error.
// helo();
// function helo() {
//   console.log('hello');
// }
//<------------------------------------------- hoisting -------------------------------------------->
//<------------------------------------------- Closure --------------------------------------------->
// Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.
// let Person = (pName: string): { getName: () => string } => {
//   let name = pName;
//   return {
//     getName: (): string => {
//       return name;
//     },
//   };
// };
// let person = Person('doe');
// console.log(person.getName());
//<------------------------------------------- Closure --------------------------------------------->
// function findDuplicates(inputString: string) {
//   let duplicates = '';
//   let seenCharacters: any = {};
//   // Iterate through each character in the input string
//   for (let char of inputString) {
//     // Check if the character has been seen before
//     if (seenCharacters[char]) {
//       // If yes, append it to the duplicates string
//       duplicates += char;
//     } else {
//       // If no, mark it as seen
//       seenCharacters[char] = true;
//     }
//   }
//   return duplicates;
// }
// // Test the function
// const inputString = "LEVELLE";
// const duplicates = findDuplicates(inputString);
// console.log(duplicates); // Output: "LE"
// function findDuplicate(inputString: string) {
//   let duplicates = ''
//   let seenCharacters: any = {}
//   for (let char of inputString) {
//     if (seenCharacters[char]) {
//       duplicates += char
//     }
//     else {
//       seenCharacters[char] = true
//     }
//   }
//   return duplicates;
// }
// console.log(findDuplicate('LEVELLE'));
// Question: Write a program to print a right-angled triangle pattern.
// for (let i = 0; i < 5; i++) {
//   let str = ''; //0
//   for (let j = 0; j < i; j++) {
//     //i=0
//     str += '*'; //str = ''+ '*'
//     //str = ''+ '**'
//   }
//   console.log(str);
// }
// Question: Write a program to print a right-angled triangle pattern.
// Question: Write a program to print a diamond shape.
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = '*';
//   let space = ' ';
//   console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
// }
// for (let i = n - 1; i >= 1; i--) {
//   let str = '*';
//   let space = ' ';
//   console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
// }
// Question: Write a program to print a diamond shape.
//finding the largest number in the array;
// let a = [10, 9, 8, 12, 123, 34];
// let max = a[0];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > max) {
//     max = a[i];
//   }
// }
// console.log(max);
//finding the largest number in the array;
// Reversing a String
// let str = 'hello';
// let reverseStr = '';
// for (let i = str.length-1; i > -1; i--) {  //5
//   reverseStr += str[i];
// }
// console.log(reverseStr);
// Reversing a String
// Program 5: Fibonacci Series
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// let fibseries = [0, 1];
// function Fibonacci(n: number) {
//   if (n <= 0) return [];
//   if (n == 1) return [0];
//   if (n == 2) return [0, 1];
//   for (let i = 2; i < n; i++) {
//     fibseries.push(fibseries[i - 2] + fibseries[i - 1]); //i-2 + i-1
//   }
// }
// Fibonacci(10);
// console.log(fibseries);
// Program 5: Fibonacci Series
// Program 6: Bubble Sort
// let nums = [64, 34, 25, 12, 22, 11, 90];
// let bubbleSort = (num: number[]): void => {
//   for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < num.length; j++) {
//       if (num[j] > num[j + 1]) {
//         // Correct swap operation
//         let temp = num[j + 1];
//         num[j + 1] = num[j];
//         num[j] = temp;
//       }
//     }
//   }
// };
// bubbleSort(nums);
// console.log(nums); // Expected output: [11, 12, 22, 25, 34, 64, 90]
// Program 6: Bubble Sort
// Question: Write a program to print a diamond shape.
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = '*';
//   let space = ' ';
//   console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
// }
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = '*';
//   let space = ' ';
//   console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
// }
// for (let i = n - 1; i > 0; i--) {
//   let str = '*';
//   let space = ' ';
//   console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
// }
// <----------------------------------------------- Random Question ----------------------------------------------------------------->
// <-----------------------------------------------  JOIN ------------------------------------------------------------------------>
// <----------------------------------------------- SQL JOIN ------------------------------------------------------------------------>
// A JOIN clause is used to combine rows from two or more tables, based on a related column between them.
// Let's look at a selection from the "Orders" table:
// OrderID	CustomerID	OrderDate
// 10308	2	1996 -09 - 18
// 10309	37	1996 -09 - 19
// 10310	77	1996 -09 - 20
// Then, look at a selection from the "Customers" table:
// CustomerID	CustomerName	ContactName	Country
// 1	Alfreds Futterkiste	Maria Anders	Germany
// 2	Ana Trujillo Emparedados y helados	Ana Trujillo	Mexico
// 3	Antonio Moreno Taquería	Antonio Moreno	Mexico
// Notice that the "CustomerID" column in the "Orders" table refers to the "CustomerID" in the "Customers" table.The relationship between the two tables above is the "CustomerID" column.
//   Then, we can create the following SQL statement(that contains an INNER JOIN), that selects records that have matching values in both tables:
// SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
// FROM Orders
// INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
// <----------------------------------------------- SQL JOIN ------------------------------------------------------------------------>
// <----------------------------------------------- LEFT JOIN ------------------------------------------------------------------------>
// SQL LEFT JOIN Keyword
// The LEFT JOIN keyword returns all records from the left table (table1), and the matching records from the right table (table2).
//  The result is 0 records from the right side, if there is no match.
// LEFT JOIN Syntax
// Demo Database
// In this tutorial we will use the well - known Northwind sample database.
// Below is a selection from the "Customers" table:
// CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country
// 1
// Alfreds Futterkiste	Maria Anders	Obere Str. 57	Berlin	12209	Germany
// 2	Ana Trujillo Emparedados y helados	Ana Trujillo	Avda.de la Constitución 2222	México D.F.	05021	Mexico
// 3	Antonio Moreno Taquería	Antonio Moreno	Mataderos 2312	México D.F.	05023	Mexico
// And a selection from the "Orders" table:
// OrderID	CustomerID	EmployeeID	OrderDate	ShipperID
// 10308	2	7	1996 -09 - 18	3
// 10309	37	3	1996 -09 - 19	1
// 10310	77	8	1996 -09 - 20	2
// SQL LEFT JOIN Example
// The following SQL statement will select all customers, and any orders they might have:
// ExampleGet your own SQL Server
// SELECT Customers.CustomerName, Orders.OrderID
// FROM Customers
// LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
// ORDER BY Customers.CustomerName;
// <----------------------------------------------- LEFT JOIN ------------------------------------------------------------------------>
// <----------------------------------------------- Right JOIN ------------------------------------------------------------------------>
// The RIGHT JOIN keyword returns all records from the right table (table2), and the matching records from the left table (table1).
//  The result is 0 records from the left side, if there is no match.
// Demo Database
// In this tutorial we will use the well - known Northwind sample database.
// Below is a selection from the "Orders" table:
// OrderID	CustomerID	EmployeeID	OrderDate	ShipperID
// 10308	2	7	1996 -09 - 18	3
// 10309	37	3	1996 -09 - 19	1
// 10310	77	8	1996 -09 - 20	2
// And a selection from the "Employees" table:
// EmployeeID	LastName	FirstName	BirthDate	Photo
// 1	Davolio	Nancy	12 / 8 / 1968	EmpID1.pic
// 2	Fuller	Andrew	2 / 19 / 1952	EmpID2.pic
// 3	Leverling	Janet	8 / 30 / 1963	EmpID3.pic
// SQL RIGHT JOIN Example
// The following SQL statement will return all employees, and any orders they might have placed:
// ExampleGet your own SQL Server
// SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
// FROM Orders
// RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
// ORDER BY Orders.OrderID;
// <----------------------------------------------- Right JOIN ------------------------------------------------------------------------>
// <----------------------------------------------- Full Outer JOIN ------------------------------------------------------------------------>
// SQL FULL OUTER JOIN Keyword
// The FULL OUTER JOIN keyword returns all records when there is a match in left (table1) or right (table2) table records.
// Tip: FULL OUTER JOIN and FULL JOIN are the same.
// Demo Database
// In this tutorial we will use the well-known Northwind sample database.
// Below is a selection from the "Customers" table:
// CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country
// 1
// Alfreds Futterkiste	Maria Anders	Obere Str. 57	Berlin	12209	Germany
// 2	Ana Trujillo Emparedados y helados	Ana Trujillo	Avda. de la Constitución 2222	México D.F.	05021	Mexico
// 3	Antonio Moreno Taquería	Antonio Moreno	Mataderos 2312	México D.F.	05023	Mexico
// And a selection from the "Orders" table:
// OrderID	CustomerID	EmployeeID	OrderDate	ShipperID
// 10308	2	7	1996-09-18	3
// 10309	37	3	1996-09-19	1
// 10310	77	8	1996-09-20	2
// ADVERTISEMENT
// SQL FULL OUTER JOIN Example
// The following SQL statement selects all customers, and all orders:
// SELECT Customers.CustomerName, Orders.OrderID
// FROM Customers
// FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
// ORDER BY Customers.CustomerName;
// <----------------------------------------------- Full Outer JOIN ------------------------------------------------------------------------>
//<------------------------------------------------ Normalization -------------------------------------------------------------------------->
// What is Normalization?
// Normalization is the process of organizing the data in the database.
// Normalization is used to minimize the redundancy from a relation or set of relations. It is also used to eliminate undesirable characteristics like Insertion, Update, and Deletion Anomalies.
// Normalization divides the larger table into smaller and links them using relationships.
// The normal form is used to reduce redundancy from the database table.
// Why do we need Normalization?
// The main reason for normalizing the relations is removing these anomalies. Failure to eliminate anomalies leads to data redundancy and can cause data integrity and other problems as the database grows. Normalization consists of a series of guidelines that helps to guide you in creating a good database structure.
// Pause
// Next
// Mute
// Current TimeÂ 
// 0:01
// /
// DurationÂ 
// 18:10
// Â 
// Fullscreen
// Data modification anomalies can be categorized into three types:
// Insertion Anomaly: Insertion Anomaly refers to when one cannot insert a new tuple into a relationship due to lack of data.
// Deletion Anomaly: The delete anomaly refers to the situation where the deletion of data results in the unintended loss of some other important data.
// Updatation Anomaly: The update anomaly is when an update of a single data value requires multiple rows of data to be updated.
// Types of Normal Forms:
// Normalization works through a series of stages called Normal forms. The normal forms apply to individual relations. The relation is said to be in particular normal form if it satisfies constraints.
// Following are the various types of Normal forms:
// DBMS Normalization
// Normal Form	Description
// 1NF	A relation is in 1NF if it contains an atomic value.
// 2NF	A relation will be in 2NF if it is in 1NF and all non-key attributes are fully functional dependent on the primary key.
// 3NF	A relation will be in 3NF if it is in 2NF and no transition dependency exists.
// BCNF	A stronger definition of 3NF is known as Boyce Codd's normal form.
// 4NF	A relation will be in 4NF if it is in Boyce Codd's normal form and has no multi-valued dependency.
// 5NF	A relation is in 5NF. If it is in 4NF and does not contain any join dependency, joining should be lossless.
//<------------------------------------------------ Normalization -------------------------------------------------------------------------->
// <-----------------------------------------------  JOIN ------------------------------------------------------------------------>
