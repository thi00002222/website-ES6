  function previewFile() {
    const preview = document.querySelector("#img_preview");
    const file = document.querySelector("#fileInput").files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        preview.src = this.result;
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  }

const container = document.createElement('div');
container.classList.add('container');

const h2 = document.createElement('h2');
h2.textContent = 'Thêm sản phẩm mới';
container.appendChild(h2);

// tensp label and input
const tenspLabel = document.createElement('label');
tenspLabel.htmlFor = 'tensp';
tenspLabel.textContent = 'tên sản phẩm';
container.appendChild(tenspLabel);
tenspLabel.className='w-25 text-uppercase'
container.appendChild(document.createElement('br'));


const tenspInput = document.createElement('input');
tenspInput.type = 'text';
tenspInput.id = 'tensp';
tenspInput.className='mx-2';
tenspInput.name = 'tensp';
tenspInput.placeholder = 'Nhập tên sản phẩm';
container.appendChild(tenspInput);
container.appendChild(document.createElement('br'));
tenspInput.className = 'w-75 border border-primary'


// giasp label and input
const giaspLabel = document.createElement('label');
giaspLabel.htmlFor = 'giasp';
giaspLabel.textContent = 'giá sản phẩm';
container.appendChild(giaspLabel);
giaspLabel.className='w-25 text-uppercase'
container.appendChild(document.createElement('br'));


const giaspInput = document.createElement('input');
giaspInput.type = 'number';
giaspInput.id = 'giasp';
giaspInput.name = 'giasp';
giaspInput.className = 'w-75 border border-primary'
giaspInput.name = '';
giaspInput.placeholder = 'Nhập giá của sản phẩm';
container.appendChild(giaspInput);
container.appendChild(document.createElement('br'));

// categories và select
const categoryLabel = document.createElement('label');
categoryLabel.htmlFor = 'categories';
categoryLabel.textContent = 'danh mục sản phẩm';
container.appendChild(categoryLabel);
categoryLabel.className='w-25 text-uppercase'
container.appendChild(document.createElement('br'));

const select = document.createElement("select");
select.id="categories";
select.className="w-75 border border-primary";
select.style.height="24px";
select.style.padding="1px 2px";
const categories = "http://localhost:3000/categories";
axios.get(categories)
.then(function (category){
  hienthitag(category.data);
})
.catch(function (error) {
  console.log("Error: ", error);
});
function hienthitag(category){
  // const datalist= document.createElement('select');
  for (let i=0;i<category.length;i++) {
    const option = document.createElement("option");
    option.value = `${category[i].name}`;
    option.textContent = `${category[i].name}`;
    select.appendChild(option);
}
}

container.appendChild(select);
container.appendChild(document.createElement('br'));

// hình label and input
const hinhLabel = document.createElement('label');
hinhLabel.htmlFor = 'fileInput';
hinhLabel.textContent = 'hình';
container.appendChild(hinhLabel);

const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.id = 'fileInput';
fileInput.name = 'hinhanh';
fileInput.addEventListener('change', previewFile);
container.appendChild(fileInput);
container.appendChild(document.createElement('br'));
// Buttons
const addButton = document.createElement('button');
addButton.textContent = 'thêm sản phẩm mới';
addButton.classList.add("btn", "btn-outline-primary")
addButton.addEventListener('click', addProduct);
container.appendChild(addButton);



// const readButton = document.createElement('button');
// readButton.textContent = 'đọc';
// readButton.classList.add("btn", "btn-outline-primary")
// readButton.addEventListener('click', readProductad);
// container.appendChild(readButton);

// Image preview
const imgPreview = document.createElement('img');
imgPreview.id = 'img_preview';
imgPreview.alt = '';
imgPreview.height = 200;
container.appendChild(imgPreview);
container.appendChild(document.createElement('br'));

// Append the container to the body
document.body.appendChild(container);

