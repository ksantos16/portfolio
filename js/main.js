
let index = document.querySelector('.index');

const links = [
    {
        title: 'Week One',
        label: 'Week 1 Notes',
        url: 'https://ksantos16.github.io/portfolio/week1/index.html'
    }, {
        title: 'Week Two',
        label: 'Week 2 Notes',
        url: 'https://ksantos16.github.io/portfolio/week2/index.html'
    }, {
        title: 'Week Three',
        label: 'Week 3 Notes',
        url: 'https://ksantos16.github.io/portfolio/week3/index.html'
    }
]

links.forEach(link => {

    console.log(link);

    let section = document.createElement('section');
    console.log(section);

    let title = document.createElement('h3');
    let label = document.createElement('li');
    let url = document.createElement('li');

    title.textContent = link.title;
    label.textContent = link.label;
    url.innerHTML = `<a href="${link.url}">${link.url}</a>`;

    section.appendChild(title);
    section.appendChild(label);
    section.appendChild(url);

    index.append(section);

});


