# Projects Section - Image Pipeline Setup

This document explains how to set up the image generation pipeline for the projects section.

## Overview

The projects section uses a three-tier image pipeline to automatically source and generate project images:

1. **Generated Images** (Optional): AI-generated images using OpenAI API
2. **Royalty-free Images**: Unsplash API for high-quality stock photos
3. **Fallback Images**: Local SVG placeholders and Picsum photos

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in your project root with the following variables:

```bash
# For AI-generated images (optional)
OPENAI_API_KEY=your_openai_api_key_here

# For royalty-free images (optional)
UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
```

### 2. API Keys Setup

#### OpenAI API Key (Optional)
1. Visit [OpenAI API](https://platform.openai.com/api-keys)
2. Create a new API key
3. Add it to your `.env` file

#### Unsplash API Key (Optional)
1. Visit [Unsplash Developers](https://unsplash.com/developers)
2. Create a new application
3. Get your access key
4. Add it to your `.env` file

### 3. Image Pipeline Logic

The system follows this priority order:

1. **Generated Images**: If `OPENAI_API_KEY` is present, generates 3-6 thematic images per project
2. **Royalty-free Images**: If no OpenAI key but `UNSPLASH_ACCESS_KEY` is present, fetches from Unsplash
3. **Fallback Images**: Uses local SVG placeholders and Picsum photos

### 4. Image Storage Structure

Images are stored in the following structure:
```
assets/
└── img/
    └── projects/
        ├── climate-risk-analyzer/
        │   ├── cover.jpg
        │   ├── dashboard.png
        │   └── analysis.png
        ├── retail-demand-forecasting/
        │   ├── cover.jpg
        │   └── forecast.png
        └── ...
```

### 5. Project Data Configuration

Each project in `projects-data.js` includes:
- `keywords`: Array of 3-6 domain terms for image generation
- `slug`: Used for folder naming
- `title`: Used in image prompts

### 6. Image Generation Prompts

The system generates prompts like:
- "climate risk analysis dashboard, data visualization, fintech"
- "retail demand forecasting charts, machine learning, business analytics"
- "trade policy prediction, NLP, economic analysis"

### 7. Fallback Behavior

If no API keys are provided:
- Uses emoji-based SVG icons for project cards
- Uses Picsum photos for gallery images
- Maintains consistent visual design

## Usage

1. Add your API keys to `.env`
2. Run the build process
3. Images are automatically generated and cached
4. The system falls back gracefully if APIs are unavailable

## File Structure

```
├── projects-data.js          # Project data source
├── assets/
│   └── img/
│       └── projects/         # Generated images
├── climate-risk-analyzer-details.html
├── retail-demand-forecasting-details.html
└── ... (other project detail pages)
```

## Customization

- Modify `projects-data.js` to add/remove projects
- Update image prompts in the generation logic
- Customize fallback SVG icons in the CSS
- Adjust image dimensions in the CSS classes

## Notes

- Images are cached locally to avoid repeated API calls
- All images include proper alt text for accessibility
- The system respects `prefers-reduced-motion` for animations
- Images are optimized for web delivery
