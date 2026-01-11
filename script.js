function toggle(btn) {
  const status = btn.previousElementSibling.querySelector("span");

  if (status.classList.contains("on")) {
    status.classList.remove("on");
    status.classList.add("off");
    status.innerText = "Desligado";
    btn.innerText = "Ligar";
  } else {
    status.classList.remove("off");
    status.classList.add("on");
    status.innerText = "Ligado";
    btn.innerText = "Desligar";
  }
}

