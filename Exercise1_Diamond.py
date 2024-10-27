rows = int(input("Enter number of rows: "))

while rows <= 0:
    print("Please enter a valid positive integer: ")
    rows = int(input("Enter number of rows: "))

#print the upper part of the diamond
for i in range(rows):
    print(" " * (rows - i) + "*" * (i * 2 + 1))

# second part of the diamond
for i in range(rows - 2, -1, -1): 
    print(" " * (rows - i) + "*" * (i * 2 + 1))

