const projects = [
    {
    id: 1,
    title: "My Portfolio Website.",
    description: "A personal website showcasing my work and skills.",
    image: `${import.meta.env.BASE_URL}techdesign.jpeg`,
    technologies: "HTML, CSS, Javascript"
    },
    {
        id: 2,
        title: "Weather App",
        description: "A simple application that displays weather information.",
        image: `${import.meta.env.BASE_URL}weatherapp.jpeg`,
        technologies: "React, CSS, API"
    },
    {
        id: 3,
        title: "Todo List",
        description: "A application for keeping track of daily tasks.",
        image: `${import.meta.env.BASE_URL}todolist.jpeg`,
        technologies: "React, Javascript"
    }
];

export default projects;