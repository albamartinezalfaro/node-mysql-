const title = document.querySelector('#title');
const description = document.querySelector('#description');
const btnSubmit = document.querySelector('#btn_submit');
const btnDelete = document.getElementsByClassName('delete');

btnSubmit.addEventListener('click', function(){
    window.location.href = `add/${title.value}/${description.value}`;
});

for(let i of btnDelete){
    i.addEventListener('click', function(){
        let id = this.getAttribute('id');
        window.location.href = `delete/${id}`;
    });
}