fetch('cards.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('cardContainer');
    data.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      `;
      cardContainer.appendChild(cardElement);
    });
  })
  .catch(error => console.error(error));
