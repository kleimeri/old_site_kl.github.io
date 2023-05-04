const timeb = 2000;
const stepb = 1;

function outNum(num, elem) {
  let eb = document.querySelector(".block_2_in_box_2_boxs_1_number_3");
  nb = 0;
  let tb = Math.round(timeb / (num / stepb));
  let intervalb = setInterval(() => {
    nb = nb + stepb;
    if (nb == num) {
      clearInterval(intervalb);
    }
    eb.innerHTML = nb;
  }, tb);
}

outNum(23, ".block_2_in_box_2_boxs_1_number_3");