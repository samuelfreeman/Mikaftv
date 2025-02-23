import { show, vybzone, programe, producer2, producer3, cinematographer, videographer, production, Mcr, frontdesk1, frontdesk2, transport, producer1, ceo, generalmanager, headOfAdministration, administrator } from "@/assets";

// interface for upcomming programs
interface programes {
    id: number;
    title: string;
    imageUrl: any;
    date: string;
    des: string;
    subtitle: string;
    list: string[];
    content: string;
    isLeft: boolean;
}

// array of upcomming programs
export const programes = [
    {
        id: 1,
        title: 'Introducing Health Insights with Afia Bemah – Your Guide to Better Living!',
        imageUrl: show,
        date: 'June 15',
        des: "A brand-new health talk show designed to educate, inspire, and transform lives. Join Afia Bemah as she dives into essential health topics, expert advice, and wellness tips to keep you informed and empowered.",
        subtitle: "🩺 Get ready for engaging discussions on:",
        list: ['Healthy living & nutrition.', 'Medical breakthroughs & expert advice.', 'Fitness, mental health, and more.'],
        content: "This must-watch program is coming soon! Stay tuned for updates and get ready to take charge of your health like never before. Your well-being starts here!",
        isLeft: true
    },
    {
        id: 2,
        title: 'VybZone 360 – The Ultimate Entertainment Experience!',
        imageUrl: vybzone,
        date: 'August 20',
        des: "Get ready for non-stop entertainment, exclusive celebrity interviews, trending music, and the hottest gist from around the world! Hosted by the charismatic Steve Kells, VybZone 360 is your go-to show for everything fun, vibrant, and exciting. Whether it's the latest in pop culture, movie breakdowns, or viral social media moments, we've got it all covered!",
        subtitle: '🎧 The 100: A Tour of the Top Stories',
        list: ['Exclusive interviews with your favorite celebrities.', 'The hottest music, movies, and entertainment news.', 'Fun debates, social trends, and viral moments and more.'],
        content: "Stay tuned! VybZone 360 with Steve Kells is coming soon to bring you all the vibes, energy, and entertainment you crave. Don't miss out!",
        isLeft: false
    },
    {
        id: 3,
        title: 'My Community, My News with Steve Kells – Your Trusted Source for Local Stories!',
        imageUrl: programe,
        date: 'August 20',
        des: "Stay informed with the latest news and events shaping our communities! Hosted by the dynamic Steve Kells, My Community, My News brings you in-depth coverage of the issues that matter most. From breaking news and social issues to inspiring community successes and local events, we deliver authentic, timely, and engaging reports that keep you connected. Our team is dedicated to highlighting real stories from real people, ensuring every voice is heard and every moment captured.",
        subtitle: '📺 Enjoy and embrace the latest stories',
        list: ['Breaking news and exclusive reports from your community.', 'In-depth conversations on social issues and local development.', 'Inspiring stories of change-makers and everyday heroes.'],
        content: "My Community, My News with Steve Kells is here! Stay tuned, stay informed, and be part of the stories that matter most. Watch now on Mikaf TV!",
        isLeft: true
    }
];


export const team = [
    {
        id: 1,
        name: 'Francis Mikado',
        position: 'Chief Executive Officer (CEO)',
        imageUrl: ceo
    },
    {
        id: 2,
        name: 'Kwabena Mantey',
        position: 'General Manager',
        imageUrl: generalmanager
    },
    {
        id: 3,
        name: 'Diana Mantey',
        position: 'Head  of Administration & Finance',
        imageUrl: headOfAdministration

    }
    ,
    {
        id: 4,
        name: 'Gabriella Selorm Gbekie',
        position: 'Administrator',
        imageUrl: administrator

    }
    ,
  

]




export const management =[
    {
        id: 1,
        name: 'Steven Okyere',
        position: 'Presentor/Producer',
        imageUrl: producer1

    },
    ,
    {
        id: 2,
        name: 'Nana Yaa Bemah',
        position: 'Presentor/Producer',
        imageUrl: producer2
    }

  ,
    {
        id: 3,
        name: 'Kezia Acquah (Afia Bemah)',
        position: 'Presentor/Producer',
        imageUrl: producer3
    },
    {
        id: 4,
        name: 'Festus Osei Agyekum',
        position: 'Cinematographer',
        imageUrl: cinematographer
    },
    {
        id: 5,
        name: 'Francis Asare Darko',
        position: '',
        imageUrl: videographer
    },
    {
        id: 6,
        name: 'Jacob Adama',
        position: 'Production',
        imageUrl: production
    },
    {
        id: 7,
        name: 'Ebo Cobbinah',
        position: 'MCR Technician',
        imageUrl: Mcr
    },
    {
        id: 8,
        name: 'Josephine Osei Agyeman',
        position: 'MCR Technician',
        imageUrl: frontdesk1
    }
    ,
    {
        id: 9,
        name: 'Shiada Wiafe ',
        position: 'MCR Technician',
        imageUrl: frontdesk2
    }
    ,
    {
        id: 10,
        name: 'Salifu Ibrahim ',
        position: 'Transport',
        imageUrl: transport
    }
]