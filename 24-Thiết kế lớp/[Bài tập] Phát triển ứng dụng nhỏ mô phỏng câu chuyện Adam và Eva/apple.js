function Apple() {
    this.weight = 10;
}
Apple.prototype.decrease = function() {
    return this.weight--;
}
Apple.prototype.isEmpty = function() {
    if(this.weight === 0) {
        return true
    } else {
        return false
    }
}
Apple.prototype.getWeight = function() {
    return this.weight;
}