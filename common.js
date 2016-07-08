'use strict';
var codeItems = document.querySelectorAll('.code-box');
codeItems.forEach(function(item,i){
    var btn = document.createElement("button");
    btn.classList = 'copy-btn';
    btn.setAttribute('data-clipboard-target','#code'+(i+1));
    btn.textContent = 'Copy';
    item.appendChild(btn);
    item.querySelector('pre').id = 'code'+(i+1);
})

new Clipboard('.copy-btn');