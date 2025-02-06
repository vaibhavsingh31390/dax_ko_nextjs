# Marvel Website - NextJS Implementation

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Components](#components)
- [Features](#features)
- [API Integration](#api-integration)
- [Responsive Design](#responsive-design)

## Overview

This project is a Next.js implementation of a Marvel website redesign. It features a responsive homepage, character details modal, and integration with the Marvel API to display Spider-Man comics from 2022.

## Project Structure

```
dax_ko_nextjs/
├── .next/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── (home_sections)/
│   │   ├── comic/
│   │   │   ├── (comic_sections)/
│   │   │   └── page.jsx
│   │   ├── favicon.ico
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── components/
│   │   ├── common/
│   │   │   ├── footer/
│   │   │   ├── forms/
│   │   │   ├── header/
│   │   │   ├── loader/
│   │   │   └── modal/
│   │   └── layout/
│   │       ├── Banner.jsx
│   │       ├── CharacterDetails.jsx
│   │       ├── Comics.jsx
│   │       ├── Format.jsx
│   │       ├── ListingBlogs.jsx
│   │       ├── ListingHeroes.jsx
│   │       └── ListingMovies.jsx
│   ├── hooks/
│   │   └── useFetch.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── theme.css
│   └── utils/
│       └── Helpers.js
├── .env
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── tailwind.config.mjs
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/vaibhavsingh31390/dax_ko_nextjs
cd dax_ko_nextjs
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file and add required environment variables:

```env
NEXT_PUBLIC_MARAVEL_API_HOST=http://gateway.marvel.com/
NEXT_PUBLIC_MARAVEL_API_PUBLIC_KEY=your_api_key_here
NEXT_PUBLIC_MARAVEL_API_PRIVATE_KEY=your_private_key_here

```

4. Run the development server:

```bash
npm run dev
```

## Components

### Layout Components

1. **Banner.jsx**

   - Main hero section of the homepage
   - Features promotional content and main navigation
   - Styled with Banner.css

2. **CharacterDetails.jsx**

   - Modal component for displaying Marvel character information
   - Triggered when clicking on character cards
   - Includes character realted informations.

3. **Comics.jsx**

   - Displays Spider-Man comics from 2022
   - Integrates with Marvel API

4. **ListingHeroes.jsx**

   - Grid display of Marvel characters
   - Responsive grid layout

5. **ListingBlogs.jsx**

   - Displays blog posts and news articles
   - Features image thumbnails

6. **ListingMovies.jsx**
   - Shows Marvel movies/comic and related content
   - Includes release dates and movie/comic information

### Common Components

Located in `src/components/common/`:

- **footer/** - Site-wide footer component
- **forms/** - Reusable form components
- **header/** - Navigation and site header
- **loader/** - Loading states and animations
- **modal/** - Reusable modal component

## Features

### 1. Homepage Implementation

- Responsive design based on Figma template
- Dynamic content loading
- Interactive UI elements
- Optimized images and assets

### 2. Character Details Modal

- Click trigger on hero cards
- Animated modal appearance
- Detailed character information
- Mobile-responsive layout

### 3. Marvel API Integration

- Spider-Man comics from 2022
- Data fetching using custom `useFetch` hook
- Error handling and loading states
- Filtered results display

## API Integration

The project uses the Marvel API to fetch comics data. Integration is handled through the `useFetch` hook:

```javascript
// Example usage of useFetch hook
const { data, loading, error } = useFetch("/v1/public/comics", {
  params: {
    dateRange: "2022",
    characters: "spider-man",
  },
});
```

## Responsive Design

The website is responsive using tailwind css:
