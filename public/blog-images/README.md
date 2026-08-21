# Blog Article Images

This directory contains Open Graph images for blog articles.

## Image Specifications

- **Dimensions:** 1200 × 630 pixels (required for optimal display on social media)
- **Format:** PNG or JPG
- **Naming:** Use the article slug (e.g., `react-native-vs-flutter.png`)

## How to Add Images

1. Create a 1200×630px image for your article
2. Save it with the article's slug as the filename (e.g., `ai-automation-india-2025.png`)
3. Place it in this directory (`public/blog-images/`)
4. The image will automatically be used for og:image and twitter:image tags

## Current Articles Needing Images

All articles currently use the generic `og-image.png`. Create individual images for:

- ai-automation-india-2025.png
- custom-ai-software-development-india-2025.png
- ui-ux-design-trends-2025-india.png
- cloud-migration-guide-indian-startups-2025.png
- llm-integration-guide.png
- nextjs-seo-2025.png
- ai-agent-basics.png
- react-native-vs-flutter.png
- cloud-cost-optimisation.png

## Alternative Method

If you prefer to use externally hosted images, add the `image` property to the article's entry in `POST_META`:

```typescript
"react-native-vs-flutter": {
  title: "...",
  category: "...",
  excerpt: "...",
  image: "https://cdn.example.com/images/react-native-flutter.png"
}
```

## Why This Matters

Articles with unique, relevant images get significantly higher click-through rates on social media (LinkedIn, Twitter, Facebook) compared to generic brand logos. A well-designed article image can improve social CTR by 30-50%.
