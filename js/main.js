
let index = document.querySelector('.index');

const links = [
    {
        title: 'Week 1',
        label: 'Week1 notes',
        url: 'week1/index.html'
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
    url.textContent = link.url;

    section.appendChild(title);
    section.appendChild(label);
    section.appendChild(url);

    index.append(section);

});

