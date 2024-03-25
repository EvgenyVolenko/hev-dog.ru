const urlParams = new URLSearchParams(window.location.search);
const idValue = urlParams.get('id');
console.log(idValue);

const myDogString = localStorage.getItem('objectDog');
const myDog = JSON.parse(myDogString);
console.log(myDog);

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

const dogRewardsList = dogMain.querySelector('.dog__main__rewards');

if (myDog.dog_progress.length > 0) {
    for (let i = 0; i < myDog.dog_progress.length; i++) {
        console.log(myDog.dog_progress.length)
        const dogReward = document.createElement('li');
        dogReward.classList.add('dog__main__reward');
        dogReward.textContent = myDog.dog_progress[i];

        dogRewardsList.appendChild(dogReward);
    }
} else {
    const dogRewards = dogMain.querySelector('h2.dog__rewards');
    console.log(dogRewards);
    dogRewards.hidden = true;
    dogRewardsList.hidden = true;
}

