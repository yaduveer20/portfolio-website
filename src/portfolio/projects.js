import canvashoot from "../image/project_thumbnail/canvashoot.png"
import diamondhands from "../image/project_thumbnail/diamondhands.png"
import fitnesslog from "../image/project_thumbnail/fitnesslog.png"
import minibanker from "../image/project_thumbnail/minibanker.png"
import recipify from "../image/project_thumbnail/recipify.png"
import tasktracker from "../image/project_thumbnail/tasktracker.png"
import portfolio from "../image/project_thumbnail/portfolio.png"
import gitsearch from "../image/project_thumbnail/gitsearch.png"
import reactivemeals from "../image/project_thumbnail/reactivemeals.png"


const data_projects = [
    {
        src:  portfolio,
        link: 'https://gopalyaduveerkhatri-portfolio.netlify.app/',
        name: 'Portfolio',
        desc: 'My portofolio containing my information and live projects.',
        tech: 'React'
    },

    {
        src:  recipify,
        link: 'https://recipify-yaduveergopal.netlify.app/',
        name: 'Recipify',
        desc: 'An app that lets you search your favourite recipes.',
        tech: 'HTML, CSS & Javascript'
    },

    {
        src:  gitsearch,
        link: 'https://git-search-yaduveergopal.netlify.app/',
        name: 'GitSearch',
        desc: 'An react app that lets you search github users and visualize their data',
        tech: 'React'
    },

    {
        src:  fitnesslog,
        link: 'https://fitnesslog-yaduveergopal.netlify.app/',
        name: 'FitnessLog',
        desc: 'An app to log your fitness activities on a map. Uses open street map API.',
        tech: 'HTML, CSS & Javascript'
    },
    
    {
        src:  canvashoot,
        link: 'https://canvashoot-yaduveergopal.netlify.app/',
        name: 'CanvaShoot',
        desc: 'An UFO shooting game.',
        tech: 'HTML canvas & Javascript'
    },

    {
        src:  reactivemeals,
        link: 'https://reactivemeals-yaduveergopal.netlify.app/',
        name: 'ReactiveMeals',
        desc: 'A simulation of food ordering application',
        tech: 'React'
    },

    {
        src:  minibanker,
        link: 'https://minibanker-yaduveergopal.netlify.app/',
        name: 'Minibanker',
        desc: 'A simulation of banking activities among different account holders.',
        tech: 'HTML, CSS & Javascript'
    },

    {
        src:  diamondhands,
        link: 'https://diamondhands-yaduveergopal.netlify.app/',
        name: 'DiamondHands',
        desc: 'A dice rolling game',
        tech: 'HTML, CSS & Javascript'
    },

    {
        src:  tasktracker,
        link: 'https://tasktracker-yaduveergopal.netlify.app/',
        name: 'TaskTracker',
        desc: 'React app that lets you set future tasks and track past ones',
        tech: 'React'
    },
    

]
  
export default data_projects;