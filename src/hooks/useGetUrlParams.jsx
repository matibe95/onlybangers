import { useParams } from 'react-router-dom';

export const useGetUrlParams = () => {
  const { id } = useParams();
  return { id };
};