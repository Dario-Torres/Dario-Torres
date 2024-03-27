function openModal(m){
    fetch("../documents/work_exp.json").then((res) => {
        return res.json();
    }).then((data) => {

        var header = document.getElementById("ModalHeader");
        var div = document.getElementById("Content-List");
        header.innerHTML = "";
        div.innerHTML = "";
        header.appendChild(document.createElement("h1")).innerText = data[m].title ;
        header.appendChild(document.createElement("h3")).innerText = data[m].company;
        var content_value = data[m];
        for (var i in content_value.experience){
            div.appendChild(document.createElement("li")).innerText = content_value.experience[i];
            //div.appendChild(document.createTextNode(content_value.experience[i]));
        }

        document.getElementById("WorkModal").style.display = "block";
        document.getElementsByClassName("modal-open")[0].style.overflow = "hidden";
        //console.log(content_value.experience);
    })
}

document.getElementsByClassName("close")[0].onclick = function(){
    document.getElementById("WorkModal").style.display = "none";
    document.getElementsByClassName("modal-open")[0].style.overflow = "auto";
}

window.onclick = function(event) {
    var modal = document.getElementById("WorkModal");
    if (event.target == modal) {
      modal.style.display = "none";
      document.getElementsByClassName("modal-open")[0].style.overflow = "auto";
    }
  }
  