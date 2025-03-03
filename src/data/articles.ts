
export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  source: {
    name: string;
    logo: string;
  };
  publishedAt: string;
  timeToRead: string;
  imageUrl: string;
  content: string;
  likes: number;
  dislikes: number;
  comments: number;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Wildfires Force Evacuations in Carolinas as State of Emergency Declared",
    summary: "Over 175 wildfires have burned thousands of acres in North and South Carolina, driven by dry, windy conditions.",
    category: "Environment",
    source: {
      name: "Weather News",
      logo: "/placeholder.svg",
    },
    publishedAt: "41m ago",
    timeToRead: "4 min read",
    imageUrl: "/lovable-uploads/d3a6fb05-d094-4d7b-ae93-fe9ecc42e69b.png",
    content: `
      <p>Officials in both North and South Carolina have declared states of emergency as more than 175 wildfires have engulfed the region, forcing thousands of residents to evacuate their homes.</p>
      
      <p>The fires, which began spreading rapidly on Thursday, have already consumed over 15,000 acres across both states, with the largest concentration in the western parts of North Carolina.</p>
      
      <p>"These are some of the most dangerous fire conditions we've seen in decades," said North Carolina's Governor at a press conference Friday morning. "The combination of extremely dry conditions and strong winds has created a perfect storm for fire spread."</p>
      
      <p>Emergency management officials report that several communities near the state border have been completely evacuated, with temporary shelters established in local schools and community centers.</p>
      
      <p>The National Weather Service has issued red flag warnings across the region, indicating that conditions remain favorable for additional fires to start and spread. Firefighting crews from neighboring states have been deployed to assist with containment efforts.</p>
      
      <p>"We're focusing all available resources on protecting homes and critical infrastructure," said the head of South Carolina's Emergency Management Division. "But with the current weather patterns, we expect challenging conditions to continue through the weekend."</p>
      
      <p>Residents in affected areas are urged to monitor local emergency notifications and be prepared to evacuate if ordered. Officials have also banned all outdoor burning and asked residents to report any signs of new fires immediately.</p>
    `,
    likes: 245,
    dislikes: 12,
    comments: 89,
  },
  {
    id: "2",
    title: "Cryptocurrencies Surge Following Trump's U.S. Crypto Reserve Announcement",
    summary: "Bitcoin and other digital currencies see significant gains after former president outlines plans for national cryptocurrency strategy.",
    category: "Finance",
    source: {
      name: "CryptoDaily",
      logo: "/placeholder.svg",
    },
    publishedAt: "2h ago",
    timeToRead: "3 min read",
    imageUrl: "/lovable-uploads/b71674f0-a334-4f5a-9cec-a4ae62a604e3.png",
    content: `
      <p>The cryptocurrency market experienced a dramatic surge today following an announcement by former President Donald Trump regarding plans to establish a "strategic national crypto reserve" if elected.</p>
      
      <p>Bitcoin soared to $95,000, marking an 8% increase over 24 hours, while Ethereum and other major altcoins saw similar gains. The announcement, made during a campaign stop in Texas, represents a significant shift in Trump's public stance on digital currencies.</p>
      
      <p>"The United States should be leading the world in crypto innovation, not trying to crush it," Trump stated to a crowd of supporters. "We're going to create the most advanced crypto economy on the planet."</p>
      
      <p>The proposed plan includes several major components, including the establishment of a federal Bitcoin reserve, regulatory reforms aimed at encouraging cryptocurrency businesses to operate in the United States, and new tax policies designed to benefit both individual investors and crypto companies.</p>
      
      <p>Market analysts have offered mixed reactions to the announcement. "This is potentially transformative for the institutional adoption of cryptocurrencies," said Jane Rodriguez, chief crypto analyst at Global Investment Partners. "But there are serious questions about implementation and long-term economic impacts."</p>
      
      <p>The announcement comes as several countries, including El Salvador and the Central African Republic, have already adopted Bitcoin as legal tender, with mixed results. Critics argue that cryptocurrency volatility makes it ill-suited for national reserves.</p>
      
      <p>Congressional leaders have already begun weighing in, with supporters and opponents largely splitting along party lines. "This kind of forward-thinking approach is exactly what our financial system needs," said one Republican senator, while a Democratic representative called it "financially reckless and environmentally irresponsible."</p>
      
      <p>The White House has not yet issued an official response to the proposal.</p>
    `,
    likes: 892,
    dislikes: 145,
    comments: 367,
  },
  {
    id: "3",
    title: "El Salvador's wild crypto experiment ends in failure",
    summary: "Three years after becoming the first country to adopt Bitcoin as legal tender, El Salvador's government officially abandons the initiative.",
    category: "Finance & economics",
    source: {
      name: "Financial Times",
      logo: "/placeholder.svg",
    },
    publishedAt: "4h ago",
    timeToRead: "4 min read",
    imageUrl: "/lovable-uploads/375cebe1-fcf9-4f47-9e27-4ebf7fa1e082.png",
    content: `
      <p>El Salvador has officially ended its controversial experiment with Bitcoin as legal tender, with President Nayib Bukele announcing the policy reversal in a nationally televised address on Tuesday.</p>
      
      <p>In 2021, El Salvador became the first country in the world to adopt the cryptocurrency as legal tender, requiring businesses to accept Bitcoin alongside the US dollar. The move was celebrated by crypto enthusiasts worldwide but criticized by economic experts and international financial organizations.</p>
      
      <p>"While we still believe in the future of digital currencies, we must acknowledge that our implementation faced significant challenges that could not be overcome in the current global economic climate," Bukele said in his address.</p>
      
      <p>The administration invested approximately $375 million in Bitcoin purchases and infrastructure development, including the creation of a national digital wallet called "Chivo." According to government figures, the country's Bitcoin holdings are now worth approximately 40% less than their purchase value.</p>
      
      <p>The International Monetary Fund, which had repeatedly warned against the policy, welcomed the decision. "This returns El Salvador to a more stable monetary foundation and removes a significant source of fiscal and financial risk," an IMF spokesperson stated.</p>
      
      <p>Local business owners expressed mixed reactions. "The whole Bitcoin thing was always more trouble than it was worth for small businesses like mine," said Maria Hernandez, who owns a restaurant in San Salvador. "The technology was complicated, and most customers still wanted to use dollars anyway."</p>
      
      <p>Crypto investors and advocates expressed disappointment but acknowledged the implementation faced numerous obstacles. "El Salvador was trying to run before it could walk," said cryptocurrency analyst Alex Martinez. "The vision was sound, but the execution and timing were problematic."</p>
      
      <p>The government has announced a six-month transition period during which Bitcoin will still be accepted for tax payments and by large businesses, after which the country will return exclusively to the US dollar for official transactions.</p>
    `,
    likes: 521,
    dislikes: 48,
    comments: 203,
  },
  {
    id: "4",
    title: "This week is a moment of truth for Xi Jinping on deflation",
    summary: "China's government faces critical economic decisions as deflationary pressures intensify across multiple sectors.",
    category: "China",
    source: {
      name: "Financial Times",
      logo: "/placeholder.svg",
    },
    publishedAt: "5h ago",
    timeToRead: "5 min read",
    imageUrl: "/lovable-uploads/d7df9079-09de-4fb8-b35b-4846dfe49205.png",
    content: `
      <p>China faces a critical economic juncture this week as President Xi Jinping prepares to address mounting deflationary pressures that threaten the country's growth targets and financial stability.</p>
      
      <p>The National Bureau of Statistics is set to release July's inflation data on Wednesday, with economists forecasting a third consecutive month of negative consumer price growth. Producer prices have already fallen for 21 straight months, putting severe pressure on manufacturing profitability.</p>
      
      <p>"This is becoming an existential challenge for Xi's economic model," said Wei Zhang, chief China economist at Morgan Stanley. "The deflationary spiral is intensifying despite repeated government interventions, suggesting deeper structural issues that can't be solved with conventional stimulus."</p>
      
      <p>China's property sector, once a primary growth engine, continues to struggle with falling prices and weak sales despite multiple support packages. Consumer spending has remained sluggish, with retail growth falling to 2.7% in June, well below pre-pandemic levels.</p>
      
      <p>The Politburo's economic committee held an emergency session over the weekend, with state media reporting that "extraordinary measures" were being considered. Sources familiar with the discussions indicate that a major fiscal package focusing on direct consumer subsidies and property sector bailouts may be announced as early as Thursday.</p>
      
      <p>"Xi is caught between ideological commitments to his 'new development paradigm' and the pressing reality of economic underperformance," said Huang Wei, a senior fellow at the Peterson Institute for International Economics. "The decisions made this week will likely define China's economic trajectory for years to come."</p>
      
      <p>International investors are watching closely, with Chinese stocks experiencing unusual volatility in recent sessions. The yuan has weakened to a six-month low against the dollar, prompting intervention from the People's Bank of China.</p>
      
      <p>Japan and South Korea have already expressed concerns about potential spillover effects, while U.S. Treasury Secretary Janet Yellen noted that China's deflationary pressure presents "concerning implications for global growth" during a press conference on Monday.</p>
    `,
    likes: 342,
    dislikes: 27,
    comments: 116,
  },
  {
    id: "5",
    title: "AI unleashes a weird new genre of political communication",
    summary: "Political campaigns increasingly use AI-generated content that blends reality and fiction in concerning ways.",
    category: "Culture",
    source: {
      name: "Tech Observer",
      logo: "/placeholder.svg",
    },
    publishedAt: "8h ago",
    timeToRead: "3 min read",
    imageUrl: "/placeholder.svg",
    content: `
      <p>A new form of political communication is emerging in the 2024 election cycle, as campaigns increasingly deploy AI-generated content that exists in a gray area between fact and fiction, reality and imagination.</p>
      
      <p>Last week, voters in Michigan received text messages appearing to be from a local news organization, containing a video of what looked like their congressional representative announcing support for a controversial policy. The video, while visually convincing, was entirely AI-generated - the representative had never made such statements.</p>
      
      <p>"We're seeing the emergence of what I call 'implied reality content,'" explains Dr. Melissa Chen, director of the Digital Democracy Initiative at Stanford University. "It's media that doesn't explicitly claim to be real but is designed to create a psychological impression that's difficult to distinguish from authentic memory."</p>
      
      <p>Unlike obvious deepfakes or parodies, this new genre of political content occupies an uncanny valley where audiences may recognize something is artificial but still absorb the emotional and rhetorical impact as if it were genuine.</p>
      
      <p>Political campaigns from both major parties have begun experimenting with these techniques. One presidential campaign recently released an "imaginative scenario" showing their candidate in situations that never occurred but were designed to reinforce campaign narratives about leadership and decisiveness.</p>
      
      <p>"The concerning aspect is how these implied realities bypass our normal critical thinking," says technology ethicist James Whittaker. "Even when people consciously know something is AI-generated, research shows the emotional impression often remains uncorrected in memory."</p>
      
      <p>Regulators and platform companies are struggling to develop appropriate responses. Meta recently updated its policies to require disclosure of AI-generated political content, but enforcement has proven challenging, particularly for content that presents itself as artistic rather than factual.</p>
      
      <p>"We're in uncharted territory where the distinction between campaigning and disinformation is becoming dangerously blurred," warns Chen. "The technology is advancing far faster than our ethical frameworks or regulatory responses."</p>
    `,
    likes: 678,
    dislikes: 54,
    comments: 231,
  },
];
