export default function tupleSample() {
  // 一般的なタプル型の型定義
  const response: [number, string] = [200, 'OK']
  // response = [400, "BadRequest", "Email parameter is missing"]
  // response = ["400","BadRequest"]
  console.log('Array tuple sample 1:', response)

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['Kana', 'Keiko', 'Misa']
  console.log('Array tuple sample 2:', girlfriends)
}
