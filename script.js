function decimalToBinary(num) {
  //Write you code here
	# Function to convert decimal to binary
def decimal_to_binary(decimal):
    # Using the bin() function to convert to binary and stripping the '0b' prefix
    binary = bin(decimal)[2:]
    return binary

# Input from the user
decimal_input = int(input("Enter a decimal number: "))

# Convert the decimal to binary
binary_output = decimal_to_binary(decimal_input)

# Print the binary equivalent
print("Binary equivalent:", binary_output)

  
}

window.decimalToBinary = decimalToBinary;
