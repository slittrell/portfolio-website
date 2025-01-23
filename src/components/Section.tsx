interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function Section({ 
  children, 
  className = '', 
  title, 
  subtitle 
}: SectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {subtitle && (
              <p className="text-gray-600 text-lg">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
} 