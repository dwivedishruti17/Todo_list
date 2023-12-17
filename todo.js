let input = prompt("What would you like to do?")
const todos = ['Collect Chicken Eggs' , 'Clean Litter Box'];
while(input!=='quit' && input!=='q'){
     if(input=== 'list'){
        console.log("*******************");
        for(let i=0; i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("*******************");
     }
     else if(input=== 'new'){
        let newTodo = prompt('what would you like to add?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
     }
     else if(input==='delete'){
      const index = parseInt(prompt('Enter the index of element to be deleted'));
      if(!Number.isNaN(index)){
      const deleted = todos.splice(index,1);
      console.log(`OK.Deleted item "${deleted[0]}"`);
      }
      else{
         console.log("Wrong input");
      }
     }
     input = prompt("what would you like to do?");
    }
    console.log("OK.YOU QUIT THE GAME");