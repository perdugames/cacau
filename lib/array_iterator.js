function ArrayIterator() {
    this.itens = [];
    this.currentIndex = 0;
}

ArrayIterator.prototype.add = function(item) {
    this.itens.push(item);
}

ArrayIterator.prototype.first = function() {
    this.currentIndex = 0;
}

ArrayIterator.prototype.next = function() {
    this.currentIndex++;
}

ArrayIterator.prototype.isDone = function() {
    return this.currentIndex >= this.itens.length;
}

ArrayIterator.prototype.getCurrent = function() {
    if(this.isDone())
        throw new Error('IteratorOutOfBounds');
    return this.itens[this.currentIndex];
}

export default ArrayIterator;