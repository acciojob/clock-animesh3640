const p = document.getElementById("timer");
function timer(){
    const date = new Date();
    var time=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    var dateString=`${date.getMonth()+1}/${date.getDay()}/${date.getFullYear()}, ${time.toLocaleString()} `
    p.innerText=dateString
    // console.log(dateString)
}
setInterval(timer,1000)