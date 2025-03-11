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
  trending?: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Zen of the Court: Where Tennis Meets Meditation",
    summary: "Tennis and meditation share surprising parallels: both require presence, breath control, and non-attachment.",
    category: "Meditation",
    source: {
      name: "Tennis & Meditation",
      logo: "/placeholder.svg",
    },
    publishedAt: "41m ago",
    timeToRead: "10 min read",
    imageUrl: "/lovable-uploads/c2152bbd-5a61-413e-ad1c-570b7575639d.png",
    content: `
    <p>On a crisp autumn morning in the Presidio of San Francisco, where fog settles between eucalyptus trees before dissolving into sunlight, I watch a lone tennis player preparing to serve. He bounces the ball precisely three times—no more, no less. His eyes close momentarily, his breath deepens. When they open again, there's a quality of presence that wasn't there seconds before. Time seems to suspend as he tosses the ball skyward, his body coiling like a spring before unfurling into the serve. The ball crosses the net with a precision that appears effortless, belying the intense concentration beneath it.</p>
    
    <p>This moment—this perfect confluence of attention and action—illuminates the surprising kinship between two seemingly contradictory practices: tennis and meditation. One is dynamic, externally focused, and often competitive; the other is typically still, inward-looking, and non-striving. Yet for those who practice both, the parallels are not just striking but symbiotic. The court, with its white lines and green surface stretching toward the horizon, becomes an extension of the meditation cushion—a laboratory for presence, a dojo for consciousness.</p>
    
    <p>"Tennis requires a clarity of mind that's remarkably similar to meditation," explains Dr. Richard Davidson, neuroscientist and founder of the Center for Healthy Minds at the University of Wisconsin-Madison. "Both practices demand sustained attention and the ability to return to the present moment after distraction."</p>
    
    <p>The overlap between these disciplines isn't merely theoretical. It manifests in the rituals of professionals like Rafael Nadal, whose meticulous pre-serve routines—the careful arrangement of water bottles, the precise tucking of hair behind both ears—function as mindfulness anchors. Roger Federer, often described as balletic in his movement, exemplifies what Zen practitioners call "mushin" or "no-mind"—a state where action flows without deliberation, where the boundary between player and play dissolves.</p>
    
    <p>This intersection found its literary expression in W. Timothy Gallwey's "The Inner Game of Tennis," a 1974 book that transcended its sporting origins to become a touchstone for anyone interested in the relationship between mind and performance. Gallwey's central insight—that we contain two selves, the critical "Self 1" and the intuitive "Self 2"—echoes across meditative traditions, particularly Zen Buddhism. When a player becomes entangled in Self 1's analytical chatter, their game suffers. But when they quiet this inner critic, allowing Self 2 to take over, they enter a state remarkably similar to what meditation aims to cultivate.</p>
    
    <blockquote>"The Inner Game is played to overcome all habits of mind which inhibit excellence in performance,"</blockquote>
    
    <p>writes Gallwey. This might as well be a description of jhana meditation practice, where practitioners work to overcome the hindrances that prevent access to states of concentrated awareness and equanimity.</p>
    
    <p>The parallels extend to the fundamental architecture of both practices: the breath. In meditation halls from Kyoto to Kripalu, instructors emphasize breath as the primary anchor for attention. Similarly, tennis coaches teach breath control to manage energy, reduce anxiety, and maintain focus between points. When you watch Nadal's deliberate breathing before each serve, you're witnessing a centering technique not unlike those practiced in Zen monasteries for centuries.</p>
    
    <p>Perhaps most compelling is how tennis provides immediate opportunities to practice non-attachment—a cornerstone of meditative wisdom. Every point ends in either success or failure, offering instant feedback. The player who can celebrate a brilliant shot without clinging to it, or acknowledge an error without self-condemnation, cultivates precisely the quality of mind that meditation seeks to develop.</p>
    
    <p>This quality finds expression in the Zen concept of "shoshin" or "beginner's mind"—approaching each moment with openness and freedom from preconceptions. In tennis, as in life, expectations often become burdens. The attachment to outcomes—winning a match, executing a perfect backhand—creates tension that interferes with natural performance. Learning to play each point anew, regardless of the score or previous mistakes, is simultaneously a winning tennis strategy and profound spiritual practice.</p>
    
    <p>"There's something about the rhythmic exchange of a rally that induces a meditative state," observes Tom Storer, a former collegiate player who now teaches meditation at the San Francisco Zen Center. "When you're fully absorbed in the back-and-forth, tracking the yellow sphere as it arcs through space, thinking stops. You're just there, responding, being."</p>
    
    <p>The physical dimension of tennis offers unique opportunities for meditation practitioners. While traditional meditation often emphasizes stillness, many traditions recognize the possibility of meditation in motion. The Japanese tea ceremony, kyudo (archery), and aikido have all been approached as meditative arts. Tennis, with its demands for present-moment awareness and instantaneous responsiveness, naturally extends this lineage of moving meditation.</p>
    
    <p>Moreover, the heightened body awareness that tennis develops can translate directly to seated practice. Proprioception—the sense of where your body exists in space—sharpens through tennis. This increased somatic awareness helps meditators ground their practice in physical sensation, an important anchor when the mind inevitably wanders.</p>
    
    <p>Even the relational aspect of tennis offers something valuable for meditation practitioners. While meditation is often solitary, tennis requires engagement with another consciousness across the net. This relationship provides a mirror for observing one's own mental patterns—competitiveness, frustration, joy—in real time. As the 13th-century Zen master Dogen wrote, "To study the Buddha Way is to study the self. To study the self is to forget the self." The tennis court offers a unique context for this investigation.</p>
    
    <p>For those already immersed in yoga practice—another discipline bridging physical technique and mental clarity—tennis can extend similar benefits while introducing elements of spontaneity and adaptation. Where yoga sequences are generally predetermined, tennis demands constant recalibration to unpredictable circumstances. This quality makes tennis particularly valuable for practitioners of Zen, with its emphasis on responding flexibly to each moment rather than adhering to rigid formulas.</p>
    
    <p>The court also brings koans—those paradoxical Zen riddles designed to short-circuit logical thinking—into physical form. The paradox of trying less to achieve more, of surrendering control to gain it, becomes tangible when you discover that relaxing into a serve often produces better results than forcing it. As Gallwey writes, "When we plant a rose seed in the earth, we notice that it is small, but we do not criticize it as 'rootless and stemless.' We treat it as a seed, giving it the water and nourishment required of a seed." The tennis player who can treat their developing skills with the same patience practices a form of wisdom taught in meditation halls for millennia.</p>
    
    <p>Of course, tensions exist between these disciplines. Tennis, with its scoring system and rankings, embodies the very attachments to outcomes that meditation teaches us to release. Yet this apparent contradiction offers its own koan. The challenge becomes playing fully—investing complete effort and caring deeply about each point—while simultaneously holding the outcome lightly.</p>
    
    <p>This paradox mirrors Amartya Sen's conception of development as freedom—the idea that true progress requires both capability and agency. On the tennis court, as in meditation practice, we develop the capability to act skillfully while maintaining the freedom to detach from results. Each practice enhances the other: meditation deepens the mental clarity needed for tennis, while tennis provides real-world opportunities to embody meditative awareness.</p>
    
    <p>"When I'm playing my best tennis, I'm not thinking about tennis," reflects Michael Chang, former French Open champion. "There's a silence inside, even amid the physical exertion. The racquet feels like an extension of my arm, and I'm simply responding to what is, without judgment or analysis."</p>
    
    <p>This quality of responsive presence, arising naturally during peak performance, is what meditation systematically cultivates. In both realms, we discover that the mind performs best when least encumbered by itself—when the doer disappears into the doing, when self-consciousness gives way to simple awareness.</p>
    
    <p>As the morning fog finally lifts from the San Francisco courts, revealing the Golden Gate Bridge in the distance, I'm reminded of something Roger Federer once said about his approach to the game: "When you do something best in life, you don't really want to give that up. And for me, it's tennis." There's a quality of devotion in his words that meditation practitioners will recognize—the commitment to a practice not just for its results but for the practice itself.</p>
    
    <p>Perhaps this is the deepest connection between tennis and meditation: both, at their core, become more than techniques or activities. They become ways of being, paths that never truly end. The meditation cushion and the tennis court become spaces where we continuously discover ourselves anew, moving ever deeper into the art of present-moment awareness. In the rhythm of the rally and the rhythm of the breath, we find ourselves exactly where we are—fully alive to the unfolding moment, neither arriving nor departing, simply being.</p>
    
    <p>And in that state of being, whether with racquet in hand or sitting in stillness, we occasionally glimpse what Zen teachers have pointed to for centuries: the extraordinary that lies within the ordinary, the profound that resides in the mundane. The perfect serve becomes a moment of perfect presence—and in that moment, tennis and meditation reveal themselves as different paths leading to the same destination.</p>
    `,
    likes: 245,
    dislikes: 12,
    comments: 89,
    trending: true
  },
  {
    id: "2",
    title: "Silicon Dreams and Human Capabilities: Navigating the Economic Frontier of Artificial Intelligence",
    summary: "AI revolutionizes the economy, raising questions about power distribution and human capabilities.",
    category: "Economics",
    source: {
      name: "AI & Development",
      logo: "/placeholder.svg",
    },
    publishedAt: "2h ago",
    timeToRead: "7 min read",
    imageUrl: "/lovable-uploads/3df1f597-ec39-4ff2-8e89-3032f315a270.png",
    content: `    
    <p>On a foggy morning in San Francisco's South Park, the sort that wraps the city in a gauzy filter reminiscent of an Instagram preset, Ryan Chen adjusts his posture on a wooden bench. A product manager at an AI startup backed by some of Sand Hill Road's most bullish venture capitalists, Chen begins his day with fifteen minutes of meditation—a practice he adopted during the pandemic. "In the tech world, we're building systems that can process information at speeds we can barely comprehend," he says, opening his eyes. "But the decisions about how we deploy these systems? Those still require human wisdom."</p>
    
    <p>This juxtaposition—between algorithmic efficiency and human judgment—lies at the heart of our global economic reckoning with artificial intelligence. As large language models compose poetry and code with equal facility, as recommendation systems quietly shape our preferences and purchases, and as machine learning algorithms optimize supply chains and predict consumer behavior, we find ourselves at what economists are calling an inflection point in human history. The question is no longer whether AI will transform our economies, but how radically, how quickly, and—most significantly—whom these transformations will benefit.</p>
    
    <p>At DeepMind's London headquarters, thousands of miles from Chen's morning ritual, researchers have created AI systems capable of defeating world champions at Go and generating novel protein structures. At Google's YouTube, algorithms determine what content reaches billions of viewers. In venture capital firms from Palo Alto to Mumbai, investment in AI startups has become less a speculative gamble and more an exercise in FOMO—fear of missing out on the next technological revolution.</p>
    
    <blockquote>"We're seeing a fundamentally new kind of economic engine," explains Dr. Lakshmi Venkataraman, an economist at Yale University who studies the intersection of technology and development. "Previous industrial revolutions extended human physical capabilities. The AI revolution extends our cognitive capabilities—and that's a transformation of a different order."</blockquote>
    
    <p>The scale of this transformation invites comparison to the most consequential economic shifts in human history. Yet unlike the steam engine or electricity, AI doesn't simply augment productivity—it actively makes decisions, creates content, and even designs new iterations of itself. This recursive quality gives it exponential rather than linear potential, particularly as computational power continues to increase.</p>
    
    <p>F.A. Hayek, the Austrian economist whose ideas about spontaneous order and distributed knowledge have influenced generations of free-market thinkers, might have recognized in today's AI systems a validation of his core insight: that the economy functions through the aggregation of fragmented information no central planner could possibly possess. Modern recommendation systems and predictive algorithms accomplish precisely what Hayek described as the price mechanism's function—they coordinate dispersed knowledge and preferences at scale.</p>
    
    <p>But there's a crucial difference. While Hayek's price system distributed both information and agency across countless individual actors, AI systems tend to concentrate decision-making power in the hands of those who control the algorithms. This tension between distributed information and centralized control reveals the first of many paradoxes in our AI-mediated economic future.</p>
    
    <p>"The economic value created by AI will be staggering," says Michael Torres, a venture capitalist who splits his time between New York and San Francisco. "But the distribution of that value? That's where things get complicated." Torres, who funded three AI startups last year alone, acknowledges the winner-take-most dynamics of digital markets. "Network effects in AI are even more powerful than in traditional software. The companies with the most data, computing power, and AI talent can create better products, which attracts more users, which generates more data—it's a virtuous cycle for them, but potentially a barrier for everyone else."</p>
    
    <p>This concentration of economic power raises profound questions about development—not just of technologies, but of human societies. Few thinkers have addressed the relationship between economic growth and human flourishing more eloquently than Amartya Sen, whose capability approach to development emphasizes freedom not as a means to economic growth, but as its end. In "Development as Freedom," Sen argues that development should be evaluated by the expansion of human capabilities—the substantive freedoms that allow people to lead lives they have reason to value.</p>
    
    <p>In New Delhi's bustling Nehru Place tech market, this philosophical framework takes on concrete significance. Priya Sharma runs a small IT services company that has recently begun implementing AI tools for local businesses. "These technologies can either concentrate power further or democratize opportunity," she says, adjusting her laptop screen to show me a custom chatbot her team has developed for a community health organization. "In India, we're seeing both simultaneously."</p>
    
    <p>Sharma's observation highlights the dual nature of AI's developmental impact. On one hand, AI applications in healthcare, agriculture, and education could accelerate progress toward basic capabilities in regions where human expertise is scarce. AI-powered diagnostic tools can extend the reach of limited medical personnel; agricultural algorithms can help farmers maximize yields with fewer resources; adaptive learning systems can provide personalized education at scale.</p>
    
    <p>On the other hand, the global AI economy threatens to create new forms of dependency. Countries without robust digital infrastructure, technical talent, and data governance frameworks may find themselves primarily consumers rather than producers of AI technologies, reinforcing existing patterns of economic subordination.</p>
    
    <blockquote>"The question isn't whether AI will affect development," explains Dr. Venkataraman, "but whether we can shape its implementation to enhance rather than restrict capabilities. Sen taught us that income is just one dimension of development—what matters is what people can actually do and be."</blockquote>
    
    <p>This capability-centered perspective offers a useful lens for examining AI's impact on labor markets—perhaps the most immediately consequential aspect of the AI revolution for most people. The yoga instructor in Mumbai, the tennis coach in Barcelona, the product manager in San Francisco—all face a workplace transformed by automation and augmentation.</p>
    
    <p>A recent study from the International Labour Organization estimates that approximately 60% of jobs in developed economies contain a significant proportion of tasks susceptible to automation with current AI capabilities. Yet history suggests technological disruption typically creates more jobs than it destroys—though not necessarily for the same people, in the same places, or on the same terms.</p>
    
    <p>"The labor market impacts will be profoundly uneven," says Dr. Martin Hoffman, an economist who researches technological change at Yale. "We're seeing a hollowing out of medium-skill jobs, while demand increases for both high-skill work that complements AI and certain forms of low-skill work that remains difficult to automate."</p>
    
    <p>This bifurcation raises the specter of what economist David Autor calls the "paradox of abundance"—a world where unprecedented productive capacity coexists with precarious livelihoods for many workers. The irony of our moment is that as machines become more capable, the distinctively human qualities of work may become both more rare and more valued.</p>
    
    <p>Consider Rafael Larios, a tennis instructor in San Francisco's Presidio who previously worked in tech. "I left a programming job because I wanted more human connection," he explains, demonstrating a forehand grip to a new student. "Now I realize I may have accidentally future-proofed my career. A robot can write code, but can it teach you the 'inner game' of tennis—that mental state where you're fully present, where technique flows from awareness rather than forced effort?"</p>
    
    <p>Larios's invocation of W. Timothy Gallwey's classic "The Inner Game of Tennis" points toward what might be called the mindfulness advantage in an AI economy. As algorithms master tasks requiring logical processing and pattern recognition, capabilities involving emotional intelligence, embodied knowledge, ethical judgment, and creative intuition may command increasing economic premium.</p>
    
    <p>This suggests a curious convergence. Practices once considered separate from economic productivity—meditation, physical disciplines like yoga, artistic expression—may become increasingly central to economic value creation. The focused awareness developed through Zen practice, the bodily intelligence cultivated in physical disciplines, the lateral thinking encouraged by koans—these approaches to knowledge acquisition differ markedly from the data-intensive learning of AI systems.</p>
    
    <blockquote>"We're moving toward an economy where the most valuable skills may be the most deeply human ones," suggests Dr. Hoffman. "Not because AI can't eventually simulate these capabilities, but because authentically human connection and judgment will remain distinctively valuable precisely because they aren't simulated."</blockquote>
    
    <p>If this analysis holds, the economic impact of AI may ultimately depend less on the technology itself than on our collective response to it. Will we measure development solely through productivity metrics and GDP, or through Sen's more expansive framework of human capabilities? Will labor market policies focus narrowly on replacing lost jobs, or on reimagining work itself? Will we allow market concentration to proceed unchecked, or design governance structures that distribute AI's benefits more broadly?</p>
    
    <p>Back in South Park, Ryan Chen finishes his morning meditation and prepares for a day of product decisions that will, in their small way, help shape our answers to these questions. "The companies that thrive won't be the ones that use AI to eliminate human judgment," he reflects. "They'll be the ones that use AI to amplify it."</p>
    
    <p>As our economies integrate artificial intelligence ever more deeply, this balance—between silicon efficiency and human wisdom, between technological capacity and human capability—may determine not just economic outcomes but the very nature of development itself. In navigating this frontier, we would do well to remember that the ultimate measure of our technologies is not what they can do, but what they enable us to become.</p>
    
    <p class="author">—David Foster, San Francisco</p>    `,
    likes: 892,
    dislikes: 145,
    comments: 367,
    trending: true
  },
  {
    id: "3",
    title: "[STUB] Financial News Article",
    summary: "This is a placeholder for a financial news article about cryptocurrency and market trends.",
    category: "Finance",
    source: {
      name: "Financial Times",
      logo: "/placeholder.svg",
    },
    publishedAt: "4h ago",
    timeToRead: "4 min read",
    imageUrl: "/placeholder.svg",
    content: `
      <h2>This is a stub article</h2>
      
      <p>This is placeholder content for a financial news article. In a real implementation, this would contain actual news content about market trends, cryptocurrency developments, or other financial topics.</p>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in varius nisi. Vivamus finibus, eros non finibus bibendum, nisi ipsum tincidunt velit, at fringilla justo magna eu risus.</p>
      
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam posuere, metus eget auctor lacinia, nisl mi bibendum libero, in congue eros nunc quis risus.</p>
      
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac magna non metus facilisis vehicula.</p>
    `,
    likes: 521,
    dislikes: 48,
    comments: 203,
    trending: false
  },
  {
    id: "4",
    title: "[STUB] Economic Report on China",
    summary: "Placeholder for an economic analysis article about China's market conditions.",
    category: "China",
    source: {
      name: "Economic Review",
      logo: "/placeholder.svg",
    },
    publishedAt: "5h ago",
    timeToRead: "5 min read",
    imageUrl: "/placeholder.svg",
    content: `
      <h2>This is a stub article</h2>
      
      <p>This is placeholder content for an economic analysis of China's markets. In a real implementation, this would contain actual reporting on economic conditions, policy decisions, and market trends in China.</p>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt fringilla ipsum, vel blandit mi volutpat eu. Quisque varius, nisl ac facilisis sodales, velit felis malesuada nibh, id faucibus velit orci at nibh.</p>
      
      <p>Fusce vitae dui ac nibh mattis iaculis. Phasellus in magna vitae sem varius commodo ut at diam. Aliquam erat volutpat. Cras sit amet auctor metus.</p>
      
      <p>Nulla facilisi. Nulla facilisi. Quisque non felis bibendum, venenatis dui non, ultricies ante. Nam dignissim orci mi, at convallis magna tempus sed.</p>
    `,
    likes: 342,
    dislikes: 27,
    comments: 116,
    trending: false
  },
  {
    id: "5",
    title: "[STUB] AI Technology Trends",
    summary: "Placeholder for an article about emerging trends in artificial intelligence technology.",
    category: "AI",
    source: {
      name: "Tech Observer",
      logo: "/placeholder.svg",
    },
    publishedAt: "8h ago",
    timeToRead: "3 min read",
    imageUrl: "/placeholder.svg",
    content: `
      <h2>This is a stub article</h2>
      
      <p>This is placeholder content for an article about AI technology trends. In a real implementation, this would contain actual analysis of emerging AI applications, research breakthroughs, and industry developments.</p>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum odio ut dui ultrices, a molestie dui vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
      
      <p>Cras placerat blandit dui, eu euismod velit volutpat facilisis. In ut arcu id nisi finibus aliquet. Donec ultrices metus eu eleifend tincidunt.</p>
      
      <p>Nulla facilisi. Aliquam luctus, velit a faucibus pulvinar, sem odio elementum nisi, vel malesuada risus nibh nec sem.</p>
    `,
    likes: 678,
    dislikes: 54,
    comments: 231,
    trending: true
  },
  {
    id: "6",
    title: "[STUB] Tennis Match Report",
    summary: "Placeholder for a report on a recent professional tennis tournament.",
    category: "Tennis",
    source: {
      name: "Sports Center",
      logo: "/placeholder.svg",
    },
    publishedAt: "3h ago",
    timeToRead: "5 min read",
    imageUrl: "/placeholder.svg",
    content: `
      <h2>This is a stub article</h2>
      
      <p>This is placeholder content for a tennis match report. In a real implementation, this would contain actual coverage of tennis tournaments, player profiles, and analysis of match strategies.</p>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in varius nisi. Vivamus finibus, eros non finibus bibendum, nisi ipsum tincidunt velit, at fringilla justo magna eu risus.</p>
      
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam posuere, metus eget auctor lacinia, nisl mi bibendum libero, in congue eros nunc quis risus.</p>
      
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac magna non metus facilisis vehicula.</p>
    `,
    likes: 1245,
    dislikes: 35,
    comments: 423,
    trending: true
  }
];
