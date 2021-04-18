#!/bin/bash
echo "Path:"
read _PATH
echo "Filename:"
read _FILE
echo "Search string:"
read _TEXT
cat "$_PATH/$_FILE" | grep $_TEXT
