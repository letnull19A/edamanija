// import { randomInt } from 'node:crypto'
// import data from './data.json'

// type Age = {
//   min: number
//   max: number
// }

// /**
//  * @param n - вероятность спавна мужского пола
//  * @param a - вероятность спавная без фамилий
//  * @param z - минимальный и максимальный порог возраста
//  */
// export const usrgen = (n: number, a: number, z: Age) => {
//   const gender = randomInt(n) > 50 ? 'male' : 'female'

//   const nameLength = data[gender].names.length
//   const surnameLength = data[gender].surnames.length
//   const fatherNameLength = data[gender].fatherNames.length

//   const withoutFatherName = randomInt(a) > 50

//   const age = randomInt(z.max) - z.min

//   const name = data[gender].names[randomInt(nameLength)]
//   const surname = data[gender].surnames[randomInt(surnameLength)]
//   const fatherName = withoutFatherName
//     ? null
//     : data[gender].fatherNames[randomInt(fatherNameLength)]

//   const user = {
//     name: name,
//     surname: surname,
//     fatherName: fatherName,
//     age: age,
//   }

//   return user
// }
