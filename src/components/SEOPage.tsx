import { Link } from "@tanstack/react-router";

export function SEOPage({
  title,
  description,
  content,
}: {
  title: string;
  description: string;
  content: string;
}) {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt; <span>{title}</span>
      </nav>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-lg text-muted-foreground">{description}</p>
      <div className="mt-6 whitespace-pre-line text-sm leading-7">{content}</div>
      <div className="mt-8 border-t pt-6">
        <Link to="/" className="text-brand underline">
          Back to home
        </Link>
      </div>
    </div>
  );
}
