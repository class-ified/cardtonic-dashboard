import {
    fetchCards,
    fetchCardsSubCategory,
    fetchHottestCards,
  } from 'api';
  import {useQuery, useQueryClient} from 'react-query';
  
  export const useHottestCards = () => {
    return useQuery('hottestCards', () => fetchHottestCards());
  };
  
  export const useGiftcards = () => {
    const queryClient = useQueryClient();
    return useQuery('cards', () => fetchCards(), {
      onSuccess: (data = []) => {
        try {
          data.forEach(categrory => {
            queryClient.prefetchQuery(['cardSubCategory', categrory.id], () =>
              fetchCardsSubCategory(categrory.id),
            );
          });
        } catch (error) {}
      },
    });
  };
  