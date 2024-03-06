import msvcrt
import sys
import os

def swap(is_x):
    if is_x == True:
        is_x = False
    else:
        is_x = True    
    return is_x    
        
def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')
    
    
def draw_map(game_map, map_size):
    for i in range(len(game_map)):
        for j in range(map_size):
            print(game_map[i][j], end="")
        print()
        
        
def get_key_press():
    while True:
        key = msvcrt.getch()
        if key == b'w' or key == b'W':
            return 'Up'
        elif key == b's' or key == b'S':
            return 'Down'
        elif key == b'a' or key == b'A':
            return 'Left'
        elif key == b'd' or key == b'D':
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


def draw_existing(positions, is_x):
    for i in range(len(positions)):
        position = positions[i]
        place_x(position[0], position[1])


def draw_x(up, right, color = '\033[0m'):
    move_cursor_up(up)
    move_cursor_right(right)        
    sys.stdout.write(color + '\bX\b' + '\033[0m') 
    sys.stdout.flush()
    move_cursor_down(up)
    move_cursor_left(right)
    
    
def draw_o(up, right,color = '\033[0m'):
    move_cursor_up(up)
    move_cursor_right(right)        
    sys.stdout.write(color + '\bO\b' + '\033[0m') 
    sys.stdout.flush()
    move_cursor_down(up)
    move_cursor_left(right)
    

def place_x(y, x, color = '\033[0m'):  
    up_0 = 7
    up_1 = 5
    up_2 = 3
    right_0 = 3
    right_1 = 9
    right_2 = 14
    
    position = [y,x]
    
    if position == [0,0]:
        draw_x(up_0,right_0,color)
    if position == [0,1]:
        draw_x(up_0,right_1,color)
    if position == [0,2]:
        draw_x(up_0,right_2,color)
    if position == [1,0]:
        draw_x(up_1,right_0,color)
    if position == [1,1]:
        draw_x(up_1,right_1,color)
    if position == [1,2]:
        draw_x(up_1,right_2,color)
    if position == [2,0]:
        draw_x(up_2,right_0,color)
    if position == [2,1]:
        draw_x(up_2,right_1,color)
    if position == [2,2]:
        draw_x(up_2,right_2,color)
        
    
def place_o(y, x, color = '\033[0m'):
    up_0 = 7
    up_1 = 5
    up_2 = 3
    right_0 = 3
    right_1 = 9
    right_2 = 14
    
    position = [y,x]
    
    if position == [0,0]:
        draw_o(up_0,right_0,color)
    if position == [0,1]:
        draw_o(up_0,right_1,color)
    if position == [0,2]:
        draw_o(up_0,right_2,color)
    if position == [1,0]:
        draw_o(up_1,right_0,color)
    if position == [1,1]:
        draw_o(up_1,right_1,color)
    if position == [1,2]:
        draw_o(up_1,right_2,color)
    if position == [2,0]:
        draw_o(up_2,right_0,color)
    if position == [2,1]:
        draw_o(up_2,right_1,color)
    if position == [2,2]:
        draw_o(up_2,right_2,color)
    
        

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
is_x = True
red = '\033[91m'

draw_map(game_map, map_size)

print("Press W,S,A,D or Arrows for control\nPress ESC for exit\n")   

while not is_playing:
    print("Press Enter for start\n")
    key = get_key_press()
    
    if key == True:
        print(key)
        is_playing = True
        
while is_playing:  
    clear_screen()
    draw_map(game_map, map_size) 
    draw_existing(positions, is_x)
    if is_x == True:
        place_x(y, x, red)
    else:
        place_o(y, x, red)
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
        positions.append([y,x]) #is_x
        is_x = swap(is_x)