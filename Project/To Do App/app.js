let items = ['item1'];

let list = document.querySelector('#myList');


items.forEach(function(item){
    createItem(item);
});





//Close List Element Event

const close = document.getElementsByClassName('close');

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        let li = this.parentElement;
        li.style.display = 'none';
    }
    
}

//Checked list Element Event

list.addEventListener('click', checkedElement);

function checkedElement(item) {
    if (item.target.tagName=='LI') {
        item.target.classList.toggle('checked');
        ToggleDeleteButton();
    }
}


document.querySelector('#deleteAll').onclick=function() {
    const element = document.querySelectorAll('.checked');

    element.forEach(function(item){
        item.style.display = 'none';
    });
}


function ToggleDeleteButton() {
    const checkList = document.querySelectorAll('.checked');
    if (checkList.length>0) {
        document.querySelector('#deleteAll').classList.remove('d-none');
    }else{
        document.querySelector('#deleteAll').classList.add('d-none');
    }
}


document.querySelector('#btnCreate').onclick=function() {
    let item = document.querySelector('#txtItem').value;
    if(item === ''){
        alert('Lütfen Bir değer Giriniz.');
        return;
    }

    createItem(item);

};

function createItem (item) {
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

    span.onclick = function(){
        let li = this.parentElement;
        li.style.display = 'none';
        li.classList.remove('checked');
    }
}