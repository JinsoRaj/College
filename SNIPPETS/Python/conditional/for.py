for item in 'Python':
    print(item)
# P
# y
# t
# h
# o
# n

for item in ['Jinso', 'Raj', 'Ktr']:
    print(item)
# Jinso
# Raj
# Ktr

for item in [1, 2, 3, 4]:
    print(item)
# 1
# 2
# 3
# 4

# range(4)   0 to 3

for item in range(5, 10):   # 5 to 9 (start, end+1, step)
    print(item)

prices = [10, 20, 30]
total = 0
for price in prices:
    total += price
print(f"Total: {total}")  # Total: 60