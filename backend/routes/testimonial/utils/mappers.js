const mapTestimonialToResponse = (testimonial) => ({
  id: testimonial.id,
  customerName: testimonial.customerName,
  countryCode: testimonial.countryCode,
  companyName: testimonial.companyName,
  customerPosition: testimonial.customerPosition,
  feedback: testimonial.feedback,
  sites: testimonial.sites.map((site) => ({
    id: site.id,
    name: site.name,
    rate: site.rate,
    link: site.link,
  })),
});

exports.mapTestimonialToResponse = mapTestimonialToResponse;
