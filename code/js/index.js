const productList = document.querySelector("ul.list-group");

async function getProducts() {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();

  productList.innerHTML = "";
  for (const product of data) {
    const li = document.createElement("li");
    li.textContent = product.name;
    productList.appendChild(li);
  }
}

getProducts();