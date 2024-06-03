var cartApi="http://localhost:3000/cart"

function addToCart(t) {
    // lấy thông tin 
    var hinhanh = t.target.parentElement.parentElement.children[0].src;
    var name = t.target.parentElement.parentElement.children[1].innerHTML;
    var sl = t.target.parentElement.parentElement.children[2].value;
    var gia = t.target.parentElement.parentElement.children[3].innerText;
    var id = t.target.parentElement.parentElement.children[5].value;
    // console.log(hinhanh);
    // console.log(name);
    // console.log(sl);
    // console.log(gia);
    // console.log(id);
    const gh= new cart();
    gh.setID(id);
    gh.setName(name);
    gh.getIMG(hinhanh);
    gh.getPrice(gia);
    gh.setSL(sl);

    const db = new database();
    db.addCart(cartApi,id,name,gia,hinhanh,sl);
}

function showCart(){
    axios.get(cartApi)
        .then(function (response) {
            // console.log('GET Response: ',response.data);
            cartshow(response.data)
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
};

function xoasp(id) {
    axios.delete(cartApi + "/" + id)
        .then(function (response) {
            // Handle successful response
            console.log('Delete', response.data);
        })
        .catch(function (error) {
            // Handle error
            console.error('POST Error:', error);
        });
    }

function cartshow(courses){
    var i=0;
    var text= courses.map(function (cource){
        i++;
        return `
        <tr><td>${i}</td>
        <td>${cource.ten}</td>
        <td><img src="${cource.image}" width="100"/></td>
        <td>${cource.gia}</td>
        <td>${cource.sl}</td>
        <td> ${Number(cource.sl) * Number(cource.gia.slice(0, -3))}.000 VND</td>
        <td><button onclick="xoasp('${cource.id}')">xoa</button></td>
        </tr>
        `
}
)
tbody.innerHTML=text.join('');

}

