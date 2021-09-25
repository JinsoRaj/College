// first
//linked to pkgscp.go

package main

import "fmt"

var scr = 99.5  // cant declare inside main. only root-level

func main() {
	fmt.Println("Hello, Jinso")
	sayHello("jr")

	for _, v := range points {
		fmt.Println(v)
	}
	showScore()
}
