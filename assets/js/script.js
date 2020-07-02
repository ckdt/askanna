const joinLink = document.querySelector('.js-join');

function scrollThisStuff() {
  console.log('scroll');
  const joinAnchor = document.querySelector('#join');
  joinAnchor.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest'
  });
}

joinLink.addEventListener('click', scrollThisStuff, false);
