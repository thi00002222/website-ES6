var courseApi = 'http://localhost:3000/sanpham' ;

function xoa(id){
    axios.delete(courseApi+"/"+id)
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
function doc(){
  axios.get(courseApi)
  .then(function (response) {
    // Handle successful response
    hienthongtin(response.data)
    // console.log('GET Response:', response.data);
  })
  .catch(function (error) {
    // Handle error
    console.error('GET Error:', error);
  });
}
function them(){
    const name = document.querySelector('input[name = "tensp"]').value;
    const description = document.querySelector('input[name = "description"]').value;
    const hinh = document.querySelector("#img_preview").getAttribute("src");
    // console.log(hinh);
     
    axios.post(courseApi, {      
      name: name,
      description: description,
      image: hinh
      })
      .then(function (response) {
        // Handle successful response
        hienthongtin(response.data)
        // console.log('POST Response:', response.data);
      })
      .catch(function (error) {
        // Handle error
        console.error('POST Error:', error);
      });
      doc();
}

function update(id){
    axios.put(courseApi+"/"+id)
        .then(function (response) {
          // Handle successful response
          console.log('Delete', response.data);
        })
        .catch(function (error) {
          // Handle error
          console.error('POST Error:', error);
        });
  }
  function hienthongtin(courses){
    var list = document.querySelector('#list');
    // console.log(courses);
    var html = courses.map(function(cource){
        return `<div class="sp"> 
        <li>
        <h1>${cource.id}</h1></li>
        <p>${cource.name}</p>
        <p>${cource.description}</p> 
        <img height ="100" with="150" src="${cource.image}">
        <button onclick='xoa("${cource.id}")'>Xoa</button>
        <button onclick="chon(this,${cource.id})">edit</button>
        </div>
        `;
    });
    list.innerHTML = html.join('');
}

  
  
