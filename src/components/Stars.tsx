import { Star } from './Star';

interface StarsProps {
  count?: number;
}

export function Stars({ count = 0 }: StarsProps) {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }

  const starElements = Array.from({ length: count }, (_, index) => (
    <li key={index}>
      <Star />
    </li>
  ));

  return (
    <ul className="card-body-stars u-clearfix">
      {starElements}
    </ul>
  );
}
