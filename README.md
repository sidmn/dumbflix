# DumbFlix - A dumbed down Movie App

## Overview
This is a Next.js-based movie app that fetches and displays trending movies using The Movie Database (TMDb) API. Users can search for movies, view details, and explore trending films.

###**These was the basic thought process and steps followed behind creating this:**

- There were 3 features that needed to be implemented Search, Trending Movies and Movie Details.

- Took reference for UI from Netflix and TMDB itself and started working on the skeleton of the website. Integrated Search and Trending in the homepage itself and upon clicking a movie with the help of Dynamic Routing created a Movie Details Page.

- With the time remaining I worked on making the site responsive, UI cleaner, while also creating a Trending page separately.

- With the site up and running I focused on optimizing images etc.

##**Technical decision:**

**NextJs:** For improved SEO and performance. Its has built-in Image Optimization and lazy loading.

**Tailwind CSS:** For rapid styling

Note: As no complex state management was involved that required global persistence, I didn't use any libraries.


##**Trade offs:**

- Upon scaling state management library will be required.

- Though Tailwind was used for Rapid Styling, better formatting and global styles would be required for scalability and readability.

  

## Running the App

### 1. **Clone the Repository**
```sh
git clone https://github.com/your-username/movie-app.git
cd movie-app
```

### 2. **Install Dependencies**
```sh
npm install
```

### 3. **Set Up Environment Variables**
Create a `.env.local` file in the root directory and add:
```
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
```

### 4. **Run the Development Server**
```sh
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. **Build for Production**
```sh
npm run build
npm start
```

---
### Author
Developed by Siddharth

