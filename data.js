"use strict"
//--------------------------------------------

function Person(name, id, number) {
    this.name = name;
    this.id = id;
    this.number = number;
}

Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.setName = function(name) {
    this.name = name;
    return this;
}

Person.prototype.getNumber = function() {
    return this.number;
}

Person.prototype.setNumber = function(number) {
    this.number = number;
    return this;
}

Person.prototype.getId = function() {
    return this.id;
}
//--------------------------------------------

function List() {
    this.lastId = -1;
    this.list = [];
}

List.prototype.add = function(name,number) {
    var person = new Person(name,++this.lastId,number);
    this.list.push(person);
    return person;
}

List.prototype.get = function() {
    return this.list;
}

List.prototype.delete = function(index) {
    this.list.splice(index,1);
}




 var contact = new List();
// contact.add('a',1);
// contact.add('b',2);
// contact.add('c',3);
