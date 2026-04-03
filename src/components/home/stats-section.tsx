export const StatsSection = () => {
  const stats = [
    { label: 'Clients Served', value: '200+' },
    { label: 'Industries Covered', value: '15+' },
    { label: 'On-time Deliveries', value: '100%' },
    { label: 'Years of Experience', value: '5+' },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tighter">{stat.value}</h3>
              <p className="text-text/40 text-xs font-medium uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
