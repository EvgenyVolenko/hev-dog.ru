const urlParams = new URLSearchParams(window.location.search);
const idValue = urlParams.get('id');
// console.log(idValue);

const myDogString = localStorage.getItem('objectDog');
const myDog = JSON.parse(myDogString);
// console.log(myDog);

const dog = document.querySelector('section.dog');

const dogName = dog.querySelector('h1.dog__head');
dogName.textContent = myDog.dog_name;

const dogMain = dog.querySelector('div.dog__main');

const dogImg = dogMain.querySelector('img');
dogImg.src = myDog.dog_imgs[0];
dogImg.alt = myDog.dog_name;

const dogBirthday = dogMain.querySelector('.dog__main__birthday');
dogBirthday.textContent = myDog.dog_birthday;

const dogDeath = dogMain.querySelector('.dog__main__death');
if (myDog.dog_death) {
    const dogDeathData = dogDeath.querySelector('.dog__main__death__data');
    dogDeathData.innerHTML = 'Дата смерти<br>' + myDog.dog_death;
    const dogDeathCause = dogDeath.querySelector('.dog__main__death__cause');
    dogDeathCause.innerHTML = 'Причина смерти<br>' + myDog.dog_death_cause;
} else {
    dogDeath.hidden = true;
}

const fillParams = function (array, selector, tag) {
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            const dogParam = document.createElement('li');
            dogParam.classList.add(selector);
            dogParam.textContent = array[i];

            tag.lastElementChild.appendChild(dogParam);
        }
    } else {
        tag.hidden = true;
    }
}

const dogRewards = dogMain.querySelector('div.dog__rewards');
fillParams(myDog.dog_progress, 'dog__main__reward', dogRewards);

const dogChecks = dogMain.querySelector('div.dog__checks');
fillParams(myDog.dog_checks, 'dog__main__reward', dogChecks);

const dogTrainings = dogMain.querySelector('div.dog__trainings');
fillParams(myDog.dog_trainings, 'dog__main__reward', dogTrainings);

const dogHealth = dogMain.querySelector('div.dog__health');
fillParams(myDog.dog_health, 'dog__main__reward', dogHealth);

const dogOwner = dogMain.querySelector('div.dog__owner');
const dogOwnerName = document.createElement('p');
const dogOwnerCity = document.createElement('p');
dogOwnerName.textContent = myDog.dog_owner[0];
dogOwnerCity.textContent = ', ' + myDog.dog_owner[1];
dogOwner.lastElementChild.appendChild(dogOwnerName);
dogOwner.lastElementChild.appendChild(dogOwnerCity);

const dogGallery = dog.querySelector('div.dog__gallery');
myDog.dog_imgs.forEach(element => {
    const dogGalleryImgA = document.createElement('a');
    dogGalleryImgA.href = '#';
    dogGalleryImgA.classList.add('dog__gallery__item');
    dogGallery.lastElementChild.appendChild(dogGalleryImgA);
    const dogGalleryImg = document.createElement('img');
    dogGalleryImg.src = element;
    dogGalleryImgA.appendChild(dogGalleryImg);
});