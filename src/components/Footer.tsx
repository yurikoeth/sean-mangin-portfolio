export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
        <p>&copy; {new Date().getFullYear()} Sean Mangin. All rights reserved.</p>
        <p className="font-mono text-xs text-neutral-700">
          Built with Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
