
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Happy Birthday, Jihan 💖\nOn this special day, I just want you to know how much you mean to me. Youre not just someone who came into my life, youre the reason behind my smile every single day. May all the beautiful things in life always find their way to you, because you truly deserve the best. Im grateful to have met you, and I hope in the years to come, I can keep celebrating moments like this. Happy birthday, Jihan. Keep shining, like a star that never fades in my night sky.').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 100); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
