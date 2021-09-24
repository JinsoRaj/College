package main

import "fmt"

func main() {
	// for ~ while loop
	x := 0
	for x < 5 {
		fmt.Println("value of x:", x)
		x++
	}

	//for(){}
	for i := 0; i < 5; i++{
		fmt.Println("value of i:", i)
	}

	strArr := []string{"jr", "abc", "zebra", "clock", "bell"}
	for i := 0; i < len(strArr); i++{
		fmt.Println("value of i:", strArr[i])
	}

	//range ~ for-in
	for index, value := range strArr{
		fmt.Printf("the value at index %v is %v\n", index, value)		
	}
	// if we dont want index to use inside loop. then index not used error => so use underscore.
	for _, value := range strArr{              // ~ for value also
		fmt.Printf("the value is %v\n",value)
		value = "new string" // wont update the orgnl value (local copy)
		//strArr[index] = "first strng" // will update value
	}
	fmt.Println(strArr)
}