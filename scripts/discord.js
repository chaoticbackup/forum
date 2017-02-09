$(function() {
console.log('test');
    var forums = document.getElementsByClassName("borderwrap");
    var parent = document.getElementById('main-content');
    var child = forums[forums.length-1];

    var node = document.createElement('div');
    node.className = 'borderwrap';

    node.innerHTML = '<iframe src="https://discordapp.com/widget?id=135657678633566208&theme=dark"' +
        'width="100%" height="250" allowtransparency="true" frameborder="0"></iframe>';

    parent.insertBefore(node, child);

    parent.insertBefore(document.createElement('br'), child);

});
