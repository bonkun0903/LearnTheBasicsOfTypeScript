// アロー関数
export const logMessage = (message: string): void => {
  console.log('Function basic sample1:', message)
}

// 名前付き関数
export function logMessage2(message: string): void {
  console.log('Function basic sample2:', message)
}

// 関数式
export const logMessage3 = function (message: string): void {
  console.log('Function basic sample3:', message)
}

// アロー関数の省略記法
export const logMessage4 = (message: string): void => console.log('Function basic sample4:', message)

export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

// 呼び出しシグネチャ（省略記法）
// 引数と返り値に型を設定して型として定義できる
type LogMessage = (message: string) => void
// 関数を定義する際にシグネチャを渡してやることで型の定義を省略できる
export const logMessage5: LogMessage = (message) => {
  console.log('Function basic sample5:', message)
}

// 完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void
}

// 呼び出しシグネチャの省略記法
type FullLogMessage2 = (message: string) => void

// 完全な呼び出しシグネチャのジェネリクス型定義
type FullLogMessage3 = {
  <T>(message: T): void
}

export const logMessage6: FullLogMessage = (message) => {
  console.log('Function basic sample6:', message)
}
