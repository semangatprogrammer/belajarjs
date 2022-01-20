let siswas = ['Zua', 'Monica', 'Brac', 'Finn', 'Andi']
siswas.sort() // mengerutkan element siswas
console.log(siswas.sort())

let numbers = [9, 15, 10, 19, 11, 2]
let a = numbers.sort((i, j) => {
  return 1 - Math.random()
})
console.log(a)

console.log(siswas.sort()) //mengurutkan element siswas
console.log(siswas.reverse()) //membalikkan urutan element

let point = [9, 15, 10, 19, 11, 2]
let b = point.sort((i, j) => {
  return i - j
})
console.log(b.sort())

point.unshift(3, 4, 5)
console.log(point)
