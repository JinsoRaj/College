secret_number = 9
guess_count = 0
guess_limit =3

while guess_count < guess_limit:
    guess = int(input("Guess: "))
    guess_count += 1
    if guess == secret_number:
        print("You won!")
        break
    else:
        print("wrong guess")
#else executed if while loop executed successfully without an immediate break.
else:
    print("You lose :(")
print("done")

# Guess: 4
# wrong guess
# Guess: 3
# wrong guess
# Guess: 1
# wrong guess
# You lose :(
# done

# Guess: 5
# wrong guess
# Guess: 9
# You won!
# done