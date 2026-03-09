import {
  Campaign,
  Code,
  DesignServices,
  Devices,
  Insights,
  IntegrationInstructions,
  Language,
  ManageAccounts,
  Phonelink,
  Search,
  Security,
  ShoppingCart
} from "@mui/icons-material";

const services = [
  {
    title: "WordPress Website Development",
    icon: <Language />,
    description: "Custom WordPress sites with speed, security and SEO-focused structure."
  },
  {
    title: "Theme Development",
    icon: <DesignServices />,
    description: "Bespoke WordPress themes aligned with your brand identity."
  },
  {
    title: "Plugin Customization",
    icon: <IntegrationInstructions />,
    description: "Extend functionality through reliable plugin customization."
  },
  {
    title: "Frontend Development",
    icon: <Code />,
    description: "Responsive, component-driven UI development with React and Bootstrap."
  },
  {
    title: "Landing Page Design",
    icon: <Phonelink />,
    description: "High-conversion landing pages optimized for engagement."
  },
  {
    title: "Website Optimization",
    icon: <Insights />,
    description: "Performance and Core Web Vitals optimization for better rankings."
  },
  {
    title: "Ecommerce Solutions",
    icon: <ShoppingCart />,
    description: "WooCommerce and custom ecommerce implementations."
  },
  {
    title: "SEO Setup",
    icon: <Search />,
    description: "Technical SEO setup and on-page best practices."
  },
  {
    title: "Website Security",
    icon: <Security />,
    description: "Security hardening, monitoring and malware prevention."
  },
  {
    title: "API Integration",
    icon: <Devices />,
    description: "Third-party API integration for CRM, payments, and automation."
  },
  {
    title: "Maintenance & Support",
    icon: <ManageAccounts />,
    description: "Ongoing updates, backups and post-launch technical support."
  },
  {
    title: "Digital Marketing Setup",
    icon: <Campaign />,
    description: "Analytics, conversion tracking and marketing tool setup."
  }
];

function Services() {
  return (
    <section id="services" className="section-gap section-alt">
      <div className="container">
        <h2 className="section-title text-center">Services</h2>
        <p className="text-center section-subtitle mb-5">What I can do for your business growth.</p>
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.title} className="col-sm-6 col-lg-3">
              <article className="service-card h-100">
                <div className="service-icon mb-3">{service.icon}</div>
                <h3 className="h6 fw-semibold">{service.title}</h3>
                <p className="mb-0 small">{service.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
