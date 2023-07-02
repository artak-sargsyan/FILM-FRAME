const key = '96e82144f22a6fc704e14df02ac33258'

const requests = {
    
requestMovie:         `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
requestPopular:       `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
requestLatest:        `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
requestTranslations:  `https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}/episode/{episode_number}/translations?api_key=${key}`,
requestEpisode:       `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
requestDiscover:      `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
requestUpcoming:      `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
};
export default requests