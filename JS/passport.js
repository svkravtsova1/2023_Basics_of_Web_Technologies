const node_for_click = document.getElementById("for_click")

function find_edit(){
    const Surname = document.getElementsByTagName('div')[3]
    console.log(Surname.innerHTML)
    Surname.innerHTML = "Kravtsova"

    const Name = document.getElementsByTagName('div')[4]
    console.log(Name.innerHTML)
    Name.innerHTML = "Sofiya"

    const Year = document.getElementsByTagName('div')[7]
    console.log(Year.innerHTML)
    Year.innerHTML = "XVI.III.MMIV"
}

node_for_click.addEventListener("click",find_edit)