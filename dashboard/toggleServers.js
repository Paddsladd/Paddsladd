function toggleServer(name, id, img) {
  const server = {
    name,
    img,
    id,
  };

  let storedServers = JSON.parse(localStorage.getItem("servers")) || [];

  const serverIndex = storedServers.findIndex(
    (item) => item.name === server.name
  );

  if (serverIndex !== -1) {
    // Server is joined, leave server
    storedServers.splice(serverIndex, 1);
    localStorage.setItem("servers", JSON.stringify(storedServers));
    displayServers();
  } else {
    // Server is not joined, join server
    storedServers.push(server);
    localStorage.setItem("servers", JSON.stringify(storedServers));
    displayServers();
  }

  // Display a success message
  successMessage.textContent = serverIndex !== -1
    ? "Server left!"
    : "Server joined!";
  successMessage.style.display = "flex";

  // Hide the success message after a three seconds
  setTimeout(function () {
    successMessage.style.display = "none";
  }, 3000);

  console.log(server);
  return server;
}