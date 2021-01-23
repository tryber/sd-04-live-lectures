window.onload = () => {
  const clientSocketIo = window.io('http://localhost:3000');

  clientSocketIo.on('myNickname', (name) => {
    const divUsers = document.getElementById('users')
    const li = document.createElement('li')
      li.setAttribute('data-name', 'user-online')
    li.textContent = name;

    divUsers.append(li)
  });

  clientSocketIo.on('newUser', (username) => {
    const divUsers = document.getElementById('users')
    const li = document.createElement('li')
      li.setAttribute('data-name', 'user-online')
    li.textContent = username;

    divUsers.append(li)
  });
  
}
