// maps  ~obj in js / dict in py, key(any type)-value pairs

package main

import "fmt"

func main() {
	menu := map[string]float64 {  //   format -> map[typeofKey]typeofValue
		"soup": 4.99,
		"pie": 7.99,
		"salad": 6.99,
		"toffee pudding": 3.55,   // need , at end also
	}
	fmt.Println(menu) // map[pie:7.99 salad:6.99 soup:4.99 toffee pudding:3.55]
	fmt.Println(menu["pie"]) // 7.99   key in string so ""

	// looping maps
	for k, v := range menu{
		fmt.Println(k, "-->", v)
	}
	// soup --> 4.99
	// pie --> 7.99
	// salad --> 6.99
	// toffee pudding --> 3.55

	//int as key type
	phoneBook := map[int]string{
		243647: "jr",
		539211: "jeenu",
		138932: "a4d4m",
	}
	fmt.Println(phoneBook)  // map[138932:a4d4m 243647:jr 539211:jeenu]
	fmt.Println(phoneBook[243647])  // jr

	//update value inside map
	phoneBook[539211] = "new string"  // updated

}