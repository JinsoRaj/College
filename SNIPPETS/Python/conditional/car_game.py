command = ""
is_started = False

while True:
    command = input(":>").lower()
    if command == 'start':
        if is_started:
            print("Car is already started.")
        else:
            print("Car started.")
            is_started = True
    elif command == 'stop':
        if not is_started:
            print("Car already stopped.")
        else:
            print("Car stopped.")
            is_started = False
    elif command == 'help':
        print("""
start - to start game
stop - to stop game
help - to see this msg
quit - to exit game
        """)
    elif command == 'quit':
        print('bye..')
        break
    else:
        print('Ehh.. what?')