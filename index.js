document.getElementById('btn-submit').addEventListener('click', function(){
    const textBox = document.getElementById('text-box');
    const areaValue = textBox.value;
    
    const p = document.createElement('p');
    p.innerText = areaValue;
    

    const mainContainer = document.getElementById('review');
    mainContainer.appendChild(p);
    
    textBox.value = '';
})