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
yargs.command({
    command: "delete",
    describe: "Delete numbers 2, 4, 6, and 8 from the list",
    handler: () => {
      list = list.filter(num => ![2, 4, 6, 8].includes(num));
      console.log("Deleting [2, 4, 6, 8] , the list : ",list);
    }
  });

//////
yargs.command({
    command: "read",
    describe: "Reading the list",
    handler: () => {
      console.log("The list : ",list);
    }
  });
yargs.parse();

//Work done