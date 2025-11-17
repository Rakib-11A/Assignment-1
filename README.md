Question 4: What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Answer:
Enum are use to stored set of fixed string leteral in a signle place. We can use it as type as well as value.

example: Numeric Enum

enum UserRoles {
Admin = 1,
Editor = 2,
Guest = 3
}

console.log(UserRoles.Amdin) // 1
console.log(UserRoles.Guest) // 3

expample: String Enum

enum UserRoles {
Admin = "ADMIN",
Editor = "EDITOR",
Guest = "GUEST"
}

const canEdit(role: UserRoles){
if(role === UserRoles.Admin || role === UserRoles.Editor){
console.log("Yes, you can edit");
}else{
console.log("You can't be able to edit");
}

}

Question 5: Provide an example of using union and intersection types in TypeScript.

Answer:

ইউনিয়ন টাইপঃ
ইউনিয়ন টাইপ হল এমন একধরনের টাইপ যা এক বা একাধিক টাইপের যেকোনো একটি মান নিতে পারে।
ইউনিয়ন টাইপে | চিহ্ন ব্যবহার করা হয়।

উদাহরণঃ
let userId: string | number;
userId = "101";
userId = 101;

ইন্টারসেকশন টাইপঃ
ইন্টারসেকশন টাইপ হল এমন একটি টাইপ যা একাধিক টাইপের সব বৈশিষ্ট্য একসাথে নেয়।
ইন্টারসেকশন টাইপে & চিহ্ন ব্যবহার করা হয়।

উদাহরনঃ
type Person = {
name: string;
age: number;
}

type Info = {
email: string;
phone: string;
}

type Employee = Person & Info;

const rakib: Employee = {
name: "Rakib Hasan",
age: 26,
email: 'rakibhasa@example.com',
phone: '01234567899'
}
