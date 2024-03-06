def decrypt(matrix):
    decrypted = []
    alphabet = [chr(ord('a') + i) for i in range(26)]
    alphabet_alpha = [chr(ord('A') + i) for i in range(26)]
    
    for column in range(len(matrix[0])):
        for row in range(len(matrix)):
            if matrix[row][column] in alphabet or matrix[row][column] in alphabet_alpha:
                decrypted.append(matrix[row][column])
            
    return decrypted
            
    
matrix = [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

matrix_message_list = decrypt(matrix)
print(matrix_message_list)