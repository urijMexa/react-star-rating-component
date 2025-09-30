import { Stars } from './Stars';

interface MovieCardProps {
    poster: string;
    tag: string;
    tagColor: 'orange' | 'brown';
    title: string;
    rating: number;
    price: number;
}

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);

const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
        <polyline points="16 6 12 2 8 6"></polyline>
        <line x1="12" y1="2" x2="12" y2="15"></line>
    </svg>
);


export function MovieCard({ poster, tag, tagColor, title, rating, price }: MovieCardProps) {
    return (
        <div className="movie-card">
            <div className="movie-poster-container">
                <img src={poster} alt={title} className="movie-poster" />
                <span className={`movie-tag ${tagColor}`}>{tag}</span>
            </div>
            <div className="movie-info">
                <div className="movie-header">
                    <h3 className="movie-title">{title}</h3>
                    <div className="movie-actions">
                        <HeartIcon />
                        <ShareIcon />
                    </div>
                </div>
                <div className="movie-rating">
                    <Stars count={rating} />
                </div>
                <div className="movie-footer">
                    <button className="buy-button">КУПИТЬ {price}Р</button>
                    <a href="#" className="details-link">ПОДРОБНЕЕ →</a>
                </div>
            </div>
        </div>
    );
}
