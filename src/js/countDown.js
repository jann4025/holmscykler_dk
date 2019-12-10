class Container {
    constructor(number, title) {
        this.numberNode = document.createTextNode(number);
        this.titleNode = document.createTextNode(title);
        this.render();
    }
    render() {
        let spanNumber = document.createElement('span');
        let spanTitle = document.createElement('span');
        this.container = document.createElement('div');
        spanNumber.appendChild(this.numberNode);
        spanTitle.appendChild(this.titleNode);
        this.container.appendChild(spanNumber);
        this.container.appendChild(spanTitle);

        this.container.classList.add('o-count-item');
        spanTitle.classList.add('title');
        spanNumber.classList.add('number');

    }
    get element() {
        return this.container
    }
    setNumber(num) {
        this.numberNode.nodeValue = num
    }
}

class CountDown {
    constructor(startDate) {
        this.countDown = new Date(startDate).getTime();
        this.days = 0
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        this.init();
    }
    init() {
        this.cache();
        this.render();
        this.update();
    }
    cache() {

        this.counter = document.getElementById('js-counter');

        this.daysContainer = new Container(this.days, 'Dage');
        this.hoursContainer = new Container(this.hours, 'Timer');
        this.minutesContainer = new Container(this.minutes, 'Minutter');
        this.secondsContainer = new Container(this.seconds, 'Sekunder');

    }
    update() {
        let actualDate = new Date().getTime();
        let counter = this.countDown - actualDate;

        this.days = Math.floor(counter / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((counter % (1000 * 60)) / 1000);

        this.updateData();
        window.requestAnimationFrame(this.update.bind(this));
    }
    updateData() {
        this.daysContainer.setNumber(this.days)
        this.hoursContainer.setNumber(this.hours)
        this.minutesContainer.setNumber(this.minutes)
        this.secondsContainer.setNumber(this.seconds)
    }
    render() {
        this.counter.appendChild(this.daysContainer.element)
        this.counter.appendChild(this.hoursContainer.element)
        this.counter.appendChild(this.minutesContainer.element)
        this.counter.appendChild(this.secondsContainer.element)
    }
}
new CountDown('March 1 2020 00:00:00 GMT+0200');
