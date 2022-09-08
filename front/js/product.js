const id = new URLSearchParams(window.location.search).get("id")
fetch("http://localhost:3000/api/products/"+id)