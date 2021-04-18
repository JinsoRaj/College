#!/bin/bash
# Author : Jinso Raj | S5 32
# Add all arguments

if [ $# -gt 0 ]
then
	echo "Your command line contains $# arguments"
	sum=0
	for arg in $@
	do
		sum=`expr $sum + $arg`
	done
	echo "SUM is: $sum"

else
	echo "No arguments.PLEASE type arguments after $0"
fi
