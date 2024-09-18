import { colleagues, friends } from './01-basics'
import {Friend, Colleague, EmailContact } from './myTypes'

function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(arr_friends:Friend[]) {
    let arr: string[] = [] 
    for(var i = 0;i<arr_friends.length;i++) { 
       arr.push((older(friends[i])))
    }
    return arr;
}

function addColleague(arr: Colleague[],nm: string, dp: string, em: string) {
    const colleague = {
        name: nm,
        department: dp,
        contact: {
            email: em,
            extension: highestExtension(colleagues.current).contact.extension + 1,
      },
    };
    arr.push(colleague)
}

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

function sortColleagues(
colleagues: Colleague[],
sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
const sorted = colleagues.sort(sorter); // Colleague[] inferred
const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
return result 
}

function findFriends(friends: Friend[],callback: (friend: any) => any) {
    const result = friends.filter(callback)
    return result
}

// console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
// console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

// console.log(highestExtension(colleagues.current));
// console.log(allOlder(friends));
// addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
// console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));