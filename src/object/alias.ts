export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }

  console.log(japan)

  const america: Country = {
    capital: 'Washinton, D.C.',
    language: 'English',
    name: 'United states of America',
  }

  console.log(america)
  // 合併型(union)と交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型... KnightまたはWizardの型を持ちます
  type Adventurer = Knight | Wizard

  // 交差型... KnightかつWizardの型を持ちます
  type Paladin = Knight & Wizard

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連切り',
  }

  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイヤボール',
  }

  console.log('Object alias sample3:', adventurer1)
  console.log('Object alias sample4:', adventurer2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '三連切り',
    magicSkill: 'ファイヤボール',
  }

  console.log('Object alias sample5:', paladin)
}
