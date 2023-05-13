export const siteTitle = "Lee Roy Gomos";
export const name = "Lee Roy Gomos";

export const navItems = [
    {name:"Home", ref:""},
    {name:"About Me", ref:"aboutme"},
    {name:"Experience", ref:"experience"},
    {name:"Projects", ref:"projects"},
    {name:"Skills and Certifications", ref:"skills"}
];

export const experienceItems = [
    {title: "Simon Fraser University", date: "June 2016", description: "Began my Computer Science undergrad degree!", icon: "school", color: "primary"},
    {title: "Traction on Demand", date: "January 2021", description: "Began my journey as a Developer Intern!", color: "success"},
    {title: "Traction on Demand", date: "August 2021", description: "Internship ended, began working as an Associate Developer", color: "warning"},
    {title: "Salesforce", date: "May 2022", description: "Traction on Demand acquisition, began working as a Technical Consultant", color: "secondary"},
    {title: "Simon Fraser University", date: "December 2022", description: "Graduated with a Bachelors of Science in Computing Science", icon: "school", color: "error"}
];

export const projectItems = [
    {
        title: "Online Code Editor", 
        github: "https://github.com/leeroygomos/codeeditor", 
        link: "https://online-code-editor.herokuapp.com/",
        description: "A full stack web application with a React frontend and Nodejs/Expressjs backend. Docker is used to containerize all dependencies in order to execute different languages on the server. Currently supports Javascript, Python3, C++, C#, C, Java, Go, and Rust.", 
        img: "/images/projects/codeeditor.png"
    },
    {
        title: "FitnessBuddy", 
        github: "https://github.com/leeroygomos/fitnessbuddy", 
        link: "https://fitnessbuddy.herokuapp.com/",
        description: "A fitness web application built with Node.js, Express.js, PostgreSQL and Heroku. Key features include finding nearby gyms via Google Maps API, nutrition facts lookup via Nutritionix API, exercises search via wger API, and a realtime chatroom via Socket IO.", 
        img: "/images/projects/fitnessbuddy.png"
    },
    {
        title: "crappy bird",
        // github: "",
        link: "https://play.unity.com/mg/other/build-xgn",
        altText: "Play now!",
        description: "A flappy bird clone creating using Unity!",
        img: "/images/projects/crappybird.png"
    },
    {
        title: "To Do App", 
        github: "https://github.com/leeroygomos/todo-app", 
        description: "A simple to do mobile app built using React Native. Features include local data storage via AsyncStorage, drag and drop functionality for list organization, confetti animation when all tasks are completed, and random to do tasks via BoredAPI.", 
        img: "/images/projects/todoapp.png"
    },
    {
        title: "Voluntutor", 
        github: "https://github.com/leeroygomos/voluntutor", 
        description: "A tutoring web application which used AWS Elastic Beanstalk for deployment and was developed using Python with Django as the web framework. It also used Amazon RDS for PostgreSQL as the database engine and Amazon S3 cloud storage for static files.", 
        img: "/images/projects/voluntutor.png" 
    },
    {
        title: "Calculations App", 
        github: "https://github.com/leeroygomos/calcapp", 
        description: "A web application that calculates fibonacci, factorial, exponents, quadratic formula, and pythagorean theorem. It also does numeric conversions between decimal, hexadecimal, and binary. Developed using Django, C/C++, and Go.", 
        img: "/images/projects/calc.png"
    },
    {
        title: "Satisfiability Problem Solver", 
        github: "https://github.com/leeroygomos", 
        description: "A Python program that implements the DPLL algorithm to check the satisfiability of an expression in Conjunctive Normal Form (CNF). It may also print a list of true literals if the expression is satisfiable.", 
        img: "/images/projects/satsolver.png" 
    },
    {
        title: "Basic Linux Shell", 
        github: "https://github.com/leeroygomos", 
        description: "An implementation of the Linux shell using C with additional commands: !n, type, and history. The commands pwd, exit, and cd were also reimplemented.", 
        img: "/images/projects/shell.png" 
    },
    {
        title: "Pac-Man AI Search", 
        github: "https://github.com/leeroygomos", 
        description: "Implementations of the depth-first, breadth-first, and A* search algorithms using the Pac-Man game to visualize the results. Python is used to write the program, and the assignment was originally adapted from UC Berkeley's Pacman AI projects.", 
        img: "/images/projects/pacman.png" 
    },
];

export const certifications = [
    {
        name: 'JavaScript Developer I',
        date: 'January 10, 2023',
        img: '/images/certifications/javascript.png'
    },
    {
        name: 'Service Cloud Consultant',
        date: 'October 25, 2022',
        img: '/images/certifications/servicecloud.png'
    },
    {
        name: 'Platform Developer I',
        date: 'February 8, 2022',
        img: '/images/certifications/platformdev1.png'
    },
    {
        name: 'Administrator',
        date: 'April 30, 2021',
        img: '/images/certifications/admin.png'
    },
];

export const languages = [
    {
        name: 'Apex',
        rating: 8,
    },
    {
        name: 'Javascript',
        rating: 7,
    },
    {
        name: 'SOQL',
        rating: 7
    },
    {
        name: 'HTML/CSS',
        rating: 6,
    },
    {
        name: 'Python',
        rating: 6,
    },
    {
        name: 'C/C++',
        rating: 5,
    },
];

export const frameworks = [
    {
        name: 'Lightning Web Components',
        rating: 8,
    },
    {
        name: 'Express.js',
        rating: 7,
    },
    {
        name: 'React',
        rating: 7,
    },
    {
        name: 'Django',
        rating: 5,
    },
];

export const technologies = [
    {
        name: 'Salesforce',
        rating: 9,
    },
    {
        name: 'Node.js',
        rating: 8,
    },
    {
        name: 'Git',
        rating: 8,
    },
];