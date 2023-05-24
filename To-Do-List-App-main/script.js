let input=document.querySelector('.entered-list');
let addBtn=document.querySelector('.add-list');
let tasks=document.querySelector('.tasks');

// add btn disabled
input.addEventListener('keyup',()=>{
    if(input.value.trim()!==0){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
})


//add new item to list
addBtn.addEventListener('click',()=>{
    if (input.value.trim()!=0){
        let newItem=document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML=`
        <p>${input.value}</p>
        <div class="item-btn">
            <i class="edit">check</i>
            <i class="delete">delete</i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value='';
    }else{
        alert('enter task')
    }
})

//delete item from list
tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }
})

//mark item as completed
tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('edit')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})