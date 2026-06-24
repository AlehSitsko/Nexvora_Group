import './ValueCard.css';

export default function ValueCard({ icon, title, description }) {
  return (
    <div className="value-card">
      <div className="value-card__icon" aria-hidden="true">{icon}</div>
      <h3 className="value-card__title">{title}</h3>
      <p className="value-card__desc">{description}</p>
    </div>
  );
}
