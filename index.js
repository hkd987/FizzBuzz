// FIZZBUZZ

const fizzle = () => {
  const output = []
  for (let i = 1; i < 101; i++) {
    let holder = ''
    if (i % 3 === 0) holder += 'Fizz'
    if (i % 5 === 0) holder += 'Buzz'
    if (holder === '') holder += i
    output.push(holder)
    holder = ''
  }
  return output
}

console.log(fizzle())


module.exports = fizzle
