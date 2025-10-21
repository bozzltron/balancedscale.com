export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      class="w-full text-center text-xs py-6 px-4 border-t mt-auto"
      style={{ 
        "background": "var(--bg-primary)",
        "color": "var(--text-tertiary)",
        "border-color": "var(--border-default)"
      }}
    >
      <div class="max-w-6xl mx-auto">
        <p>&copy; {currentYear} Balanced Scale Media LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}

