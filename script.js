const timeStamp = '1640965312903';
const publicKey = '#';
const hash = '#';
let url = new URL(window.location.href);
let search = url.searchParams.get('search');

let rand = Math.floor(Math.random() * 300);
let limit = 12;

build(setLink(search,limit, rand));


function build(link)
{
    fetch(link)
    .then((response) => {
        return response.json();
    })
    .then((jsonParsed) => {
        jsonParsed.data.results.forEach(element => {

            if(search != null)
            {
                const srcImg = element.thumbnail.path + '.' + element.thumbnail.extension;
                const comicName = element.name;
                createDivComic(srcImg,comicName);
            }
            else
            {
                const srcImg = element.thumbnail.path + '.' + element.thumbnail.extension;
                const comicName = element.name;
                createDivComic(srcImg,comicName);
            }
        });
    })
}

function createDivComic(srcImg, comicName)
{
    // comic wrapper
    const divComicWrapper = document.createElement('div');
    divComicWrapper.classList.add('comic-wrapper');
    divComicWrapper.classList.add('mb-4');

    // thumb
    const divThumb = document.createElement('div');
    divThumb.classList.add('thumb');
    divThumb.style.borderRadius = '50%';
    divThumb.style.border = '4px solid #FFF';   
    const imgComic = document.createElement('img');
    imgComic.src = srcImg;
    imgComic.width = '250';
    imgComic.height = '250';
    imgComic.style.borderRadius = '50%';
    divThumb.appendChild(imgComic);

    // name
    const divName = document.createElement('div');
    const pElement = document.createElement('p');
    divName.classList.add('name');
    divName.classList.add('py-3');
    divName.classList.add('d-flex');
    divName.classList.add('justify-content-center');
    divName.classList.add('align-items-center');
    pElement.classList.add('m-0');
    pElement.classList.add('p-0');
    pElement.classList.add('text-white');
    pElement.style.fontSize = '23px';
    pElement.style.maxWidth = '240px';
    pElement.style.textAlign = 'center';
    pElement.textContent = comicName;
    divName.appendChild(pElement);

    divComicWrapper.appendChild(divThumb);
    divComicWrapper.appendChild(divName);

    document.querySelector('.container-wrapper').appendChild(divComicWrapper);
}

function setLink(search, limit, offset)
{
    if(search != null)
    {
        return `http://gateway.marvel.com/v1/public/characters?name=${search}&ts=1640965312903&apikey=cffbc815ab3d7288073d51b387ad7305&hash=9403ade52be83478e2ce3ca0535a9a3c`;
    }
    else
    {
        return `http://gateway.marvel.com/v1/public/characters?ts=1640965312903&apikey=cffbc815ab3d7288073d51b387ad7305&hash=9403ade52be83478e2ce3ca0535a9a3c&limit=${limit}&offset=${offset}`;
    }
}