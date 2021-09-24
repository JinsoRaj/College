package main

import (
	"fmt"
	"math"
)

func sayGreeting(n string){
	fmt.Printf("Hello %v\n", n)
}

func sayBye(n string){
	fmt.Printf("Bye %v\n", n)
}

func cycleNames(n []string, f func(string)){
	for _, val := range n{
		f(val)
	}
}

func circleArea(r float64) float64 {   //type of retn val after ()
	return math.Pi * r * r
}

func main() {
	sayGreeting("Jinso")
	sayBye("Jinso")
	names := []string{"jinso", "abin", "zebra", "clock", "book"}

	cycleNames(names, sayGreeting)        // or
	cycleNames([]string{"jr", "hm", "kk"}, sayBye)

	a1 := circleArea(3.5)
	fmt.Printf("area is %0.2f \n", a1) // area is 38.48 

}