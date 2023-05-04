const timea = 1000;
const stepa = 1;

function outNum(num, elem) {
  let ea = document.querySelector(".block_2_in_box_2_boxs_1_number_2");
  na = 0;
  let ta = Math.round(timea / (num / stepa));
  let intervala = setInterval(() => {
    na = na + stepa;
    if (na == num) {
      clearInterval(intervala);
    }
    ea.innerHTML = na;
  }, ta);
}

outNum(4, ".block_2_in_box_2_boxs_1_number_2");