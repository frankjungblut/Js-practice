
function trocaNome() {

    const textarea = document.querySelector("textarea");
    const label = document.querySelector("label");

    const textareaValue = textarea.value;

    const labelname = "Hi, " + textareaValue + " Welcome!";

    label.textContent = labelname;

    

    alert(labelname);
}