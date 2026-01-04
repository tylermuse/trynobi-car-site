const FAQ_ITEMS = [
  {
    q: "What can I do with Nobi?",
    a: "So we recommend enabling it in your search bar, on collection pages, and anywhere else where shoppers may prefer to just describe what they're looking for.",
    category: "Product",
    topics: ["search"],
  },
  {
    q: "Does Nobi replace my current search?",
    a: "Up to you. Nobi can become your default search bar experience, or you can use other elements like our suggestion pills or button to prompt shoppers to use Nobi outside of search.",
    category: "Product",
    topics: ["search"],
  },
  {
    q: "How does Nobi handle accessibility?",
    a: "Nobi is built with accessibility in mind, following best practices to ensure it is usable by all shoppers, including those using assistive technologies. You can read more <a href='https://docs.nobi.ai/nobi-ux/accessibility/'>here</a>.",
    category: "Product",
  },
  {
    q: "Can Nobi be customized to match my brand?",
    a: "Yes! Nobi offers various customization options to align with your brand's look and feel, including colors, fonts, and messaging.",
    category: "Product",
  },
  {
    q: "What happens if someone asks a question Nobi can't answer?",
    a: "Nobi is designed to only use the content of your site or product catalog to answer questions. If a shopper asks something outside of that scope, Nobi is instructed to let visitors know it doesn't have enough information to help. While we can't guarantee there won't ever be hallucinations, we've found that this approach minimizes them significantly.",
    category: "Product",
  },
  {
    q: "Can Nobi handle multiple languages?",
    a: "Yes! Nobi supports multiple languages and can be configured to understand and respond in the languages your shoppers use.",
    category: "Product"
  },
  {
    q: "Is there a limit to the number of products Nobi can handle?",
    a: "Nobi can handle product catalogs of varying sizes, from small boutiques to large enterprises with hundreds of thousands of products. For very large catalogs, we recommend reaching out to our team to discuss the best setup for your needs.",
    category: "Product"
  },
  {
    q: "Do you have merchandising capabilities?",
    a: "Yes! Nobi includes merchandising features that allow you to boost or filter specific products, and also provides merchandising rules for more general control over search results.",
    category: "Product",
    topics: ["search"],
  },
  {
    q: "What kind of reporting do you have?",
    a: "Nobi provides performance metrics on search usage, conversion rates, and other key indicators to help you understand how Nobi is impacting your store's performance. In addition, we provide deep insights, analytics, trends, topic analytics, and search feature breakdowns in our dashboard.",
    category: "Product"
  },
  {
    q: "Can shoppers add products to their cart through Nobi?",
    a: "Yes! Nobi has a 'quick add' feature that allows shoppers to add products directly to their cart from the Nobi interface.",
    category: "Product",
    topics: ["search"],
  },
  {
    q: "Does Nobi collect PII?",
    a: "No. Nobi does not collect any personally identifiable information.",
    category: "Product",
  },
  {
    q: "Can we A/B test it?",
    a: "Yes. Nobi easily hooks into your A/B testing solution, and we also offer A/B testing as a service to help you optimize your setup.",
    category: "Product"
  },
  {
    q: "Does Nobi remove zero-result searches?",
    a: "Yes! Nobi uses semantic search, which allows us to always return results, even if there are no exact matches.",
    category: "Product",
    topics: ["search"],
  },
  {
    q: "How hard is it to integrate my product catalog?",
    a: "If you're on Shopify, it's either automatic (for stores with fewer than 25K products), or 2 minutes to set up Nobi as a custom Shopify app. We'll handle the rest.",
    category: "Setup",
  },
  {
    q: "How long does install take?",
    a: "It takes a couple of minutes to add the base Nobi code and the event tracking code to your site, and then a few more minutes to add the Nobi element that you want to enable.",
    category: "Setup",
  },
  {
    q: "Can we try it before committing?",
    a: "Absolutely! We offer a free trial period of 30 days or up to 100K messages.",
    category: "Pricing",
  },
  {
    q: "How does pricing work?",
    a: "Nobi's pricing is based on the number of messages your shoppers send to Nobi each month, with a monthly minimum and discounts for higher volume usage and annual commitments.",
    category: "Pricing",
  },
  {
    q: "What kind of support do you offer?",
    a: "Our customers get full access to our founders and we even have Slack Connect channels for real-time support.",
    category: "Support",
  },
  {
    q: "How is Nobi's search better than traditional search?",
    a: "Nobi's searches tend to be more relevant (because we use a hybrid of semantic and keyword search), your customers don't have to click lots of filters (since Nobi can understand their requests in natural language), and Nobi offers lots of UX optimizations, including the ability for your customers to add items to their carts in one click.",
    category: "Product",
    topics: ["search"],
  },
  {
    q: "Do you use ChatGPT? Did you build your own model?",
    a: "Nobi uses a dynamic combination of existing LLMs, including ChatGPT, along with various other models. For some features, like product recommendations, we will combine our own models with these LLMs to deliver the best results.",
    category: "Product",
  }
];

export default FAQ_ITEMS;
