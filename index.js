const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    // Scroll ke posisi target dengan smooth scrolling
    targetElement.scrollIntoView({ behavior: "smooth" });

    // Hapus 'active' class dari semua link
    navLinks.forEach((link) => link.classList.remove("active"));

    // Tambah 'active' class ke link yang diklik
    this.classList.add("active");
  });
});

const slides = document.querySelector(".slides");
let currentSlide = 0;

function showSlide(index) {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.children.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide =
    (currentSlide - 1 + slides.children.length) % slides.children.length;
  showSlide(currentSlide);
}

// Auto Slide
setInterval(() => {
  nextSlide();
}, 3000);

//Script Back Home
function goBack() {
  window.history.back();
}

//Script send email
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;
  Email.send({
    SecureToken : "3ffa5903-9253-4b39-a715-07b7d126da0a",
    To: "fandipraest@gmail.com",
    From: "fandipraest@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then(
    message => {
      if (message == "OK") {
        Swal.fire({
          title: "Terima Kasih!",
          text: "Pesan berhasil dikirimkan!",
          icon: "success"
        });
      }
    }
  )
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
    if (items[1].value != "") {
      checkEmail();
    }
    items[1].addEventListener("keyup", () => {
      checkEmail();
    });
    item.addEventListener("keyup", () => {
      if (item.value != '') {
        item.classList.remove("error");
      item.parentElement.classList.remove("error");
      }
      else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const errorTxtEmail = document.querySelector(".error-text.email")

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != ""){
      errorTxtEmail.innerText = "Enter a valid email address";
    }
    else {
      errorTxtEmail.innerText = "Email can't be blank";
    }
  }
  else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
    sendEmail();

    form.reset();
    return false;
  }
});
