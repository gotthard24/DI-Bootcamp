def decrypt(matrix):
    decrypted = []
    alphabet = [chr(ord('a') + i) for i in range(26)]
    alphabet_alpha = [chr(ord('A') + i) for i in range(26)]
    
    for column in range(len(matrix[0])):
        for row in range(len(matrix)):
            if matrix[row][column] in alphabet or matrix[row][column] in alphabet_alpha:
                decrypted.append(matrix[row][column])
            else:
                if len(decrypted) > 0:
                    if decrypted[-1] != " ":
                        decrypted.append(" ")
            
    return decrypted

  
def encrypt(string, columns = 3):
    matrix = []
    for row in range(len(string) // columns):
        matrix.append([])
        for i in range(columns):
            matrix[row].append(string[i + row * 3])
            
    return matrix
    
                       
matrix_string = "7iiTsxh%?i #sM $a #t%^r!"  
matrix = encrypt(matrix_string)
matrix_message_list = decrypt(matrix)
message = "".join(matrix_message_list)
print(message)