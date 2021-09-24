package main

import "fmt"

func main() {
	//strings
	var myName string = "Jinso" // " " needed
	var myTwoName = "Raj"
	var myThreename string // empty string
	var myFourName = "test"
	fmt.Println(myName, myTwoName, myThreename, myFourName)

	myName = "Jinso updated." // updating val
	myThreename = "value added."
	anotherVar := "another method of init." // shorthand method. but only inside function.

	fmt.Println(myName, myThreename, anotherVar)


}
