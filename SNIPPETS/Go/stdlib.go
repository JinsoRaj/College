//  https://pkg.go.dev/std

package main

import (
	"fmt"
	"sort"
	"strings"
)

func main() {

	// strings package [WILL NOT UPDATE ORGINAL STRING]
	greeting := "hello there friends !"
	fmt.Println(strings.Contains(greeting, "hello")) // true
	fmt.Println(strings.ReplaceAll(greeting, "hello", "hii")) // returns a new string. WILL NOT UPDATE OLD STRING
	// must save to new var to get updated value
	fmt.Println(strings.ToUpper(greeting)) 
	fmt.Println(strings.Index(greeting, "ll")) // 2
	fmt.Println(strings.Index(greeting, "e")) // 1  -> first index of match
	fmt.Println(strings.Split(greeting, " ")) // [hello there friends !]
	fmt.Println(strings.Split(greeting, "")) // [h e l l o   t h e r e   f r i e n d s   !] -> each letter and space is seprtd

/////////////////////////////////////////////

	// sort package [WILL UPDATE ORGINAL INPUT (for slices)]
	ages := []int{45, 20, 3, 12, 43, 98,29, 1}
	sort.Ints(ages) // updated
	fmt.Println(ages) // [1 3 12 20 29 43 45 98]

	//For SearchInts -. The slice must be sorted in ascending order.
	index := sort.SearchInts(ages, 20) //existig value
	fmt.Println(index) // 3 
	fmt.Println(ages)
	nonIndex := sort.SearchInts(ages, 4) //non-existig value
	fmt.Println(nonIndex) // 7 -> value is the index to insert 4

	//For SearchStrings - slice must be sorted
	strArr := []string{"jr", "abc", "zebra", "clock", "bell"}
	sort.Strings(strArr)
	fmt.Println(strArr) // [abc bell clock jr zebra]
	fmt.Println(sort.SearchStrings(strArr, "jr")) // 3

			//for ARRAY sort use [:]
			agesArr := [4]int{45, 20, 3, 12}
			sort.Ints(agesArr[:]) // updated. sort.Ints(agesArr) is wrong . need [:]
			fmt.Println(agesArr) //[3 12 20 45]
			
			indexArr := sort.SearchInts(agesArr[:], 20) //existig value. need [:]. for non-existing value return index to fit value.
			fmt.Println(indexArr) // 2 
			fmt.Println(agesArr)

}


