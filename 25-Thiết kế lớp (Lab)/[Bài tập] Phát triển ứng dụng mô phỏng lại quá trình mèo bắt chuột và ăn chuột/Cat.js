let Cat = function(name, weight, speed) {
    this.name = name
    this.weight = weight
    this.speed = speed
    this.checkSpeedCat = function() {
        return this.speed
    }
    this.getWeightCat = function() {
        return this.weight
    }
    this.getNameCat = function() {
        return this.name
    }
    this.getRat = function(target) {
        this.rat = target
    }
    // info chuot
    this.getInfoRat = function() {
        this.info = "Name: "+this.rat.getName()+" - Weight: "+this.rat.getWeight()+" kg - Speed:"+this.rat.getSpeed()+" km/h"
        return this.info
    }
    // info meo
    this.getInfoCat = function() {
        this.infoCat = "Name: "+this.name+" - Weight: "+this.weight+" kg - Speed:"+this.speed+" km/h"
        return this.infoCat
    }

    this.stayCat = function() {
        console.log("Meo Meo")
    }
    this.catchRat = function() {
        if(this.rat.checkStatus()) {
            if(this.rat.getSpeed() > this.speed) {
                console.log(this.rat.getName()+"da chay thoat")
            }else{
                this.weight += this.rat.getWeight()
                console.log(this.name+" da bat duoc "+this.rat.getName()+" va tang them "+this.rat.getWeight()+" kg= "+this.weight+" kg")    
            }
        }else{
            this.rat.getName()
            console.log(this.name+ " khong them an")
        }
    }
}