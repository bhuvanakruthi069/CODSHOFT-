//job landing page//
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 0;
  background-color: #f5f5f5;
  color: #333;
}

h1, h2 {
  color: #003366;
}

a {
  color: #0066cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

ul {
  list-style-type: none;
  padding: 0;
}

input[type="text"],
input[type="email"],
input[type="file"] {
  width: 100%;
  padding: 10px;
  margin: 5px 0 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="submit"],
button {
  padding: 10px 20px;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover,
button:hover {
  background-color: #004999;
}

@media (max-width: 600px) {
  body {
    margin: 10px;
  }

  h1 {
    font-size: 22px;
  }

  input, button {
    width: 100%;
  }
}
