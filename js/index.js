const questionAnswer = document.querySelectorAll('.question-answer');
const mainImage = document.getElementById('mainImage');
const imgPattern = document.getElementById('imagePattern');

questionAnswer.forEach(qAnswer => {
  qAnswer.addEventListener('click',()=>{
    questionAnswer.forEach(qA=>{
      qA.classList.remove('answer-enabled');
      qA.classList.add('answer-disabled');

    })

    qAnswer.classList.add('answer-enabled');
      qAnswer.classList.remove('answer-disabled');
  });
  
});

const updateMainImage = () => {
  if (window.innerWidth > 1000) {
    mainImage.src = "../images/illustration-woman-online-desktop.svg";
    imgPattern.src = '../images/bg-pattern-desktop.svg';
  } else {
    mainImage.src = "../images/illustration-woman-online-mobile.svg";
    imgPattern.src = '../images/bg-pattern-mobile.svg';
  }
}
updateMainImage();

window.addEventListener("resize", updateMainImage);