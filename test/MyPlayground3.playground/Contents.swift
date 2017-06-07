//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

var values = [11, 4, 25, 16, 5]

let results = values.filter { (x:Int) -> Bool in
    if x < 10 {
        return true
    }
    return false
}

print(results)

let results2 = values.filter{$0 < 10}
print(results2)

let results3 = values.map{ (x:Int) -> Int in
return x * 2
}
print(results3)

let results4 = values.map{$0 * 2}
print(results4)

let total = values.reduce(0) { (nowTotal:Int, value:Int) -> Int in
    return nowTotal + value
}
print(total)

let total2 = values.reduce(0, {$0 + $1})
print(total2)

let sortedValues = values.sorted()
print(sortedValues)

values.sort{ (value1:Int, value2:Int) -> Bool in
    value1 < value2
}

values.sort{$0 < $1}

for value in 0..<9 where value != 3 {
    print("index\(value)")
}

var value = "りんご"
switch value {
case let x where x.hasPrefix("み"):
        print("みかんです")
case let y where y.hasPrefix("り"):
    print ("りんごです")
default:
    print("どちらでもない")
    
}

enum Fluit {
    case Apple, Orange
}

let fluits :[Fluit] = [.Apple, .Orange, .Apple, .Apple]

for case .Apple in fluits {
    print("Appleです")
}



