str = 'Python for Beginners'

print(len(str)) # 0 to 19 = 20 chars

##########
#dot operator  objects -> methods
print(str.upper()) # return new string  PYTHON FOR BEGINNERS

print(str.find('P')) # return first occurrence of char  0
print(str.find('p')) # not found(case sensitive)  -1
print(str.find('Beginners')) # 11

print(str.replace('Beginners', 'Absolute Beginners')) # Python for Absolute Beginners
print(str.replace('beginners', 'Absolute Beginners')) # if no match, no replace  Python for Beginners

# .lower() .title()
##########

#check existence/sequence of chars -> in operator

'Python' in str   # bool
# .find() returns index,  in return bool value.
print('Python' in str)  #True
print('python' in str)  #False

#48:36