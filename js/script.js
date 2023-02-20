function current_time() {
    let date = new Date()
    //let current_time = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let session;

    h =(h<10) ? "0" + h : h;
    m =(m<10) ? "0" + m : m;
    s =(s<10) ? "0" + s : s;
    
    if (h>=12 && h<24) {
        session = "PM"
    } else {
        session = "AM"
    }

    let time = h + ":" + m + ":" + s +" " + session
    let month_list= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let day = date.getDay()+1
    let month = month_list[date.getMonth()]
    let year = date.getFullYear()

    //month = (month<10) ? "0"+month:month;

    let current_date = day + " " + month + " " + year


    let d_clock = document.querySelector(".d_clock")
    d_clock.innerHTML = `${time}`

    let d_date = document.querySelector(".d_date")
    d_date.innerHTML = `${current_date}`
}

setInterval(current_time,1000)

current_time();

function js_style() {
    let the_message;
    the_message = prompt("Adınızı giriniz:")

    let the_text =  document.querySelector(".the_text")
    the_text.innerHTML = `Merhaba ${the_message } Hoş Geldin! ${new Date()} tarihinde bu butona basarak zamanı durdurdun. Bu senin için bir başlangıç olsun!!`
}