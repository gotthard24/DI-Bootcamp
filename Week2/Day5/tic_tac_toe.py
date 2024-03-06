import msvcrt
import sys

def draw_map(game_map, map_size):
    for i in range(len(game_map)):
        for j in range(map_size):
            print(game_map[i][j], end="")
        print()
        
        
def get_key_press():
    while True:
        key = msvcrt.getch()
        if key == b'w' or key == b'W' or key == b'\xe0H':
            return 'Up'
        elif key == b's' or key == b'S' or key == b'\xe0P':
            return 'Down'
        elif key == b'a' or key == b'A' or key == b'\xe0K':
            return 'Left'
        elif key == b'd' or key == b'D' or key == b'\xe0M':
            return 'Right'
        elif key == b'\r':
            return True
        elif key == b'\x1b':
            return False
        
        
def move_cursor_up(lines):
    sys.stdout.write("\x1b[%dA" % lines)
    sys.stdout.flush()    
def move_cursor_down(lines):
    sys.stdout.write("\x1b[%dB" % lines)
    sys.stdout.flush()        
def move_cursor_left(chars):
    sys.stdout.write("\x1b[%dD" % chars)
    sys.stdout.flush()      
def move_cursor_right(chars):
    sys.stdout.write("\x1b[%dC" % chars)
    sys.stdout.flush()


def draw_existing(positions):
    for i in range(len(positions)):
        position = positions[i]
        draw_x(position[0], position[1])


def draw_x(y, x, color = '\033[0m'):
    position = [y, x]
    
    if position == [0,0]:
        move_cursor_up(7)
        move_cursor_right(3)
        sys.stdout.write(color + '\bX\b' + '\033[0m') 
        sys.stdout.flush()
        move_cursor_down(7)
        move_cursor_left(3)
    if position == [0,1]:
        move_cursor_up(7)
        move_cursor_right(9)
        sys.stdout.write(color + '\bX\b' + '\033[0m') 
        sys.stdout.flush()
        move_cursor_down(7)
        move_cursor_left(9)
    if position == [0,2]:
        move_cursor_up(7)
        move_cursor_right(14)
        sys.stdout.write(color + '\bX\b' + '\033[0m') 
        sys.stdout.flush()
        move_cursor_down(7)
        move_cursor_left(14)
    if position == [1,0]:
        move_cursor_up(5)
        move_cursor_right(3)
        sys.stdout.write(color + '\bX\b' + '\033[0m') 
        sys.stdout.flush()
        move_cursor_down(5)
        move_cursor_left(3)
    if position == [1,1]:
        move_cursor_up(5)
        move_cursor_right(9)
        sys.stdout.write(color + '\bX\b' + '\033[0m') 
        sys.stdout.flush()
        move_cursor_down(5)
        move_cursor_left(9)
    if position == [1,2]:
        move_cursor_up(5)
        move_cursor_right(14)
        sys.stdout.write(color + '\bX\b' + '\033[0m') 
        sys.stdout.flush()
        move_cursor_down(5)
        move_cursor_left(14)
    if position == [2,0]:
        move_cursor_up(3)
        move_cursor_right(3)
        sys.stdout.write(color + '\bX\b' + '\033[0m') 
        sys.stdout.flush()
        move_cursor_down(3)
        move_cursor_left(3)
    if position == [2,1]:
        move_cursor_up(3)
        move_cursor_right(9)
        sys.stdout.write(color + '\bX\b' + '\033[0m') 
        sys.stdout.flush()
        move_cursor_down(3)
        move_cursor_left(9)
    if position == [2,2]:
        move_cursor_up(3)
        move_cursor_right(14)
        sys.stdout.write(color + '\bX\b' + '\033[0m') 
        sys.stdout.flush()
        move_cursor_down(3)
        move_cursor_left(14)
    
        

game_map = [
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
    ["*"," "," "," "," "," ","|"," "," "," "," ","|"," "," "," "," "," ","*"],
    ["*","_","_","_","_","_","|","_","_","_","_","|","_","_","_","_","_","*"],
    ["*"," "," "," "," "," ","|"," "," "," "," ","|"," "," "," "," "," ","*"],
    ["*","_","_","_","_","_","|","_","_","_","_","|","_","_","_","_","_","*"],
    ["*"," "," "," "," "," ","|"," "," "," "," ","|"," "," "," "," "," ","*"],
    ["*"," "," "," "," "," ","|"," "," "," "," ","|"," "," "," "," "," ","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]
]

coordinates = [
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]]
]
map_size = 18
y = 1
x = 1
position = coordinates[y][x]
positions = []
is_playing = False

draw_map(game_map, map_size)

print("Press W,S,A,D or Arrows for control\nPress ESC for exit\n")   

while not is_playing:
    print("Press Enter for start\n")
    key = get_key_press()
    
    if key == True:
        print(key)
        is_playing = True
        
while is_playing:  
    draw_map(game_map, map_size) 
    draw_existing(positions)
    draw_x(y, x, '\033[91m')
    key = get_key_press()
    
    if key == False:
        is_playing = False
    if key == "Up":
        y -= 1
        if y < 0:
            y = 2
    if key == "Down":
        y += 1
        if y > 2:
            y = 0
    if key == "Left":
        x -= 1
        if x < 0:
            x = 2
    if key == "Right":
        x += 1
        if x > 2:
            x = 0
    if key == True:
        positions.append([y,x])