export default function genericsAdvancedSample() {
  // map関数のシグネチャ
  // ※配列と関数を渡すシグネチャをジェネリクス型で定義している
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  // 受け取った文字列型の配列を
  const numbers = mapStringsToNumbers(['123', '456', '789'], (item) => Number(item))
  // const numbers2 = mapStringsToNumbers([123,456,789], (item) => String(item))
  console.log('Generics advanced sample 1:', numbers)
}
