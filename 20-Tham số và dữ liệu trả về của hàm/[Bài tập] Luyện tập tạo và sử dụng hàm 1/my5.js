function ngoiSao(sao) {
    let sao1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"]
    let sao2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"]
    for (let i = 0; i < sao1.length; i++) {
        if(sao == sao1[i]) {
            return sao2[i]
        }
    }
    return ""
}
function bai5() {
    let timsao = prompt("Nhap ten ngoi sao")
    let sao = ngoiSao(timsao)
    if (sao == "") {
        document.write("Khong co ten ngoi sao nao")
    } else {
        document.write("Ten ngoi sao" +timsao+ " la " +sao)
    }
}