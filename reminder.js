
let p;
let arr =[];
function clickhere(value = null) {

    let msg = value || document.getElementById("msg").value;

    let x = document.getElementById("myUL");
    

    if (msg === '') {
        alert("You must write something!")
    } else {

        // LI creating and showing list of remainders...
        let li = document.createElement("li")
        let txtNode1 = document.createTextNode(msg);
        li.appendChild(txtNode1);
        document.getElementById("myul2").appendChild(li);

    

        //drop-down list for time
        var time = document.getElementById("dropdown").value;
        time = time * 1000;

        // show remainder after a interval of time..
        c = 1;
        p = setInterval(() => {

            s = '<li class="closedown' + c + '" onclick="HideSpanEle(this.className)">' + msg + c + '<span > \u00D7 </span>' + '</li>'
            //document.getElementById("msg").value = ""
            x.innerHTML = x.innerHTML + '<br>' + s;
            c++;
          
        }, time);

        // set and get local storage items..
        if (value === null) {
            let myList = localStorage.getItem("myList") ? JSON.parse(localStorage.getItem("myList")) : []
            myList.push({
                text: msg
                

            })
            localStorage.setItem("myList", JSON.stringify(myList))
        }
        

    }


}

// for hiding the list


function HideSpanEle(class_name) {

    // class_name.style.display = 'none'
    $('.' + class_name).hide()

}

// for stop the continously running reminder...

stopBtn.addEventListener('click', function () {
    clearInterval(p);
    alert("stop clicked");
});
// stored items in local storage..



