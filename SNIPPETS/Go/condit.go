package main

import "fmt"

func main() {
	num := 45
	fmt.Println(num < 50)    // true
	fmt.Println(num == 30) // false

	if num > 50 {
		fmt.Println("grt than 50")
	} else if num > 40 {            // else if executed
		fmt.Println("grtr than 40")
	} else{
		fmt.Println("nothing")
	}

	names := []string{"jr", "abc", "zebra", "clock", "bell"}

	for index, value := range names {
		if index == 1 {
			fmt.Println("continuing at pos", index)
			continue
		}
		if index > 2 {
			fmt.Println("breaking at", index)
			break
		}
		
		fmt.Printf("the value of %v is %v \n", index, value)

	}

}