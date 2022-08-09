const mapSloganToResponse = (slogan) => ({
  id: slogan.id,
  title: slogan.title,
  text: slogan.text,
  selected: slogan.selected,
});

exports.mapSloganToResponse = mapSloganToResponse;
