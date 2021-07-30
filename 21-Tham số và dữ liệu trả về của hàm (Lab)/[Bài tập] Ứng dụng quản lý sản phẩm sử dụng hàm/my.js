let Phone = function() {
    this.listPhone = ["Iphone","Sansumg","Nokia","LG","Bphone" ,"Vsmart"]
    this.produst = document.getElementById("product")

    this.count = function (data) {
        let soluong = document.getElementById("soluong")
        if (data != null) {
            if (data > 0) {
                soluong.innerHTML = "Co " +data+ " san pham"
            } else {
                soluong.innerHTML = "Khong co san pham"
            }
        }
    }

    this.display = function() {
        let data =""
        if (this.listPhone.length > 0) {
            for (let i = 0; i < this.listPhone.length; i++) {
                data+= "<tr>"
                data+= "<td style='padding: 10px 0; font-size: 20px; font-weight: bold; text-transform: unppercase; color: red'>"+this.listPhone[i]+"</td>"
                data+= "<td style='padding: 10px 0;'><button onclick = 'listPhone.edit("+i+")'>Edit</button></td>"
                data+= "<td style='padding; 10px 0;'><button onclick = 'listPhone.delete("+i+")'>Delete</button></td>"
                data+= "</tr>"
            }
        } 
        this.count(this.listPhone.length)
        return this.produst.innerHTML = data
    }

    this.add = function() {
        let addProduct = document.getElementById("add").value 
        this.listPhone.push(addProduct.trim())
        this.display()
        document.getElementById("add").value = ""
    }

    this.edit = function(id) {
        let editProduct = document.getElementById("edit")
        editProduct.value = this.listPhone[id]
        self = this;
        document.getElementById("saveEdit").onsubmit = function() {
            let produc = editProduct.value 
            self.listPhone.splice(id, 1, produc)
            self.display()
            editProduct.value = ""
        }
    }

    this.delete = function(id) {
        this.listPhone.splice(id, 1);
        this.display()
    }
}

let listPhone = new Phone()
listPhone.display()