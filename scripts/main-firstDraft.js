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
            <img src="./images/${individual.src.trim()}" alt="-${individual.alt}" class="personalImg" width="100%">
            <p>${individual.firstName} ${individual.lastName}</p>
        `;

        let modalDiv = document.createElement('div');
        modalDiv.classList.add('modal');
        modalDiv.id = 'imgModal';
        let personInfo = document.createElement('div');
        personInfo.classList.add('modal-content');
        personInfo.innerHTML = `
            <span class="close">&times;</span>
            <div class='container-img-info-popup'>
                <div class='popup-img'>
                    <img src="./images/${individual.src.trim()}" alt="-${individual.alt}" width='360px'>
                </div>
                <div class='popup-information'>
                    <p>${individual.firstName} ${individual.lastName}</p>
                    <p>${individual.title} <span>@ Integrify</span>,</p>
                    <p><span>Since</span> ${individual.joinedOn}</p>
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
        `;

        modalDiv.appendChild(personInfo);
        imageAndInfo.appendChild(modalDiv);
        galleryArea.appendChild(imageAndInfo);
    })
}

const popupInfo = () => {
    /* const infoAll = photoInfo;
    infoAll.forEach( individual => {

              
        let modalDiv = document.createElement('div');
        modalDiv.classList.add('modal');
        modalDiv.id = 'imgModal';
        let personInfo = document.createElement('div');
        personInfo.classList.add('modal-content');
        personInfo.innerHTML = `
            <span class="close">&times;</span>
            <div class='container-img-info-popup'>
                <div class='popup-img'>
                    <img src="./images/${individual.src.trim()}" alt="-${individual.alt}" width='360px'>
                </div>
                <div class='popup-information'>
                    <p>${individual.firstName} ${individual.lastName}</p>
                    <p>${individual.title} <span>@ Integrify</span>,</p>
                    <p><span>Since</span> ${individual.joinedOn}</p>
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
        `;
        modalDiv.appendChild(personInfo);
        imageAndInfo.appendChild(modalDiv); */

        // Get the modal
        var modal = document.getElementById('imgModal');

        // Get the button that opens the modal
        // var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.querySelector(".close");

        // When the user clicks the button, open the modal 
       /*  btn.onclick = function() {
            modal.style.display = "block";
        } */

        // When the user clicks on <span> (x), close the modal
       /*  span.onclick = function() {
            modal.style.display = "none";
        } */
        span.addEventListener(() => {
            modal.style.display = 'none';
        });

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    //})    
}


// ======================== Calling functions =========================
setTimeout(displayImage, 200);



/* const displayInfo = () => {
    const infoAll = photoInfo;

    infoAll.forEach( individual => {
        let person = document.createElement('div');
        let infoPerson
        for ( let key in individual) {
            infoPerson = `
                <p>${key} : ${individual[key]} </p>
            `;
            
            person.innerHTML += infoPerson;
        }
        // person.innerHTML = infoPerson;
        person.className = 'person-info';
        galleryArea.appendChild(person);
    });
} */