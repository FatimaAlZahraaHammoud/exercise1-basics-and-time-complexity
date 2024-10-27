var rows = parseInt(prompt("Enter the number of rows:"));
while(rows <= 0){
    alert("Please enter a valid positive integer: ");
    var rows = parseInt(prompt("Enter the number of rows:"));
}

for (var i = 0; i < rows; i++){
    console.log(" ".repeat(rows - i) + "*".repeat(i * 2 + 1));
}

for (var i = rows - 2; i >= 0; i--){
    console.log(" ".repeat(rows - i) + "*".repeat(i * 2 + 1));
}