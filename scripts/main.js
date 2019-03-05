// ====================== Selected Elements ===========================
const galleryArea = document.querySelector(".pictures-container");

// ========================== Functions ===============================

const displayImage = () => {
  const infoAll = photoInfo;
  infoAll.forEach(individual => {
    let imageAndInfo = document.createElement("div");
    imageAndInfo.classList.add("individual-info");
    imageAndInfo.innerHTML = `
            <img src="./images/${individual.src.trim()}" alt="${individual.firstName
      .toLowerCase()
      .trim()}" class="personalImg" width="100%" onclick="popup(this)">
            <p>${individual.firstName} ${individual.lastName}</p>
        `;

    let modalDiv = document.createElement("div");
    modalDiv.classList.add("modal");
    //modalDiv.classList.add(`modal-${individual.firstName.toLowerCase().trim()}`);
    modalDiv.id = "imgModal";
    let personInfo = document.createElement("div");
    personInfo.classList.add("modal-content");
    personInfo.innerHTML = `
            <a href="#" class="close" onclick="closingBtn(this)">×</a>
           
            <div class='container-img-info-popup'>
                <div class='popup-img'>
                    <img src="./images/${individual.src.trim()}" alt="-${
      individual.alt
    }">
                </div>
                <div class='popup-information'>
                    <p>${individual.firstName} ${individual.lastName}</p>
                    <p>${individual.title} @ Integrify,</p>
                    <p>Since ${individual.joinedOn}</p>
                    <hr> 
                    <br>
                    <p><span>Nationality:</span> ${individual.nationality}</p>
                    <p><span>Skills:</span> ${
                      individual.skills ? individual.skills.join(", ") : "-"
                    } </p>
                    <p><span>Why decided to be Software Developer:</span>
                        ${
                          individual.whySoftwareDeveloper
                            ? individual.whySoftwareDeveloper
                            : "-"
                        }
                    </p>
                    <p><span>Long-term vision:</span>
                        ${
                          individual.longTermVision
                            ? individual.longTermVision
                            : "-"
                        }
                    </p>
                    <p><span>Motivation:</span>
                        ${individual.motivatesMe ? individual.motivatesMe : "-"}
                    </p>
                    <p><span>Favorite quote:</span>
                        ${
                          individual.favoriteQuote
                            ? individual.favoriteQuote
                            : "-"
                        }
                    </p>
                </div>
            </div>
            <div class='nav-container'>
                <div class='nav prev-nav' onclick="prevPic(this)">
                    <button>&lt;</button>
                </div>
                <div class='nav next-nav' onclick="nextPic(this)">
                    <button>&gt;</button>
                </div>
            </div>
        `;

    modalDiv.appendChild(personInfo);
    imageAndInfo.appendChild(modalDiv);
    galleryArea.appendChild(imageAndInfo);
  });
};

// add eventListener inline on <img> element above
const popup = element => {
  let targetedPopup = document.querySelector(
    `img[alt = '${element.alt}'] ~ .modal`
  );
  targetedPopup.style.display = "block";

  /* let closePopup = document.querySelector(`img[alt = '${element.alt}'] ~ .modal a`);
    closePopup.addEventListener('click', () => {
        targetedPopup.style.display = 'none';
    }); */

  /* --- Clicking anywhere will close the modal, including the its modal area  
    targetedPopup.addEventListener('click', () => {
        targetedPopup.style.display = 'none';
    }); */
};

const nextPic = e => {
  let itself = e.parentNode.parentNode.parentNode;
  let checkNext =
    e.parentNode.parentNode.parentNode.parentNode.nextElementSibling;
  if (checkNext == null) {
    let firstPic = document.querySelector(
      ".pictures-container .individual-info:first-child .modal"
    );
    itself.style.display = "none";
    firstPic.style.display = "block";
  } else {
    let next = checkNext.children[2];
    itself.style.display = "none";
    next.style.display = "block";
  }
};

const prevPic = e => {
  let itself = e.parentNode.parentNode.parentNode;
  let checkPrev =
    e.parentNode.parentNode.parentNode.parentNode.previousElementSibling; // In case of the first picture, have to connect to the last picture
  if (checkPrev == null) {
    let lastPic = document.querySelector(
      ".pictures-container .individual-info:last-child .modal"
    );
    itself.style.display = "none";
    lastPic.style.display = "block";
  } else {
    let prev = checkPrev.children[2];
    itself.style.display = "none";
    prev.style.display = "block";
  }
};

const closingBtn = e => {
  let modal = e.parentNode.parentNode;
  modal.style.display = "none";
};

// When user clicks anywhere outside of the Modal, close Modal
window.onclick = function(event) {
  let modal = event.target.classList.contains("modal"); // Return a boolean value
  if (modal) {
    event.target.style.display = "none";
  }
};

// ======================== Calling functions =========================
setTimeout(displayImage, 100);
