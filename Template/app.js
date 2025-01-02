
const copyBtn = document.getElementById('copy_button');
const input = document.getElementById('input');

copyBtn.addEventListener("click", ()=>{
    input.select();
    navigator.clipboard.writeText(input.value);

    const buttonIcon = document.getElementById("button_icon");
    buttonIcon.setAttribute("src", "./assets/check.png");

    const toolTipText = copyBtn.querySelector(".tool-tip-text");
    toolTipText.textContent = `Copied.`;
    console.log(input.value)
    setTimeout(() => {
      toolTipText.textContent = "copy";
      buttonIcon.setAttribute("src", "./assets/clipboard.png");
  }, 5000);

  })