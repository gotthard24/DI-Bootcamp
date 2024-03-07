import msvcrt
import sys
import os

def win_condition_check(pos):
    win_con_x = [
        [[0,0,True],[0,1,True],[0,2,True]],
        [[1,0,True],[1,1,True],[1,2,True]],
        [[2,0,True],[2,1,True],[2,2,True]],
        [[0,0,True],[1,0,True],[2,0,True]],
        [[0,1,True],[1,1,True],[2,1,True]],
        [[0,2,True],[1,2,True],[2,2,True]],
        [[0,0,True],[1,1,True],[2,2,True]],
        [[0,2,True],[1,1,True],[2,0,True]],
        ]
    win_con_o = [
        [[0,0,False],[0,1,False],[0,2,False]],
        [[1,0,False],[1,1,False],[1,2,False]],
        [[2,0,False],[2,1,False],[2,2,False]],
        [[0,0,False],[1,0,False],[2,0,False]],
        [[0,1,False],[1,1,False],[2,1,False]],
        [[0,2,False],[1,2,False],[2,2,False]],
        [[0,0,False],[1,1,False],[2,2,False]],
        [[0,2,False],[1,1,False],[2,0,False]],
        ]
    if len(pos) >= 9:
        print("Draw !")
        return True
    for i in range(len(win_con_x)):
        if win_con_x[i][0] in pos and win_con_x[i][1] in pos and win_con_x[i][2] in pos:
            print("Player 1 Won !")
            return True
        elif win_con_o[i][0] in pos and win_con_o[i][1] in pos and win_con_o[i][2] in pos:
            print("Player 2 Won !")
            return True
        
    
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


def draw_existing(positions):
    for i in range(len(positions)):
        position = positions[i]
        place_xo(position[0], position[1], position[2])


def draw_xo(up, right, is_x, color = '\033[0m'):
    move_cursor_up(up)
    move_cursor_right(right)
    if is_x == True:     
        sys.stdout.write(color + '\bX\b' + '\033[0m') 
        sys.stdout.flush()
    else:    
        sys.stdout.write(color + '\bO\b' + '\033[0m') 
        sys.stdout.flush()
    move_cursor_down(up)
    move_cursor_left(right)

    
def place_xo(y, x, is_x, color = '\033[0m'):  
    up_0 = 7
    up_1 = 5
    up_2 = 3
    right_0 = 3
    right_1 = 9
    right_2 = 14
    
    position = [y,x]
    
    if position == [0,0]:
        draw_xo(up_0,right_0, is_x,color)
    if position == [0,1]:
        draw_xo(up_0,right_1,is_x,color)
    if position == [0,2]:
        draw_xo(up_0,right_2,is_x,color)
    if position == [1,0]:
        draw_xo(up_1,right_0,is_x,color)
    if position == [1,1]:
        draw_xo(up_1,right_1,is_x,color)
    if position == [1,2]:
        draw_xo(up_1,right_2,is_x,color)
    if position == [2,0]:
        draw_xo(up_2,right_0,is_x,color)
    if position == [2,1]:
        draw_xo(up_2,right_1,is_x,color)
    if position == [2,2]:
        draw_xo(up_2,right_2,is_x,color) 
        

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
place_xo(y, x, is_x)
place_xo(0, 0, is_x)
place_xo(2, 2, is_x)
place_xo(2, 1, False)
place_xo(1, 2, False)

print("Press W,S,A,D for control\nPress ESC for exit\n")   

while not is_playing:
    print("Press Enter for start\n")
    key = get_key_press()
    
    if key == True:
        print(key)
        is_playing = True
        
while is_playing:  
    clear_screen()
    draw_map(game_map, map_size) # Empty board
    draw_existing(positions)  # X and O that already on board
    
    if win_condition_check(positions) == None:
        pass
    else:
        break
    
    place_xo(y, x, is_x, red) # Current turn 
    if is_x == True:
        print("Player's 1 Turn")
    else:
        print("Player's 2 Turn")

    key = get_key_press()
    
    if key == False:
        is_playing = False
    elif key == "Up":
        y -= 1
        if y < 0:
            y = 2
    elif key == "Down":
        y += 1
        if y > 2:
            y = 0
    elif key == "Left":
        x -= 1
        if x < 0:
            x = 2
    elif key == "Right":
        x += 1
        if x > 2:
            x = 0
    elif key == True:
        module = [y,x,is_x]  
        anti_module = [y,x,swap(is_x)]      
        if module in positions or anti_module in positions:
            pass
        else:
            positions.append(module)
            is_x = swap(is_x)
            
#Game works only on english keyboard