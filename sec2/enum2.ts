// 列挙値に任意の数値を割り当てる
enum Weekday {
  Monday    = 1,
  Tuesday   = 2,
  Wednesday = 4,
  Thursday  = 8,
  Friday    = 16,
  Saturday  = 32,
  Sunday    = 64,
}

const day: Weekday = Weekday.Sunday;
console.log(day); // 64