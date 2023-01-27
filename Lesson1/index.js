let kurs = "Komple Uygulamalı"
let sonuc = kurs.slice(0,6)
sonuc = kurs.slice(10)
sonuc = kurs.split(" ").length;
sonuc = kurs.startsWith("https")
//console.log(sonuc);

sonuc = 10
sonuc = isNaN("10")// bool kontrol
let sayi =15.000548;
sonuc = sayi.toPrecision(5); //basamak gönderir
sonuc = sayi.toFixed(5);//sadece ondalıklı kısmı 5 katlarına yuvarlar
sonuc = Math.round(2.4);
sonuc = Math.ceil(2.6);
sonuc = Math.floor(2.6);
sonuc = Math.sqrt(25);// karekök
sonuc = Math.pow(2,3);
sonuc = Math.abs(-10);// pozitif döner
sonuc = Math.min(4,5,6,8,9)
sonuc = Math.random() * 10;//rastgele sayı


////////////////////////////////////////////////////////////////////////////////////////


let simdi = new Date()

// get methods
sonuc = simdi;
sonuc = simdi.getDate()// gün
sonuc = simdi.getDay()// 0: pazar 6 : cumartesi
sonuc = simdi.getFullYear();// yıl
sonuc = simdi.getHours();// saat
sonuc = simdi.getTime();

//set methods
simdi.setFullYear(2025);
simdi.setMonth(25)// ay ekler
simdi.setDate(15)//gün ekler


sonuc = simdi

console.log(`${sonuc}`);
console.log(typeof sonuc)
/////////////////////////////////////////////////////////////////////////////////

