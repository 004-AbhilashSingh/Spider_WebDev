function addtask(){
    var x = document.querySelectorAll('input');
    if(x[0].value.length == 0){
        window.alert("Enter a task.");
    }
    else if(x[1].value.length == 0){
        window.alert("Enter date of the task.");
    }
    else if(x[2].value.length == 0){
        window.alert("Enter time of the task.");
    }
    else{
        var taskname = x[0].value;
        var taskdate = x[1].value;
        var tasktime = x[2].value;
        var li = document.createElement('LI');
        var span1 = document.createElement('SPAN');
        var span2 = document.createElement('SPAN');
        var span3 = document.createElement('SPAN');
        var deletebutton = document.createElement('BUTTON');
        deletebutton.textContent = "DELETE";
        deletebutton.className = "deletebutton";
        span1.textContent = taskname;
        span2.textContent = taskdate;
        span3.textContent = tasktime;
        li.appendChild(span1);
        li.appendChild(span2);
        li.appendChild(span3);
        li.appendChild(deletebutton);
        document.querySelector("#task").appendChild(li);
        var current_task = document.querySelectorAll('.deletebutton');
        save();
        for(var i=0;i<current_task.length;i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
                save();
            }
        }
    }
}
function save(){
    var a = document.getElementsByTagName('span');
    var values = [];
    for(var i=0;i<a.length;i++){
        values[i] = a[i].innerText;
        var key = "tasklist"
        localStorage.setItem("tasklist"+i,values[i]);
    }
    var b = document.getElementsByTagName('li');
    var z = b.length;
    localStorage.setItem("count",z+"");
}
function load(){
    var x = parseInt(localStorage.getItem("count"));
    var k = 0;
    for(var i=0;i<x;i++){
        var li = document.createElement('LI');
        for(var j=0;j<3;j++){
            var span = document.createElement('SPAN');
            span.textContent = localStorage.getItem("tasklist"+k); 
            k = k+1;
            li.appendChild(span);
        }
        var button = document.createElement("BUTTON");
        button.textContent = "DELETE";
        button.className = "deletebutton";
        li.appendChild(button);
        document.getElementById("task").appendChild(li);
    }
    var current_task = document.querySelectorAll('.deletebutton');
        for(var i=0;i<current_task.length;i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
                save();
            }
        }
}
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();