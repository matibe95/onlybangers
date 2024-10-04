import { useParams } from 'react-router-dom';

export const useGetUrlParams = () => {
  const { referenceId } = useParams();
  return { referenceId };
};