function openServer(name, id, img) {
  main.innerHTML = "";

  const menu = document.createElement('div');
  menu.classList.add('server-info');
  menu.innerHTML = `<img src="${img}" alt="${name}">
    <h1>${name}</h1>
    <h2>Server Info</h2>
    <span>Name: ${name}</span>
    <span>Id: ${id}</span>
    <span>Image URL: ${img}</span>`;
  main.appendChild(menu);

  console.log(menu);
  return menu;
}