export default function objectSample() {
  const a: object = {
    name: 'bonkun',
    age: 27,
  }
  // a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1:', country)
  country = {
    language: 'English',
    name: 'United states of America',
  }
  console.log('Object object sample 2:', country)

  // オプショナルとreadonly
  const bonkun: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 27,
    lastName: 'Okazaki',
    firstName: 'Hiornobu',
  }

  bonkun.gender = 'male'
  bonkun.lastName = 'Kamado'
  // bonkun.firstName = 'Tanjiro'

  console.log('Object object sample 3:', bonkun)

  // インデックスシグネチャ
  // 複数のKey:valueの組み合わせが入る可能性がある場合に使う
  // keyにも型をしているすることができる
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijin'
  capitals.Canada = 'Ottawa'
  console.log('Object object sample 4:', capitals)
}
