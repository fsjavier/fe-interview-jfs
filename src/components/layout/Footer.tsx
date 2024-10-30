export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="p-4 mt-6 bg-background-primary">
      <div className="container mx-auto">
        <p>&copy; {year} Posts App</p>
      </div>
    </footer>
  );
}
