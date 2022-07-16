
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
        teamLink: 'https://ksantos16.github.io/portfolio/week3/team/week3_team.html'
    }, {
        title: 'Week Four',
        label: 'Week 4 Notes',
        url: 'https://ksantos16.github.io/portfolio/week4/index.html',
        team: 'Team Assignment',
        teamLink: 'https://ksantos16.github.io/portfolio/week4/team/team4.html'
    }, {
        title: 'Week Five',
        label: 'Week 5 Notes',
        url: 'https://ksantos16.github.io/portfolio/week5/index.html',
        team: 'Team Assignment',
        teamLink: 'https://ksantos16.github.io/portfolio/week5/team/activity5.html'
    }, {
        title: 'Week Six',
        label: 'To Do Challenge',
        url: 'https://ksantos16.github.io/portfolio/todo/index.html',
        team: 'No Team Assignment',
        teamLink: 'None'
    }, {
        title: 'Week Seven',
        label: 'Week 7 Notes',
        url: 'https://ksantos16.github.io/portfolio/week7/index.html',
        team: 'Team Assignment',
        teamLink: 'https://ksantos16.github.io/portfolio/week7/team/activity7.html'
    }, {
        title: 'Week Eight',
        label: 'Week 8 Notes',
        url: 'https://ksantos16.github.io/portfolio/week8/index.html',
        team: 'Team Assignment',
        teamLink: 'https://ksantos16.github.io/portfolio/week8/team/week8team.html'
    }, {
        title: 'Week Nine',
        label: 'Week 9 Notes',
        url: 'https://ksantos16.github.io/portfolio/week9/index.html',
        team: 'Team Assignment',
        teamLink: 'https://ksantos16.github.io/portfolio/week9/team/index.html'
    }, {
        title: 'Week Ten',
        label: 'Week 10 Notes',
        url: 'https://ksantos16.github.io/portfolio/week10/index.html',
        team: 'Team Assignment',
        teamLink: 'https://ksantos16.github.io/portfolio/week10/team/quakes.html'
    }, {
        title: 'Week Eleven',
        label: 'Week 11 Notes - N/A',
        url: '',
        team: 'Team Assignment',
        teamLink: 'https://ksantos16.github.io/portfolio/week11/client/week11.html'
    }, {
        title: 'Week Fourteen',
        label: 'Challenge 2 - Recipe Finder App',
        url: 'https://ksantos16.github.io/portfolio/reciepefinder/index.html',
        team: 'Team Assignment - N/A',
        teamLink: 'None'
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

    index.appendChild(section);

});


