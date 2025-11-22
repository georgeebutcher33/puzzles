let mycounter = 0;
document.getElementById("mycounterdisplay").innerHTML = mycounter;

function counter() {

    mycounter++;
    document.getElementById("mycounterdisplay").innerHTML = mycounter;

}