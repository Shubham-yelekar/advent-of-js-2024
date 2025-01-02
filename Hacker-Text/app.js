const word = document.querySelector('.word')
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

word.addEventListener('mouseover', ()=>{
    let iterations = 0 ;

    const interval = setInterval(() => {
        word.innerText  = word.innerText
       .split('')
       .map((letter, index)=>{ 
        if(index < iterations) {
            return word.dataset.text[index]
        }
        return alphabet[Math.floor(Math.random()*26)]})
       .join('').toUpperCase

       if(iterations >= word.dataset.text.length) clearInterval(interval)
        iterations +=1
       console.log(word.innerText)
   }, 100);

})

