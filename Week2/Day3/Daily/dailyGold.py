def encrypt(original, encryption_key):
    encrypted_string = ''
    letters_in_alphabet = 26
    
    alphabet_dict = {}
    for i in range(1, 27):
        alphabet_dict[i] = chr(96 + i) 


    alphabet_dict_reverse = {}
    for i in range(1, letters_in_alphabet + 1):
        alphabet_dict_reverse[chr(96 + i)] = i 

   
    for char in original:
        if char == ' ':
            continue
        orig_index = alphabet_dict_reverse[char]
        encr_index = orig_index + encryption_key
        
        if encr_index > letters_in_alphabet:
            encr_index -= letters_in_alphabet
            
        encr_char = alphabet_dict[encr_index]
        encrypted_string += encr_char
    
    return(encrypted_string)    


def decrypt(encrypted, decryption_key):
    decrypted_string = ''
    letters_in_alphabet = 26
    
    alphabet_dict = {}
    for i in range(1, 27):
        alphabet_dict[i] = chr(96 + i) 


    alphabet_dict_reverse = {}
    for i in range(1, letters_in_alphabet + 1):
        alphabet_dict_reverse[chr(96 + i)] = i 

   
    for char in encrypted:
        if char == ' ':
            continue
        encr_index = alphabet_dict_reverse[char]
        orig_index = encr_index - decryption_key
        
        if orig_index < 1:
            orig_index += letters_in_alphabet
            
        orig_char = alphabet_dict[orig_index]
        decrypted_string += orig_char
    
    return(decrypted_string)


original_string = input("> Write a string to encode: ").lower()
key = int(input("> Write a encryption/decryption key: "))
encrypted = encrypt(original_string, key)
decrypted = decrypt(encrypted, key)

print("original_string: " + original_string)
print("encrypted: " + encrypted)
print("decrypted: " + decrypted)