console.log("ses");
const sidebar_buton = document.querySelector(".sidebar_button");
const sidebarmobil = document.querySelector(".sidebar")
sidebar_buton.addEventListener("click", function(){
    console.log("tiklandi");
    sidebarmobil.classList.toggle("acik");
})

const kopyalama=document.querySelector(".card_b2_center_card2_button");
const textimiz=document.querySelector(".card_b2_center_card2_p2");
kopyalama.addEventListener("click",function(){
    const sifre = textimiz.textContent;
    navigator.clipboard.writeText(sifre);
})

const yazdirma = document.querySelector(".baslik_button")
yazdirma.addEventListener("click",function(){
    window.print();
})