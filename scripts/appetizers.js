
const Appetizers = () => {
    document.body.style.backgroundImage="url('./imgs/resto-bg.jpg')";
    document.body.style.backgroundRepeat='stretch';
    document.body.style.margin='0';

    const appetizersContent = document.createElement('div');
    appetizersContent.setAttribute('class', 'container');
    appetizersContent.style.display='flex';
    appetizersContent.style.justifyContent='center';
    appetizersContent.style.alignItems='center';
    appetizersContent.style.alignContent='center';
    appetizersContent.style.height='100vh';
    appetizersContent.style.gap='1em';

    const appetizer1 = document.createElement('img')
    appetizer1.setAttribute('class','appetizer1');
    appetizer1.src = './imgs/Creamy-Buko-Melon-Salad.jpg';
    appetizer1.style.maxWidth='300px';
    appetizer1.style.maxHeight='300px';

    const appetizer2 = document.createElement('img')
    appetizer2.setAttribute('class','appetizer2');
    appetizer2.src = './imgs/Tokneneng.jpg';
    appetizer2.style.maxWidth='300px';
    appetizer2.style.maxHeight='300px';

    const appetizer3 = document.createElement('img')
    appetizer3.setAttribute('class','appetizer3');
    appetizer3.src = './imgs/Onions-Rings.jpg';
    appetizer3.style.maxWidth='300px';
    appetizer3.style.maxHeight='300px';

    appetizersContent.appendChild(appetizer1)
    appetizersContent.appendChild(appetizer2)
    appetizersContent.appendChild(appetizer3)

    return appetizersContent;
  };
  
  export default Appetizers;