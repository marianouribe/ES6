var sticky;

try {
    RegExp('','y');
    sticky = true;
} catch (e) {
    sticky=false;
}

console.log(sticky);