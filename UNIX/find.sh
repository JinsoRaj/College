#!/bin/bash
# Author : Jinso Raj | S5 32
# delete all subfolders of size 0.

cd $1
find $NAME -empty -delete

# checking -empty folder instead of size 0. -s $file OR find -size 0 can't recognize empty folders(4.0 kb -metadata).
