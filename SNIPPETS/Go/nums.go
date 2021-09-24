package main

import "fmt"

func main() {
	//integers int,float
	var ageOne int = 21
	var ageTwo = 22
	ageThree := 23
	fmt.Println(ageOne, ageTwo, ageThree)

	//bits & memory
	var newAge int8 = 50 // int8 -128 to 127
	var numTwo int8 = -128
	var numThree uint = 12 // only +ve vals. uint8(0 -> 255), uint16, unint32... 

	//float -> must specify bit size float32 float64
	var scoreOne float32 = 1.8
	var scoreTwo float64 = 398164994.74 //used most
	anotherFloat := 4.7 //default as float64
	fmt.Println(newAge, numTwo, numThree, scoreOne, scoreTwo, anotherFloat)
}

//  https://golang.org/ref/spec#Numeric_types
//stdlib bits:  https://pkg.go.dev/std