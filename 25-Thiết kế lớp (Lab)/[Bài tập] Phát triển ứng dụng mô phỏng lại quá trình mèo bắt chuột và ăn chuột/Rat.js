let Rat = function(name, weight, speed) {
    this.name = name
    this.weight = weight
    this.speed = speed
    this.checkRatDie = function(check) {
        this.ratDie = check
    }
    this.getName = function() {
        return this.name
    }
    this.getWeight = function() {
        return this.weight
    }
    this.getSpeed = function() {
        return this.speed
    }

    this.checkStatus = function() {
        if(this.status == false) {
            console.log("Chuot " +this.name+" da chet !!! ")
            return false
        }
        console.log("Chuot " +this.name+ " con song ")
        return true
    }

    this.life = function() {
        this.status = true
    }
    this.die = function() {
        this.status = false
    }
    this.stay = function() {
        console.log("Chit Chit")
    }
}