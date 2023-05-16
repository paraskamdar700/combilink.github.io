let introTXT= document.getElementById("introTXT");
let delay = 100;

for (const ele of introTXT.innerHTML) {
    setTimeout(() => {
        introTXT.innerHTML += ele;
    }, delay);
    delay += 100;
}