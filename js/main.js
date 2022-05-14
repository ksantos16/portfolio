
let index = document.querySelector('.index');

const links = [
    {
        title: 'Week One',
        label: 'Week 1 Notes',
        url: 'https://ksantos16.github.io/portfolio/week1/index.html',
        team: 'Team Assignment',
        teamLink: 'None'

    }, {
        title: 'Week Two',
        label: 'Week 2 Notes',
        url: 'https://ksantos16.github.io/portfolio/week2/index.html',
        team: 'Team Assignment',
        teamLink: 'https://ksantos16.github.io/portfolio/week2/team/index_team.html'
    }, {
        title: 'Week Three',
        label: 'Week 3 Notes',
        url: 'https://ksantos16.github.io/portfolio/week3/index.html',
        team: 'Team Assignment',
        teamLink: 'https://ksantos16.github.io/portfolio/week2/team/week3_team.html'
    }, {
        title: 'Week Four',
        label: 'Week 4 Notes',
        url: 'https://ksantos16.github.io/portfolio/week4/index.html',
        team: 'Team Assignment',
        teamLink: 'https://ksantos16.github.io/portfolio/week4/team/team4.html'
    }
]

links.forEach(link => {

    console.log(link);

    let section = document.createElement('section');
    console.log(section);

    let title = document.createElement('h3');
    let label = document.createElement('li');
    let url = document.createElement('li');
    let team = document.createElement('li');
    let teamLink = document.createElement('li');

    title.textContent = link.title;
    label.textContent = link.label;
    url.innerHTML = `<a href="${link.url}">${link.url}</a>`;
    team.textContent = link.team;
    teamLink.innerHTML = `<a href="${link.teamLink}">${link.teamLink}</a>`;

    section.appendChild(title);
    section.appendChild(label);
    section.appendChild(url);
    section.appendChild(team);
    section.appendChild(teamLink);

    index.append(section);

});


