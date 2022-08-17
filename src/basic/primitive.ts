export default function primitiveSample() {
  const name = 'ぼんちっち'
  console.log('primitive sample1:', typeof name, name)

  const age = 28
  console.log('primitive sample2:', typeof age, age)

  const isSingle = false
  // isSingle = "Foo"
  console.log('primitive sample3:', typeof isSingle, isSingle)

  const isOver20: boolean = age >= 20
  console.log('primitive sample4:', typeof isOver20, isOver20)
}
