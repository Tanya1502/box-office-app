import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getShowById } from '../api/tvmaze';
import { useState } from 'react';

const useShowById = showId => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const data = await getShowById(showId);
  //         setShowData(data);
  //       } catch (error) {
  //         setShowError(error);
  //       }
  //     }
  //     fetchData();
  //   }, [showId]);

  //   return { showData, showError };
};

const Show = () => {
  const { showId } = useParams();
  // const { showData, showError } = useShowById(showId);
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });

  if (showError) {
    return <div>We have an error: ${showError.message} </div>;
  }

  if (showData) {
    return <div>Got show data: ${showData.name}</div>;
  }

  return <div>Data is loading</div>;
};

export default Show;
