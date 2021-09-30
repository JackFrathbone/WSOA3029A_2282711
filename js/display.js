const header = document.createElement('header');

const SiteTitle = document.createElement('div');
SiteTitle.className = "siteTitle";
SiteTitle.innerText = "Game State SA"
header.appendChild(SiteTitle);


const nav = document.createElement('nav');
nav.className = "menu";
header.appendChild(nav);

const menuList = document.createElement('ul');


const MenuItems = [
    { title: 'Home', link: './index.html' },
    { title: 'Blogs', link: './Blogs.html' },
    { title: 'About', link: './About.html' },
    { title: 'Credits', link: './Credits.html' },
    { title: 'Contact', link: './Contact.html' }
];

for (let item of MenuItems) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = item.title;
    a.href = item.link;
    li.appendChild(a);
    menuList.appendChild(li);
}



nav.appendChild(menuList);
///////////////////////////////////////
const footer = document.createElement('footer');

const creditText = document.createElement('p');
creditText.innerText = "@Jack Rathbone 2021";
footer.append(creditText);

document.body.prepend(header);
document.body.appendChild(footer);

