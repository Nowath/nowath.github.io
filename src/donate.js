const Donatebtn = document.querySelector(".btn2");
const DonateCon = document.getElementById("donate-content");
var copyText = "116-8-90521-8";
let x = 0;
function Donatef() {
    x++;
    if (x % 2 != 0) {
        Donatebtn.style.height = "450px";
        DonateCon.style.display = "block";
        Donatebtn.style.padding = "20px 0";
    } else {
        Donatebtn.style.height = "60px";
        DonateCon.style.display = "none";
    }
}
const copy = async () => {
    try {
        await navigator.clipboard.writeText(copyText);
        alert("Content copied to clipboard");
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
};
