(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    const del = document.querySelector('.btn-delete');
    //function for button calls
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    //function for button calls(keyboard)
    buttons.forEach(function(button){
        button.addEventListener('keydown', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    //function for equal button
    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });
    //function for delete button
    del.addEventListener('click', function(e){
        screen.value = screen.value.slice(0,-1);
    });
    //function for clear button
    clear.addEventListener('click', function(e){
        screen.value = "";
    });
})();