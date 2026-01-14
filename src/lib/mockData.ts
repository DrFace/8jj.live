export const trendingHighlights = [
  {
    time: "12:45",
    title: "Kohli's Masterclass: Every Boundary from his 82*",
    views: "1.2M views",
  },
  {
    time: "12:45",
    title: "Kohli's Masterclass: Every Boundary from his 82*",
    views: "1.2M views",
  },
  {
    time: "12:45",
    title: "Kohli's Masterclass: Every Boundary from his 82*",
    views: "1.2M views",
  },
];

export const latestNews = [
  {
    category: "Cricket",
    ago: "2 hours ago",
    title: "World Cup Final: India's Strategy Revealed",
    excerpt: "Coach hints at a spin-heavy attack for the final showdown.",
  },
  {
    category: "Football",
    ago: "4 hours ago",
    title: "Transfer Talk: Mbappe to Real Madrid Done?",
    excerpt: "Sources suggest a pre-contract agreement has been signed.",
  },
  {
    category: "Basketball",
    ago: "6 hours ago",
    title: "LeBron Breaks Another Record",
    excerpt: "First player to score 40,000 career points in NBA history.",
  },
];

export const featuredEvents = [
  {
    joined: "15,420",
    title: "World Cup Final 2024",
    prize: "$1,000,000",
    days: "01",
  },
  {
    joined: "8,200",
    title: "Grand Slam Tennis Open",
    prize: "$500,000",
    days: "04",
  },
  {
    joined: "32,000",
    title: "Monaco Grand Prix",
    prize: "$1,000,000",
    days: "09",
  },
  {
    joined: "55,000",
    title: "NBA Finals Game 7",
    prize: "$3,000,000",
    days: "11",
  },
];

export const sportGrid = (sport: string) =>
  Array.from({ length: 12 }).map((_, i) => ({
    league: "Major League",
    a: `Team ${String.fromCharCode(65 + (i % 6))}`,
    b: `Team ${String.fromCharCode(66 + (i % 6))}`,
    aScore: Math.floor(Math.random() * 3),
    bScore: Math.floor(Math.random() * 3),
    status: i % 3 === 0 ? "LIVE" : "UPCOMING",
    sport,
  }));

export const chatMessages = [
  { name: "Rahul K.", ago: "2m ago", text: "What a shot by Kohli!" },
  {
    name: "Sarah M.",
    ago: "1m ago",
    text: "Australia needs a wicket desperately.",
  },
  { name: "Dev P.", ago: "Just now", text: "The run rate is climbing nicely." },
  { name: "Amit S.", ago: "Just now", text: "Anyone think 300 is possible?" },
];
