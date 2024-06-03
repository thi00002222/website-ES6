var cateApi = "http://localhost:3000/categories"

function readCategory() {
    axios.get(cateApi)
        .then(function (response) {
            // console.log('GET Response: ',response.data);
            hienthicategories(response.data);
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}

function hienthicategories(courses) {
    const container = document.createElement('div');
    container.classList.add('container');

    const tenCatelable = document.createElement('label');
    tenCatelable.htmlFor = 'category';
    tenCatelable.textContent = 'tên danh mục';
    container.appendChild(tenCatelable);
    tenCatelable.className = 'w-25 text-uppercase'
    container.appendChild(document.createElement('br'));


    const tenCateInput = document.createElement('input');
    tenCateInput.type = 'text';
    tenCateInput.id = 'category';
    tenCateInput.className = 'mx-2';
    tenCateInput.name = 'category';
    tenCateInput.placeholder = 'Nhập tên danh mục';
    container.appendChild(tenCateInput);
    container.appendChild(document.createElement('br'));
    tenCateInput.className = 'w-75 border border-primary';

    const addButton = document.createElement('button');
    addButton.textContent = 'thêm danh mục mới';
    addButton.classList.add("btn", "btn-outline-primary")
    addButton.addEventListener('click', addCategory);
    container.appendChild(addButton);

    document.body.appendChild(container);

    var tr=document.createElement("tr");
    container.appendChild(tr);

    // console.log(cateApi);
    var i=0;
    var list=courses.map(function (cource) {
        i++;
        return `
        <p>${i}<span>${cource.name}</span></p>
        `

    })
    tr.innerHTML=list.join('');

}

function addCategory(){
    var name=document.getElementById('category').value;

    var cat = new cate();
    cat.setName(name);
    // console.log(cat)
    const db = new database()
    db.addCate(cateApi,name);
}