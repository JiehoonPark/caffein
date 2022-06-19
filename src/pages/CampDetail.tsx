import { useParams } from 'react-router-dom';
const CampDetail = () => {
  const { id } = useParams();
  return <div>디테일:{id}</div>;
};

export default CampDetail;
