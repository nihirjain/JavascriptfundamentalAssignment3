let UserMap = new Map();

function useradd(name,age,email){
    UserInfo = {age,email};
    UserMap.set(name,UserInfo);
}

// updation
function update(name,age,email){
    if(UserMap.has(name)){
        UserInfo = UserMap.get(name);
        UserInfo.age = age;
        UserInfo.email = email;
    }
}
// deletation 

function todelete(name){
    UserMap.delete(name)
}

useradd("john",17,"John@gmail.com")
// console.log(UserMap)
console.log(UserMap)
