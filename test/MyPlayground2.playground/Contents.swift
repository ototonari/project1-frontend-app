//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"
var flag = 1

switch flag {
case 0:
    print("good")
case 1:
    print("better")
case 2...5:
    print("perfect!")
case 6..<10:
    print("owesome!")
default:
    print("none")
}

enum Fluit {
    case Apple
    case Orange
}

let flu = Fluit.Apple
switch flu {
case .Apple:
    print("Apple")
case .Orange:
    print("orange")
}

