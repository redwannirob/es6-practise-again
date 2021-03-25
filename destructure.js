const person = { name: 'Jack William', age: 17, job: 'Facebooker', address: 'Khilkhet', phone: 432987563758, gf: 'EMMA WATSON',};
const {phone,gf} = person;
// // console.log(phone,gf);

const complexObject = {
    name: 'abc',
    info:{
        address:'kola bagan',
        leader: 'Tiger Leader'
    }
}

const {leader} = complexObject.info;
console.log(leader);


const friends =["Sakib Khan", "Arman Khan", "Amir Khan", "Salman Khan", "Shahrukh Khan"]; 
const [chotoFriend, nextFriend, ...restFriends] = friends;
// console.log(restFriends);