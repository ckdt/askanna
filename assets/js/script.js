const joinLink = document.querySelector('.js-join');
joinLink.addEventListener('click', scrollToJoin, false);

function scrollToJoin(e) {
  e.preventDefault();
  const joinAnchor = document.querySelector('#join');
  joinAnchor.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest'
  });
}

const manifestoLink = document.querySelector('.js-manifesto');
manifestoLink.addEventListener('click', scrollToManifesto, false);

function scrollToManifesto(e) {
  e.preventDefault();
  const manifestoAnchor = document.querySelector('#manifesto');
  manifestoAnchor.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
}
