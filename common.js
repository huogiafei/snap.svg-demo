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

/*simple selector*/
function $$(selector,context){
    context = context || document;
    var elements = context.querySelectorAll(selector);
    console.log(elements);
    return Array.prototype.slice.call(elements);
}

function htmlToTXT(str) {
    var RexStr = /\<|\>|\"|\'|\&|　| /g
    str = str.replace(RexStr,
        function (MatchStr) {
            switch (MatchStr) {
                case "<":
                    return "&lt;";
                    break;
                case ">":
                    return "&gt;";
                    break;
                case "\"":
                    return "&quot;";
                    break;
                case "'":
                    return "&#39;";
                    break;
                case "&":
                    return "&amp;";
                    break;
                case " ":
                    return "&ensp;";
                    break;
                case "　":
                    return "&emsp;";
                    break;
                default:
                    break;
            }
        }
    )
    return str;
}