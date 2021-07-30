function Human(name, weight) {
    this.name = name;
    this.gender = "";
    this.weight = weight;
}
Human.prototype.isMale = function() {
    if(this.gender == "male") {
        return true
    } else {
        return false
    }
}
Human.prototype.setGender = function(sex) {
    return this.gender = sex;
}
Human.prototype.eatApple = function(apple) {
    if(!apple.isEmpty()) {
        this.weight += 1;
        apple.decrease();
        console.log(`${this.name} eat apple .....`)
    }
}