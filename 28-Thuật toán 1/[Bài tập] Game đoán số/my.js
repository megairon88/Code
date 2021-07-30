function mang(){
    let doanSo = Number(prompt("Nhap so bat ki"))
    let mangso = []
    for (let i=0; i<100; i++){
        mangso.push(i)
    }
    document.write("["+mangso.join(" - ")+"]<br>")
    document.write("Tim kiem nhi phan<br>")
    timkiem = thuatToanNhiPhan(doanSo,mangso)
    if (timkiem == -1){
        document.write("Khong co so nao<br>")
    }else {
        document.write("So "+doanSo+" o mang so["+timkiem+"] = "+mangso[timkiem]+"<br>")
    }

    document.write("Tim kiem tuyen tinh<br>")
    timkiem1 = thuatToanTuyenTinh(doanSo,mangso)
    if (timkiem1 == -1){
        document.write("Khong co so nao<br>")
    }else {
        document.write("So "+doanSo+" o mang so["+timkiem1+"] = "+mangso[timkiem1]+"<br>")
    }
}

function thuatToanNhiPhan(doanSo, mangso) {
    let low = 0;
    let high = mangso.length
    let mid
    while (low<=high){
        mid = Math.round((high+low)/2)
        if (mangso[mid] == doanSo){
            return mid
        }
        else if(mangso[mid] > doanSo){
            high = mid - 1
        }else {
            low = mid + 1
        }
    }
    return -1
}

function thuatToanTuyenTinh(doanSo, mangso) {
    for (let i =0; i<mangso.length ;i++){
        if (mangso[i] == doanSo){
            return i
        }
    }
    return -1
}