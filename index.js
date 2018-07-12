$(document).ready(function() {
    $("#Newtodoblock4").click(function() {
        var todoBlock= $(this).closest("#Newtodoblock")
        var description=todoBlock.find("#Newtodoblock2")
        var pomodoroEstimate=todoBlock.find("#Newtodoblock3") 
        var Newtodoblock55=todoBlock.find("#Newtodoblock5")
    $("ul").append("<li> <input type='checkbox'/>"+ description.val()+"    <span class = 'pomodoro-estimate'> <div> " + 'Newtodoblock55' + " </div>" + pomodoroEstimate.val()+ " Pomodoros </span> </li>")
description.val("")
pomodoroEstimate.val("")
Newtodoblock55.val("")    
        
    })
    })
    
$(document).ready(function(){
    $("input[type=checkbox]").click(function() { 
    $(this).closest("li").toggleClass("completed-todo")
    })
})