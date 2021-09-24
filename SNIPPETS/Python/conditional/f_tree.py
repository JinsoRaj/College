#   xxxxx
#   xx
#   xxxxx
#   xx
#   xx

# cheat
numbers = [5, 2, 5, 2, 2]
for x in numbers:
    print(x*'x')

# loop
numbers = [5, 2, 5, 2, 2]
for x_count in numbers:
    output = ''
    for count in range(x_count):
        output += 'x'
    print(output)

#   xx
#   xx
#   xx
#   xxxxxxx

numbers = [2, 2, 2, 7]
for x_count in numbers:
    output = ''
    for count in range(x_count):
        output += 'x'
    print(output)
