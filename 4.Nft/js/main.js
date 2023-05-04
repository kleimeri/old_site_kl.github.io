const time = 2000;
const step = 1;

function outNum(num, elem) {
  let e = document.querySelector(".block_2_in_box_2_boxs_1_number");
  n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    e.innerHTML = n;
  }, t);
}

outNum(17, ".block_2_in_box_2_boxs_1_number");



