import { randomInt } from 'node:crypto'

export const pswd = (lenght: number) => {
  if (lenght <= 0)
    throw new Error('length is less than 0 or equal')

  const alpabet =
    '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя'

  let password = ''

  for (let i = 0; i < lenght; i++) {
    password += alpabet[randomInt(alpabet.length)]
  }

  return password
}
