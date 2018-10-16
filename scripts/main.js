// ====================== Selected Elements ===========================
const galleryArea = document.querySelector('.pictures-container');


// ========================== Functions ===============================
/* window.onload = function() {
} */

const displayImage = () => {
    const infoAll = photoInfo;
    infoAll.forEach( individual => {
        // let personName = individual.firstName.toLowerCase().trim();         // Remove whitespace from both sides of a string
        //let personName = individual.src.trim();                               
        //console.log(personName);
        
        let imageAndInfo = document.createElement('div');
        imageAndInfo.classList.add('individual-info');
        imageAndInfo.innerHTML = `
            <img src="./images/${individual.src.trim()}" alt="${individual.firstName.toLowerCase().trim()}" class="personalImg" width="100%" onclick="popup(this)">
            <p>${individual.firstName} ${individual.lastName}</p>
        `;

        let modalDiv = document.createElement('div');
        modalDiv.classList.add('modal');
        //modalDiv.classList.add(`modal-${individual.firstName.toLowerCase().trim()}`);
        modalDiv.id = 'imgModal';
        let personInfo = document.createElement('div');
        personInfo.classList.add('modal-content');
        personInfo.innerHTML = `
            <a href="#" class="close">×</a>
           
            <div class='container-img-info-popup'>
                <div class='popup-img'>
                    <img src="./images/${individual.src.trim()}" alt="-${individual.alt}">
                </div>
                <div class='popup-information'>
                    <p>${individual.firstName} ${individual.lastName}</p>
                    <p>${individual.title} @ Integrify,</p>
                    <p>Since ${individual.joinedOn}</p>
                    <hr> 
                    <br>
                    <p><span>Nationality:</span> ${individual.nationality}</p>
                    <p><span>Skills:</span> ${individual.skills ? individual.skills.join(", "): '-'} </p>
                    <p><span>Why decided to be Software Developer:</span>
                        ${individual.whySoftwareDeveloper ? individual.whySoftwareDeveloper: '-'}
                    </p>
                    <p><span>Long-term vision:</span>
                        ${individual.longTermVision ? individual.longTermVision: '-'}
                    </p>
                    <p><span>Motivation:</span>
                        ${individual.motivatesMe ? individual.motivatesMe: '-' }
                    </p>
                    <p><span>Favorite quote:</span>
                        ${individual.favoriteQuote ? individual.favoriteQuote: '-' }
                    </p>
                </div>
            </div>
            <div class='nav-container'>
                <div class='nav prev-nav'>
                    <button>&lt;</button>
                </div>
                <div class='nav next-nav'>
                    <button>&gt;</button>
                </div>
            </div>
        `;

        modalDiv.appendChild(personInfo);
        imageAndInfo.appendChild(modalDiv);
        galleryArea.appendChild(imageAndInfo);
    })
}

// add eventListener inline on <img> element above
const popup = (element) => {            
    //console.log(element);
    //console.log(element.alt);
    let targetedPopup = document.querySelector(`img[alt = '${element.alt}'] ~ .modal`);
    targetedPopup.style.display = 'block';

    let closePopup = document.querySelector(`img[alt = '${element.alt}'] ~ .modal a`);
    closePopup.addEventListener('click', () => {
        targetedPopup.style.display = 'none';
    });

    /* --- Clicking anywhere will close the modal, including the its modal area  
    targetedPopup.addEventListener('click', () => {
        targetedPopup.style.display = 'none';
    }); */

    // When user clicks anywhere outside of the Modal, close Modal
    window.onclick = function(event) {
        if (event.target == targetedPopup) {
        targetedPopup.style.display = "none";
        }
    }

    /* let prevBtn = document.querySelector(`img[alt = '${element.alt}'] ~ .modal .prev-nav button`);
    let nextBtn = document.querySelector(`img[alt = '${element.alt}'] ~ .modal .next-nav button`);
        //console.log(prevBtn);
        //console.log(nextBtn);
    
    let nextModal = element.parentNode.nextElementSibling.children[2];
        console.log(nextModal);
    nextBtn.addEventListener('click', () => {
        nextModal.style.display = 'block';
    }); */
    

    

    /* let popup = event.target.nextElementSibling.nextElementSibling;
    popup.style.display = 'block'; */
}

// ======================== Calling functions =========================
setTimeout(displayImage, 100);
