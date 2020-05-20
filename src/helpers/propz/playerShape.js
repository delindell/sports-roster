import PropTypez from 'prop-types';

const playerShape = ({
  imageUrl: PropTypez.string.isRequired,
  name: PropTypez.string.isRequired,
  position: PropTypez.string.isRequired,
  uid: PropTypez.string.isRequired,
  id: PropTypez.string.isRequired,
});

export default { playerShape };
