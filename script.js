$(document).ready(function() {
    // adding Date in the header section:
    $("#currentDay").text(moment().format("MMM Do YYYY"));

    // adding current hour, setting up the variable as either a number or a string:
    var currentHour = parseInt(moment().format("HH"));
    console.log(currentHour);
    console.log(typeof(currentHour));
    var currentHourAsString = JSON.stringify(currentHour);
    console.log(currentHourAsString);
    console.log(typeof(currentHourAsString));
    
    // Adding variable for each row - hour:
    
    var rowHour8 = $("#8").data("hour");  
    var rowHour9 = $("#9").data("hour");  
    var rowHour10 = $("#10").data("hour");  
    var rowHour11 = $("#11").data("hour");  
    var rowHour12 = $("#12").data("hour");  
    var rowHour13 = $("#13").data("hour");  
    var rowHour14 = $("#14").data("hour");  
    var rowHour15 = $("#15").data("hour");  
    var rowHour16 = $("#16").data("hour");  
    var rowHour17 = $("#17").data("hour");  

    // creating an array of row-hours:

    var blockHourList = [ rowHour8, rowHour9, rowHour10, rowHour11, rowHour12, rowHour13, rowHour14, rowHour15, rowHour16, rowHour17]
    console.log(blockHourList)

    // creating a for loop in order to go through the different index positions within the blockHourList array
    
    var rowHourIndex = 0;
    for (rowHourIndex = 0;rowHourIndex < blockHourList.length; rowHourIndex++) {
        console.log(blockHourList[rowHourIndex]);
        console.log(blockHourList[rowHourIndex] == currentHour);

        // adding conditional in order to identify if the hour is in the past, present or future

        if (blockHourList[rowHourIndex] < currentHour) {
            console.log("this is in the PAST");
                            
            $("#"+(rowHourIndex+8)).addClass( "past" );
            $("#description"+(rowHourIndex+8)).addClass( "past" );
            
        } else if (blockHourList[rowHourIndex] > currentHour){
            console.log("this is in the FUTURE");
            $("#"+(rowHourIndex+8)).addClass( "future" );
            $("#description"+(rowHourIndex+8)).addClass( "future" );
        }
        else {
            console.log("PRESENT");
            $("#"+(rowHourIndex+8)).addClass( "present" );
            $("#description"+(rowHourIndex+8)).addClass( "present" );
        }
    }

    // creating variables for to do´s in each hour block
   
    var todo8 = localStorage.getItem("8 am"); 
    var todo9 = localStorage.getItem("9 am"); 
    var todo10 = localStorage.getItem("10 am"); 
    var todo11 = localStorage.getItem("11 am"); 
    
    var todo12 = localStorage.getItem("12 pm"); 
    var todo1pm = localStorage.getItem("1 pm"); 
    var todo2pm = localStorage.getItem("2 pm"); 
    var todo3pm = localStorage.getItem("3 pm"); 
    var todo4pm = localStorage.getItem("4 pm"); 
    var todo5pm = localStorage.getItem("5 pm"); 

    // saving user input in blockHours text box
    $(".saveBtn").on("click", function(event){
        event.preventDefault();

        console.log("click");
        localStorage.setItem("8 am", $("#description8").val());
        localStorage.setItem("9 am", $("#description9").val());
        localStorage.setItem("10 am", $("#description10").val());
        localStorage.setItem("11 am", $("#description11").val());
        localStorage.setItem("12 pm", $("#description12").val());
        localStorage.setItem("1 pm", $("#description13").val());
        localStorage.setItem("2 pm", $("#description14").val());
        localStorage.setItem("3 pm", $("#description15").val());
        localStorage.setItem("4 pm", $("#description16").val());
        localStorage.setItem("5 pm", $("#description17").val());
        
    })

    // displaying saved to do`s in the DOM 

    function renderTodos() {
        $("#description8").text(todo8);
        $("#description9").text(todo9);
        $("#description10").text(todo10);
        $("#description11").text(todo11);
        $("#description12").text(todo12);
        $("#description13").text(todo1pm);
        $("#description14").text(todo2pm);
        $("#description15").text(todo3pm);
        $("#description16").text(todo4pm);
        $("#description17").text(todo5pm);
       

    }
    // Render todos to the DOM
    renderTodos();


    
    
    

    

});