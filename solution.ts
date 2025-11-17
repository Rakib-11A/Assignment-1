
const formatValue = <T>(value: T) => {
    if(typeof value === 'string'){
        return value.toUpperCase();
    }
    else if(typeof value === 'number'){
        return value * 10;
    }
    else return !value;
}


const getLength = <T>(value: T) => {
    if(typeof value === 'string' || Array.isArray(value))
        return value.length;
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}


const filterByRating = <T extends { rating: number}>(items: Array<T>): Array<T> => {
    return items.filter((item) => item.rating >= 4);
}


const filterActiveUsers = <T extends { isActive: boolean}>(users: T[]): T[] => {
    return users.filter(user => user.isActive);
}


const printBookDetails = (myBook: Book): void => {
    console.log(`Title: ${myBook.title}, Author: ${myBook.author}, Published: ${myBook.publishedYear}, Available: ${myBook.isAvailable ? "Yes" : "No"}`);
}
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}


const checFinalkUnique = (
    a: (number | string)[],
    b: (number | string)[]
): (number | string)[]  => {

    let c: (number | string)[] = [...a]
    for(let i = 0;i<b.length; i++){
        let flag = true;
        for(let j=0;j <a.length; j++){
            if(b[i] === a[j]){
                flag = false;
                break;
            }
        }
        const val = b[i];
        if(flag && val !== undefined) c.push(val);
    }
    return c;
}

const getUniqueElementInSinglArray = (
    a: (number | string)[]
): (number | string)[] => {
    let result: (number | string)[] = [];
    
    let l = 1;
    let r = a.length - 1;

    const val = a[0] as (number | string);
    result.push(val);
    
    while(l <= r){
        let flag = true;
        for(let i=0;i<result.length;i++){
            if(a[l] === result[i]){
                flag = false;
                break;
            }
        }
        const value = a[l];
        if(flag) result.push(value as (number | string));
        l++;
    }
    return result;
}
const getUniqueValues = (
    a: (number | string)[],
    b: (number | string)[]
): (number | string)[] => {
    
    const arr1 = getUniqueElementInSinglArray(a);
    const arr2 = getUniqueElementInSinglArray(b);
    const finalArray = checFinalkUnique(arr1,arr2);
    
    return finalArray;
    
}


const calculateTotalPrice = <T extends Product>(products: T[]): number => {
    return products.reduce((acc, product) => {
        
        const currentTotal = product.price * product.quantity;
        
        const currentDiscount = product.discount ? 
        (currentTotal * product.discount) / 100 : 0;

        const finalTotal = currentTotal - currentDiscount;
        return acc + finalTotal
    }, 0);
}
interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}