let items = ['item1', 'item2', 'item3', 'item4', ];

let list = document.querySelector('#myList');


items.forEach(function(item){
    let li = document.createElement('li');
    let t = document.createTextNode(item);
    li.className='list-group-item';
    li.appendChild(t);
    list.appendChild(li);

    let span = document.createElement('span');
    let text = document.createTextNode('\u00D7');
    span.className='close';
    span.appendChild(text);
    li.appendChild(span);
});


//checkedElement Event

list.addEventListener('click', checkedElement);

function checkedElement(item) {
    if (item.target.tagName='li') {
        item.target.classList.toggle('checked')
    }
}

