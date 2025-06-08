
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // Tambahkan styling agar teks rata kanan-kiri (justified)
    const style = document.createElement("style");
    style.innerHTML = `
      #title {
        text-align: justify;
        white-space: pre-wrap;
        font-family: 'Courier New', monospace;
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
      }
    `;
    document.head.appendChild(style);

    const titles = ('Happy Birthday, Jihan 💫/nOn this special day, I just want to say thank you not just for the moments, but for the meaning you once gave to my days.I hope life keeps bringing you beautiful things. You deserve that. Im truly grateful for ever knowing you, and this little message just a quiet gift, a final one. Keep shining, like a star that once lit up my night sky. Happy Birthday. Always.').split('');
    
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 70);
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
