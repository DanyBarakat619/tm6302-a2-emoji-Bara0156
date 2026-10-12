const emojiCodes = [
  128512,
  128514,
  128525,
  128516,
  128526,
  128513,
  128522,
  128540,
  128558,
  128561,
  128077,
  128293,
  127881,
  128640,
  127829
];

const gallery = document.querySelector('#gallery');

function showEmojis(count = emojiCodes.length) {
  gallery.innerHTML = '';

  for (let index = 0; index < count; index++) {
    const code = emojiCodes[index];
    const emoji = String.fromCodePoint(code);

    const card = document.createElement('div');
    card.classList.add('emoji-card');

    const emojiCharacter = document.createElement('span');
    emojiCharacter.classList.add('emoji');
    emojiCharacter.textContent = emoji;

    const emojiCode = document.createElement('p');
    emojiCode.classList.add('emoji-code');
    emojiCode.textContent = code;

    card.append(emojiCharacter, emojiCode);
    gallery.append(card);
  }
}

showEmojis();
