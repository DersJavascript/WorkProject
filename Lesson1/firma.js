let firmalar = [
    [1,"A AŞ",151251],
    [2,"B AŞ",153464],
]

console.log("ID\tFirma Adı\tFirma No");

for (let i = 0; i < firmalar.length; i++) {
    console.log(`${firmalar[i][0]}\t${firmalar[i][1]}\t\t${firmalar[i][2]}`);
}


console.log(firmalar);