const parseDogs = JSON.parse(dogsData);
const divDogsGallery = document.querySelector('section.dogs > div.dogs__gallery');
const templateDogItem = dogs_item.content;

for (let i = 0; i < 7; i++) {
    parseDogs.forEach(element => {
        if (element.dog_gender === 'male') {
            const dogItemTemplate = templateDogItem.cloneNode(true);
            dogItemTemplate.querySelector('article.dogs__item > a > img').src = element.dog_imgs[0];
            dogItemTemplate.querySelector('article.dogs__item > a > img').alt = element.dog_name;
            dogItemTemplate.querySelector('article.dogs__item > a > p.dogs__item__name').textContent = element.dog_name;
            dogItemTemplate.querySelector('article.dogs__item > a > p.dogs__item__birthday').textContent = element.dog_birthday;
            dogItemTemplate.querySelector('article.dogs__item > a').href = './dog_male.html?' + element.id;

            divDogsGallery.appendChild(dogItemTemplate);
        }
    });
};