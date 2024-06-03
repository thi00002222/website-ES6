var userApi="http://localhost:3000/users"
function addUser(){
    const username=document.getElementById("floatingInput").value;
    const password=document.getElementById("floatingPassword").value;
    
    const user = new users();
    user.setUsername(username);
    user.setPassWord(password);
    user.getIsAdmin();
    user.getStatus();
    const db = new database();
    db.them(userApi, user)
}

function showUser(){
    axios.get(userApi)
        .then(function (response) {
            // console.log('GET Response: ',response.data);
            user(response.data)
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}

function user(courses){
    var i=0;
    var isAd='', status='';
    var text= courses.map(function (cource){
        i++;
        cource.isadmin==0? isAd+=`người dùng`: isAd+='Admin';
        cource.status==1? status+=`đang mở`: status+='đã khóa';


    return `
    <tr><td>${i}</td>
    <td>${cource.username}</td>
    <td>${isAd}</td>
    <td>${status}</td>
    <td><button onclick="doi('${cource.id}')" class="btn btn-primary float-end text-uppercase">thay đổi</button><td>
    </tr>
    ${isAd=''}
    ${status=''}
    `
}
)

tbody.innerHTML=text.join('');

}

function doi(id) {
  console.log(id);
  var u= new users();
  var i= 1;
  axios.get(userApi + "/" + id)
        .then(function (response) {
            // console.log('GET Response: ',response.data);
            var username= response.data.username;
            var password= response.data.password;
            var isadmin= response.data.isadmin;
            var status= response.data.status;
            status==1? status=0:status=1;
            console.log(password);
            axios.put(userApi + "/" + id,{id,username,password,status,isadmin})
            
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });

}

function change(){}

async function kiemtra(){
    const db = new database();
    const users = await db.doc(userApi);
    const username = document.querySelector('#floatingInput').value;
    const password = document.querySelector('#floatingPassword').value;
    kq = 0;
    po = -1;
    for(let i = 0; i<users.length;i++){
      if(users[i]['username'] == username && users[i]['password'] == password && users[i]['status']==1){
        console.log(users);
        kq=1;
        po=users[i]['isadmin'];
      }
    }
    if (kq==1 && po == 1) {
      window.location = "../html/admin.html";
    }
    if(kq==1 && po==0){
      window.location = "../html/index.html";
    }
    if(kq == 0 && po == -1){
      alert("Tài khoản hoặc mật không chính xác");
    }
  }