export interface Post {
  id: string;
  title: string;
  summary?: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

export interface Comment {
  postId: string;
  author: string;
  text: string;
}

export const posts: Post[] = [
  { id: "1", title: "Welcome to the Blog", summary: "This is your first post!", content: `This is your first post! **Enjoy blogging!** Here you can share your thoughts, stories, and ideas with the world.

Blogging is a great way to express yourself, connect with others, and even build a personal brand. Whether you want to write about technology, travel, lifestyle, or anything else, this platform is your space.

Start by clicking the 'New Post' button (coming soon!) and let your creativity flow. Remember, every great blog starts with a single post. Good luck and happy blogging!

---

*Tips for new bloggers:*
- Write regularly
- Engage with your readers
- Share your posts on social media
- Keep learning and improving your craft
`, author: "Admin", date: "2024-06-23", category: "General" },
  { id: "2", title: "React 19 Features", summary: "A look at what's new in React 19.", content: `React 19 introduces new hooks, improved performance, and a better developer experience. _Stay tuned for more details!_

### Major Features
- **Concurrent Rendering**: Improved UI responsiveness.
- **New Hooks**: Including useEvent and useOptimistic.
- **Automatic Batching**: More efficient state updates.

#### Why Upgrade?
Upgrading to React 19 means faster apps, easier code, and access to the latest community tools. The React team has focused on both performance and developer happiness.

> "React 19 is a game changer for modern web development." — Jane, Senior Developer

For a full migration guide, check the [official React docs](https://react.dev/).
`, author: "Jane", date: "2024-06-22", category: "Tech" },
  { id: "3", title: "How to Write Great Blog Posts", summary: "Tips and tricks for writing engaging content.", content: `Writing engaging content is an art. Start with a catchy title, use clear language, and always provide value to your readers.

#### Steps to a Great Post
1. **Choose a topic you love**
2. **Research and outline**
3. **Write a compelling introduction**
4. **Use headings and lists**
5. **Edit and proofread**

Remember, your unique voice is what will keep readers coming back. Don't be afraid to share personal stories or opinions!

---

*Bonus tip: Add images and links to make your posts more interactive.*
`, author: "Alex", date: "2024-06-21", category: "Writing" },
  { id: "4", title: "Understanding TypeScript", summary: "A beginner's guide to TypeScript in React.", content: `TypeScript helps you write safer and more maintainable React code. Learn about types, interfaces, and generics!

#### Why TypeScript?
- **Type safety**: Catch errors before they happen
- **Better tooling**: Autocomplete and refactoring
- **Scalability**: Easier to manage large codebases

##### Example:
interface User {
  name: string;
  age: number;
}

Start small: gradually add types to your existing JavaScript code. You'll quickly see the benefits!
`, author: "Sam", date: "2024-06-20", category: "Tech" },
  { id: "5", title: "Traveling the World", summary: "Stories and advice from a digital nomad.", content: `Being a digital nomad lets you explore new cultures while working remotely. Here are some tips for your next adventure.

- Research visa requirements
- Find reliable internet
- Join local communities
- Balance work and travel

#### My Favorite Destinations
- Bali, Indonesia
- Lisbon, Portugal
- Medellín, Colombia

Traveling is not just about seeing new places, but also about personal growth and making lifelong memories.

> "The world is a book, and those who do not travel read only one page."
`, author: "Chris", date: "2024-06-19", category: "Travel" },
  { id: "6", title: "Healthy Habits for Developers", summary: "How to stay healthy while coding.", content: `Take breaks, stretch, and stay hydrated. Your body and mind will thank you for it!

#### Daily Habits
- Stand up every hour
- Drink plenty of water
- Eat nutritious meals
- Get enough sleep

A healthy developer is a productive developer. Don't neglect your well-being!

---

*Try using a standing desk or taking short walks during breaks.*
`, author: "Morgan", date: "2024-06-18", category: "Lifestyle" },
  { id: "7", title: "The Future of AI", summary: "Exploring the impact of AI on society.", content: `AI is transforming industries and daily life. What does the future hold? Let's discuss the possibilities.

#### AI in Everyday Life
- Smart assistants
- Personalized recommendations
- Healthcare diagnostics

#### Ethical Considerations
With great power comes great responsibility. It's important to consider the ethical implications of AI and ensure it benefits everyone.

---

*What are your thoughts on the future of AI? Leave a comment below!*
`, author: "Taylor", date: "2024-06-17", category: "Tech" },
  { id: "8", title: "Minimalist Living", summary: "Why less is more in life and work.", content: `Minimalism is about focusing on what matters. Declutter your space and your mind for a happier life.

#### Benefits of Minimalism
- Less stress
- More time for what you love
- Financial freedom

Start by getting rid of things you don't use. You'll be surprised how much lighter you feel!

> "Simplicity is the ultimate sophistication." — Leonardo da Vinci
`, author: "Jordan", date: "2024-06-16", category: "Lifestyle" },
];

export const comments: Comment[] = [
  { postId: "1", author: "Jane", text: "Great start!" },
  { postId: "1", author: "John", text: "Looking forward to more posts." },
  { postId: "2", author: "Alex", text: "Excited for React 19!" },
  { postId: "3", author: "Sam", text: "Very helpful tips." },
  { postId: "4", author: "Chris", text: "TypeScript makes everything better." },
  { postId: "5", author: "Morgan", text: "Traveling is the best way to learn." },
  { postId: "6", author: "Taylor", text: "Health is wealth!" },
  { postId: "7", author: "Jordan", text: "AI is the future." },
  { postId: "8", author: "Admin", text: "Love this minimalist approach." },
]; 