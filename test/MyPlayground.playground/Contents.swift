//: Playground - noun: a place where people can play

import UIKit



func myFunc(value: Int) -> Int {
    var resultValue: Int = 0
    resultValue += value
    return resultValue
}

myFunc(value: 100)

func showTestScore(mathematicsTestScore score: Int) -> String {
    return "数学の点数は\(score)点"
}

showTestScore(mathematicsTestScore: 100)

enum MyError: Error {
    case InvalidValue
}


func doubleUp(value: Int) throws -> Int {
    if value < 0 {
        throw MyError.InvalidValue
    }
    return value * 2
}

do {
    var doubleResultValue = try doubleUp(value: 100)
    print("正常終了")
    
} catch MyError.InvalidValue {
    print("エラー発生")
}

func longMethod() throws {
    var value: Int = 5 * 5
}

do {
    defer {
        print("処理終了時間: \(Date())")
    }
    print("処理開始時間: \(Date())")
    try longMethod()
} catch {
    print("エラー処理")
}

var radio = UISwitch()
radio.isOn = true

radio.setOn(false, animated: true)

class Dog {
    var name = "" // 名前
    var type = "" // 種類
    var birthday = ""
    
    // 吠えるメソッド
    func bark() {
        print("わんわん")
    }
}

class GuideDog: Dog {
    override func bark() {
        
        super.bark()
    }
}

var dog = Dog()
dog.bark()

var guideDog = GuideDog()
guideDog.bark()

struct MyStruct {
    var value: String?
    func method(value: Int) -> Int {
        let resultValue: Int = 0
        
        return resultValue
    }
}

enum Fluit {
    case Apple
    case Orange
}


func requestMinAndMax() -> (min: Int, max: Int){
    
    return(1, 100)
}

let minAndMax = requestMinAndMax()
let minValue = minAndMax.min
let maxValue = minAndMax.max

for i in 0...9 {
    print("index: \(i)")
}

let values = ["apple", "gorrila", "monkey"];
for value in values{
    print(value)
}

for i in 0..<9 {
    print(i)
}

for _ in 0..<3 {
    print ("gaa!")
}

for (index, value) in values.enumerated() {
    print("\(index) : \(value)")
}

let value = 5
if value < 10 {
    print("valueが１０より小さいです")
} else {
    print("valueが１０より大きです")
}

var count = 1
var result = 0
while count <= 10{
    result += count
    count += 1
}
print("合計は\(result)")

print("SwiftのGuard構文は早期リターンを行うのに役立つ！")

func buyItem(myMoney :Int?) {
    guard let money = myMoney else {
        return
    }
    
    print("所持金\(money)円で商品を購入します")
}

buyItem(myMoney: 1000)



