class database{
    them(user, object){
        axios.post(user, object)
        .then(function (response){response.data})
        .catch(function(error){
            console.error(error);
        });
    };
    addProduct(sanphamApi,ten, gia, cate, hinhanh){
        axios.post(sanphamApi, {
            ten: ten,
            gia: gia,
            cate: cate,
            image: hinhanh
        })
            .then(function (response) {
                hienthithongtin(response.data)
            })
            .catch(function (error) {
                console.log("Error: ", error);
            });
    };
    addCart(cartApi, id, ten, gia, hinhanh, sl){
        axios.post(cartApi, {
            id: id,
            ten: ten,
            gia: gia,
            sl: sl,
            image: hinhanh
        })
        .then(function (response){response.data})
        .catch(function(error){
            console.error(error);
        });
    };
    async doc(courseApi){
        return await axios.get(courseApi)
        .then(function(response){
            return response.data;
        })
        .catch(function(error){
            console.log("GET Error:", error);
        })
    };
    addCate(cateApi,name) {
        axios.post(cateApi, {
            name: name
    })
    .then(function (response){response.data})
        .catch(function(error){
            console.error(error);
        });
}
}