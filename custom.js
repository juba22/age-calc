function monyBest() {
    
    "use strict";
    
    var mony = document.getElementById("in").value,
        
        calc = mony * 365,
    
        massage = document.getElementById("test");
        
    if (mony === "") {
        
        massage.innerHTML = 'The field is empty';
        
    } else if (mony === "0") {
        
        massage.innerHTML = '0 cannot be calculated';
        
    } else if (mony < 0) {
        
        massage.innerHTML = 'Less than zero cannot be calculated';
        
    } else if (mony > 100) {
        massage.innerHTML = 'Cannot count more than 100';
        
    } else {
        
        massage.innerHTML = 'Your age in days is : ' + calc + ' days'
        
    }
}

    


