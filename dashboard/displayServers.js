function displayServers() {
  const serversData = JSON.parse(localStorage.getItem("servers")) || [];

  if (serversData.length === 0) {
    container.innerHTML = "";

    const homeBtn = document.createElement('div');
    homeBtn.classList.add('server');
    homeBtn.innerHTML = '<i class="fa-solid fa-house" onclick="displayHome()"></i>'
    container.appendChild(homeBtn);
  } else {
    container.innerHTML = "";

    const homeBtn = document.createElement('div');
    homeBtn.classList.add('server');
    homeBtn.innerHTML = '<i class="fa-solid fa-house" onclick="displayHome()"></i>'
    container.appendChild(homeBtn);

    serversData.forEach((item) => {
      const server = document.createElement('div');
      server.classList.add('server');
      server.innerHTML = `<img src="${item.img}" alt="${item.name}" onclick="openServer('${item.name}', ${item.id}, '${item.img}')">`;
      container.appendChild(server);
    });
  }

  console.log(container.children);
  return container.children;
}

displayServers();