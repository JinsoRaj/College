#!/bin/bash
# Author : Jinso Raj | S5 32
# Add all arguments gt 5

if [ $# -gt 0 ]
then
	echo "Your command line contains $# arguments"
	sum=0
	for arg in $@
	do
		if [ $arg -gt 5 ]
		then
			sum=`expr $sum + $arg`
		fi
	done
	echo "SUM is: $sum"

else
	echo "No arguments.PLEASE type arguments after $0"
fi
