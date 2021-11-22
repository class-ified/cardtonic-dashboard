import React, {useCallback, useState} from 'react';
import Loader from 'components/Loader';
import {useInfiniteQuery} from 'react-query';
import { __DEV__ } from 'Constants/config';

/**
 * get all what you need from a infinte query
 * @param {function} query specified string
 * @param {string} queryKey query key for react-query
 * @param {UseInfiniteQueryOptions} options react-query options
 */

export function useScroller(
  query,
  queryKey,
  key,
  options = {},
) {

  const [refreshing, setRefreshing] = useState(false);
  const getData = ({pageParam = 1}) => query(pageParam);
  const {
    data: pureData,
    refetch,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    ...queryDetails
  } = useInfiniteQuery(queryKey, getData, {
    getNextPageParam: (lastPage, pages) => {
      if (pages.length >= lastPage.totalPages) {
        return undefined;
      }
      return pages.length + 1;
    },
    ...(__DEV__
      ? {}
      : {
          staleTime: 0,
          cacheTime: 0,
        }),
    ...options,
  });

  const getDataFromPages = useCallback(
    (pages) => {
      const container = [];
      pages?.forEach(page => {
        container.push(...page[key]);
      });
      return container;
    },
    [key],
  );
  const {pages} = pureData || {};

  const data = getDataFromPages(pages);

  const goToFirst = useCallback(
    () => fetchNextPage({pageParam: 0}),
    [fetchNextPage],
  );
  const handleLoadMore = React.useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  const renderListFooter = useCallback(() => {
    if (!isFetchingNextPage) {
      return null;
    }
    return (
      <Loader />
    );
  }, [isFetchingNextPage]);

  const renderListHeader = React.useCallback(() => {
    if (isFetching && !refreshing) {
      return (
        <Loader />
      );
    }
    return null;
  }, [isFetching, refreshing]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  return {
    refreshing,
    data,
    onRefresh,
    goToFirst,
    fetchNextPage,
    isFetchingNextPage,
    renderListFooter,
    renderListHeader,
    handleLoadMore,
    refetch,
    isFetching,
    ...queryDetails,
  };
}
