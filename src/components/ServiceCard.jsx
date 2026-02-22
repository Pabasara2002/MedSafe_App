export default function ServiceCard({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
