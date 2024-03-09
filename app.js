const yargs = require("yargs");

let list = [];

yargs.command({
  command: "add",
  describe: "Adding numbers 1-10 in the list",
  handler: () => {
    for (let i = 1; i <= 10; i++) {
      list.push(i);
    }
    console.log("Numbers added , the list : ",list);
  }
});


//////
yargs.parse();