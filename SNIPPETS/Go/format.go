// fmt -> format and console
package main

import "fmt"
func main() {
	name := "Jinso"
	age := 21
	//print
	fmt.Print("hello, ")
	fmt.Print("world \n") // hello, world -> same line
	
	fmt.Println("My age is:", age, "and my name is:", name)

	//formated strings
	//  Printf (formated strings) 
	//  %v -> default variable format

	fmt.Printf("my name is %v & age is %v \n", name, age)
	fmt.Printf("my name is %q & age is %q \n", name, age) // my name is "Jinso" & age is '\x15' or '#'(age not string, quotes only for strings)
	fmt.Printf("age is of type %T \n", age) // %T get type of var
	fmt.Printf("you scored %f points \n", 235.55) // you scored 235.550000 points
	fmt.Printf("you scored %0.1f%% points \n", 235.55) // you scored 235.6 points -> rounded to 1 dec.point
	
	// Sprintf (save formated strings)
	var str = fmt.Sprintf("my name is %v & age is %v \n", name, age)
	fmt.Println("the saved string is:", str)
}