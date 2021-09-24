package main

import "fmt"
func main() {

	//arrays
	// var ages [3]int = [3]int{12, 4, 6} //correct
	var newAges = [3]int{12, 4, 6}
	fmt.Println(newAges, len(newAges)) // [12 4 6] 3

	var testArr = [3]int{71, 9} // 3rd item will default to 0.	
	fmt.Println(testArr, len(testArr)) // [71 9 0] 3

	names := [4]string{"Jinso", "Raj", "Vilangara", "Ktr"}
	names[1] = "changed" // array value can be changed
	// but cannot append items to array (fixed length)
	fmt.Println(names, len(names)) // [Jinso Raj Vilangara Ktr] 4


	// slices -> use arrays under the hood...
	var scores = []int{100, 20, 6, 73} //slices
	scores[2] = 96 // can change value of slice also
	// also can append items to slice. but not to array 
	scores = append(scores, 85) // appends to end. not updating. just returns a new updated slice. must stored to get updated value
	fmt.Println(scores, len(scores)) 

	// slice ranges -> get a range from array of slice and store thm in a new slice
	rangeOne := names[1:3] // 1 to 2. not 3 
	rangeTwo := names[2:] // 2 to end , ~[:3]-> 0 to 2
	fmt.Println(rangeOne) // [changed Vilangara]
	fmt.Println(rangeTwo) // [Vilangara Ktr]

	// rangeOne.. ranges can be appended with new items.
	// rangeOne = append(rangeOne, "new val")

	// length of arrays cannot change
	// length of slices can change.
}
