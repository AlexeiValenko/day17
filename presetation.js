'use strict'

var ul;

function onDeleteClick() {
    $(this).closest("li").remove();
    contact.delete($(this).data());
}

function onAddClick() {
    var name = $('input#name');
    var number = $('input#number');
    var person = contact.add(name.val(),number.val());
    name.val('');
    number.val('');
    $(ul).append(makeNewListItem(person));

}

function showContacts() {
    var contacts = contact.get();
    contacts.forEach(function(person){
        $(ul).append(makeNewListItem(person));
    });
}

function makeNewListItem(person) {
    var name = $("<span>" + person.getName() + '   ' + person.getNumber() + '   '  + "</span>");
    var button = $('<button data-id="' + person.getId() +'">Delete</button>');
    $(button).click(onDeleteClick);
    var li = $("<li></li>");
    $(li).append(name).append(button);
    return li;

}

$(document).ready(function() {
    ul = $('ul');
    $('button#add').click(onAddClick);
    showContacts();
})