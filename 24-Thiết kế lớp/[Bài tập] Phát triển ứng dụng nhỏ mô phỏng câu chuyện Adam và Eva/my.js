function theStory() {
    let adam = new Human('adam',70);
    let eva = new Human('eva',45);
    let apple = new Apple();
    adam.setGender('male');
    eva.setGender('female');
    while(apple.weight > 0) {
        adam.eatApple(apple);
        eva.eatApple(apple);
    }
    console.log('Apple are already eaten');
}
theStory();