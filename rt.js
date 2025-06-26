var startTime;
function getrandomcolor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function randomMover() {
    var left = Math.random()*300;
    var top = Math.random()*300;
    var Wh = Math.random()*100 + 100; // Width and height between 50 and 150
    document.getElementById("box").style.left = left + "px";
    document.getElementById("box").style.top = top + "px";
    document.getElementById("box").style.width = Wh + "px";
    document.getElementById("box").style.height = Wh + "px";
    document.getElementById("box").style.display = "block";
    document.getElementById("box").style.backgroundColor = getrandomcolor();
    startTime = new Date().getTime();

}
randomMover();

document.getElementById("box").onclick = function() {
    document.getElementById("box").style.display = "none";
    var endTime = new Date().getTime();
    var reactionTime = (endTime - startTime)/ 1000; // Convert to seconds
    alert("Your reaction time is: " + reactionTime + " seconds");
    randomMover();
}