(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    //function for button calls
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    //function for equal button
    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "Please enter";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    //function for clear button
    clear.addEventListener('click', function(e){
        screen.value = "";

    }
})();