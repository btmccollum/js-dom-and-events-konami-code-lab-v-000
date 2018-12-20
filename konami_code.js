const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let i = 0;

function init() {
  const main = document.body;
  main.addEventListener('keydown', function(e) {
    e.stopPropagation();
    const key = parseInt(e.detail || e.which);
    // console.log(key);
    if (key === code[i]) {
      i++;
        if (i === code.length) {
          alert('You did it!');
        }
    } else {
      i = 0;
    }
  });
}