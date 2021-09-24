package main

import (
	"fmt"
	"strings"
)

//multiple return values () ()
func getInitials(n string) (string, string) {  // 2 strg return vals
	s := strings.ToUpper(n)
	names := strings.Split(s, " ")

	var initials []string
	for _, v := range names{
		initials = append(initials, v[:1])
	}

	if len(initials) > 1{
		return initials[0], initials[1]
	}

	return initials[0], "_"

}

func main() {
	one1, two1 := getInitials("jinso raj")
	fmt.Println(one1, two1) // J R

	one2, two2 := getInitials("a4d4m")
	fmt.Println(one2, two2)  // A _
}