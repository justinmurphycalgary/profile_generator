console.clear();
const readline = require("readline");

const person = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("This is Computron, who am i speaking to? ", (answer) => {
    person.name = answer;
    rl.setPrompt(`hey ${person.name} what type of paper do you want?`)
    rl.prompt();
    rl.on('line', function(inputPaper) {
    if (inputPaper !== false){
      (inputPaper) => person.paper = inputPaper
      rl.close(); }}
    
    
    
    );
    
}  
)

rl.on("close", () => {
  console.log(`\n Hey Jim, ${person.name} is ordering 5 reams of ${person.paper}`);
});
