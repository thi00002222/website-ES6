const sanphamApi = "http://localhost:3000/products";

function xoa(id) {
    axios.delete(sanphamApi + "/" + id)
        .then(function (response) {
            // Handle successful response
            console.log('Delete', response.data);
        })
        .catch(function (error) {
            // Handle error
            console.error('POST Error:', error);
        });
    doc();
}

function readProduct() {
    axios.get(sanphamApi)
        .then(function (response) {
            // console.log('GET Response: ',response.data);
            hienthithongtin(response.data)
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}

function readProductad() {
    axios.get(sanphamApi)
        .then(function (response) {
            // console.log('GET Response: ',response.data);
            hienthithongtinad(response.data)
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}

function hienthithongtin(courses) {
    var list = document.querySelector('#list');
    // ul.classList.add("container");
    // document.body.appendChild(ul);

    var html = courses.map(function (cource) {
        
        return show(cource);
        // console.log(show(cource))
    });

    // list.innerHTML = html.join('');
}

function hienthithongtinad(courses) {
    var list = document.querySelector('#list');
    var html = courses.map(function (cource) {
        return `<div id="list" class="d-inline-block me-3 shadow-lg p-3">
        <h3>${cource.ten}</h3> 
        <p>giá: ${cource.gia}VND</p>
        <p>danh mục: ${cource.cate}</p>
        <img height = "100" with="150" src="${cource.image}"/></br>
       <button onclick= "xoa('${cource.id}')">xoa</button>
        <button onclick= "chon('${cource.id}')">edit</button>
        </div>`;
    });
    list.innerHTML = html.join('');
}

function addProduct() {
    var ten = document.getElementById('tensp').value;
    var gia = document.getElementById('giasp').value;
    var hinhanh = document.getElementById('img_preview').getAttribute("src");
    var cate = document.getElementById('categories').value;

    const sp= new sanpham();

    sp.setNameProduct(ten);
    sp.setPrice(gia);
    sp.setImg(hinhanh);
    sp.setCate(cate)
    const db = new database()
    db.addProduct(sanphamApi,ten,gia,cate,hinhanh);
    
    readProduct();
}



function chon(id) {
    axios.put(sanphamApi + "/" + id)
        .then(function (response) {
            // Handle successful response
            console.log('Delete', response.data);
        })
        .catch(function (error) {
            // Handle error
            console.error('POST Error:', error);
        });
}

function check(t) {
    var tx = t.target.parentElement.parentElement.children[2].value;
    var tn = t.target.parentElement.parentElement.children[1].innerHTML;
    alert(`bạn đã mua mặt hằng ${tn} với số lượng ${tx}`);
}

function show(cource) {
    const laptop = document.querySelector(".laptop");
    const phone = document.querySelector(".phone");
    const tablet = document.querySelector(".tablet");

    const listDiv = document.createElement("div");
    // listDiv.id = "list";
    listDiv.classList.add("d-inline-block", "me-3", "shadow-lg", "mb-5", "bg-body-tertiary" ,"rounded");

    const div = document.createElement("div");
    div.classList.add("d-grid", "gap-2", "d-md-flex", "justify-content-between", "mt-2");
    div.style.clear="both"

    const h3 = document.createElement("h3");
    h3.textContent = cource.ten;
    h3.classList.add("text-uppercase","p-2", "mb-0", "text-primary")

    const p1 = document.createElement("p");
    p1.textContent = cource.gia +" VND";
    p1.classList.add("float-end", "p-2", "mb-1", "text-success")

    const p2 = document.createElement("p");
    p2.textContent = cource.description;

    const img = document.createElement("img");
    img.height = 300;
    img.classList.add('w-100','card-img-top',"border", "border-top-0", "border-start-0", "border-end-0","border-primary");
    img.src = cource.image;

    const br = document.createElement("br");

    const input = document.createElement("input");
    input.type = "number";
    input.value="1"
    input.min="0";
    input.classList.add('txt',"w-100", "p-2");


    const chiTietButton = document.createElement("button");
    chiTietButton.textContent = "thêm vào giỏ hàng";
    chiTietButton.classList.add("btn", "btn-primary", "me-md-2" ,"p-2", "mb-2", "mx-2")
    chiTietButton.addEventListener("click", addToCart);

    const muaButton = document.createElement("button");
    muaButton.textContent = "mua ngay";
    muaButton.classList.add("btn", "btn-primary" ,"p-2", "mb-2", "mx-2");
    muaButton.addEventListener("click", check);

    const id = document.createElement('input');
    id.value=cource.id;
    id.type = "hidden";

    // const xoaButton = document.createElement("button");
    // xoaButton.textContent = "";
    // xoaButton.classList.add()
    // xoaButton.addEventListener("click", () => xoa(cource.id));

    // const editButton = document.createElement("button");
    // editButton.textContent = "edit";

    // editButton.addEventListener("click", () => chon(cource.id));

    // Append all elements to the listDiv
    if(cource.cate=="Laptop"){
    laptop.appendChild(listDiv);

    listDiv.appendChild(img);
    listDiv.appendChild(h3);
    // listDiv.appendChild(p2);
    // listDiv.appendChild(br);
    listDiv.appendChild(input);
    listDiv.appendChild(p1);
    listDiv.appendChild(div);
    div.appendChild(chiTietButton);
    div.appendChild(muaButton);
    listDiv.appendChild(id);
}else if(cource.cate=="Phone"){
    phone.appendChild(listDiv)
    listDiv.appendChild(img);
    listDiv.appendChild(h3);
    // listDiv.appendChild(p2);
    // listDiv.appendChild(br);
    listDiv.appendChild(input);
    listDiv.appendChild(p1);
    listDiv.appendChild(div);
    div.appendChild(chiTietButton);
    div.appendChild(muaButton);
    listDiv.appendChild(id);

}else{
    tablet.appendChild(listDiv);

    listDiv.appendChild(img);
    listDiv.appendChild(h3);
    // listDiv.appendChild(p2);
    // listDiv.appendChild(br);
    listDiv.appendChild(input);
    listDiv.appendChild(p1);
    listDiv.appendChild(div);
    div.appendChild(chiTietButton);
    div.appendChild(muaButton);
    listDiv.appendChild(id);

}

    // Append the listDiv to the desired location in the DOM
    // document.body.appendChild(listDiv);


}

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */}

//         `


