import { show, vybzone } from "@/assets";

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
export const programes =[
    {
        id: 1,
        title: 'Introducing Health Insights with Afia Bemah – Your Guide to Better Living!',
        imageUrl: show,
        date: 'June 15',
        des: "A brand-new health talk show designed to educate, inspire, and transform lives. Join Afia Bemah as she dives into essential health topics, expert advice, and wellness tips to keep you informed and empowered.",
        subtitle: "🩺 Get ready for engaging discussions on:",
        list: ['Healthy living & nutrition.', 'Medical breakthroughs & expert advice.', 'Fitness, mental health, and more.'],
        content: "This must-watch program is coming soon! Stay tuned for updates and get ready to take charge of your health like never before. Your well-being starts here!",
        isLeft : true
    },
    {
        id: 2,
        title: 'VybZone 360 – The Ultimate Entertainment Experience!',
        imageUrl: vybzone,
        date: 'August 20',
        des: "Get ready for non-stop entertainment, exclusive celebrity interviews, trending music, and the hottest gist from around the world! Hosted by the charismatic Steve Kells, VybZone 360 is your go-to show for everything fun, vibrant, and exciting. Whether it's the latest in pop culture, movie breakdowns, or viral social media moments, we've got it all covered!",
        subtitle: 'The 100: A Tour of the Top Stories',
        list: ['Exclusive interviews with your favorite celebrities.', 'The hottest music, movies, and entertainment news.', 'Fun debates, social trends, and viral moments and more.'],
        content: "Stay tuned! VybZone 360 with Steve Kells is coming soon to bring you all the vibes, energy, and entertainment you crave. Don't miss out!",
        isLeft : false
    },
    {
        id: 3,
        title: 'VybZone 360 – The Ultimate Entertainment Experience!',
        imageUrl: vybzone,
        date: 'August 20',
        des: "Get ready for non-stop entertainment, exclusive celebrity interviews, trending music, and the hottest gist from around the world! Hosted by the charismatic Steve Kells, VybZone 360 is your go-to show for everything fun, vibrant, and exciting. Whether it's the latest in pop culture, movie breakdowns, or viral social media moments, we've got it all covered!",
        subtitle: 'The 100: A Tour of the Top Stories',
        list: ['Exclusive interviews with your favorite celebrities.', 'The hottest music, movies, and entertainment news.', 'Fun debates, social trends, and viral moments and more.'],
        content: "Stay tuned! VybZone 360 with Steve Kells is coming soon to bring you all the vibes, energy, and entertainment you crave. Don't miss out!",
        isLeft : true
    }
];