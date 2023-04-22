let name = 'Prabir'

if(true) {
    let name = 'Prasad' //Variable shadowing
    if(true) {
        name = 'Prox' //Re-assigning value
        // name = 'Bir' //Leaked variable  -- It will automatically declare itself at global scope if not declared anywhere
        console.log(name);
    }
}

if(true) {
    console.log(name);
}