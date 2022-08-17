type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

// 駒の位置を表すクラス
class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  // パラメーターに渡された位置と現在の位置を比較するメソッド
  distanceFrom(position: Position, player: Player) {
    if (player === 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      }
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)), // 段（縦の位置）は正負反転
      }
    }
  }
}

// 駒を表すクラス(抽象クラス)
abstract class Piece {
  // Pieceクラスとサブクラスからアクセス可能
  protected position: Position

  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan)
  }

  // メソッドの定義
  moveTo(position: Position) {
    this.position = position
  }

  // 移動できるかどうかを判定するメソッド(真偽値を返す)
  // ※処理はそれぞれの駒クラス（サブクラス）で実装する
  abstract canMoveTo(position: Position, player: Player): boolean
}

// 王将
class Osho extends Piece {
  // 王将のcanMoveToメソッドを具体的に実装する
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return distance.suji < 2 && distance.dan < 2
  }
}

// 歩
class Fu extends Piece {
  // 王将のcanMoveToメソッドを具体的に実装する
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    // 移動先と距離が前方一マスであれば
    return distance.suji === 0 && distance.dan === 1
  }
}

// 成金
class Narikin extends Fu {
  // 王将のcanMoveToメソッドを具体的に実装する
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return (
      // 移動先が1マス以内
      distance.suji < 2 &&
      distance.dan < 2 &&
      // 左後方と右後方には進めない
      distance.suji !== 0 &&
      distance.dan === -1
    )
  }
}

class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [new Osho('first', 5, '1'), new Osho('second', 5, '9')]
  }
}
