// pass by value language
//makes copies of values when passed to Fns.

// [NON-POINTER VALUES] Group A -> Strings Ints Floats Booleans Arrays Structs
// [POINTER WRAPPER VALUES] Group B -> Slices Maps Functions

package main

import "fmt"

func updateName(x string){
	x = "wedge"
}

func updateMenu(y map[string]float64) {
	y["pie"] = 2.57
}

func main(){
	
	// Group A
	name := "jinso" 
	updateName(name)
	fmt.Println(name) // will not  update
	// inorder to update get a return value of type string from func & store it on calling

	// Group B
	menu := map[string]float64 { 
		"soup": 4.99,
		"pie": 7.99,
		"salad": 6.99,
	}
	
	updateMenu(menu) // updated , also same meod can add more key-vals
	fmt.Println(menu)

}