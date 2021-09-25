package main

import "fmt"

func updateName(x *string){
	*x = "changed?"
}


func main(){
	
	// Group A
	name := "jinso" 
	
	fmt.Println("memory adrs of name is:", &name)

	m := &name // m have an adrs but it stores adrs of name
	fmt.Println("mem adrs", m) // &name and m values are same @ output
	fmt.Println("val at mem adrs:", *m) // jinso -> get value of adrs stored in ptr

	fmt.Println(name) // before

	updateName(m)

	fmt.Println(name) // after -> changed (non-ptr method changed to ptr method)

}