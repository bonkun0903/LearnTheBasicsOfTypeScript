interface Bread {
  calories: number
}

// 同名のinterfaceを作ると定義がマージされる
interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 300,
  type: 'hard',
}

// 型エイリアスで表現
type MaboDofu = {
  calories: number
  spicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = MaboDofu & Rice //交差型（union）

const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
}

// インターフェースの継承
interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'month' | 'yearly'
}

export const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
}

// 型エイリアスの拡張
type BookType = {
  page: number
  title: string
}

interface HandBook extends BookType {
  theme: string
}

const cotrip: HandBook = {
  page: 120,
  title: 'ことりっぷ',
  theme: '旅行',
}

// inplementsを使ってclassに型を定義する
class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page
    this.title = title
  }

  getPublishYear() {
    return this.title + 'が発売されたのは' + this.publishYear + '年です。'
  }
}

const populerComic = new Comic(200, '鬼滅の刃', '2016')

console.log(populerComic.getPublishYear())
