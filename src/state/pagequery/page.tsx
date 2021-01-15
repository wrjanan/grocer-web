import { useState, useEffect } from 'react';

export interface PageParam {
    index: number,
    size: number,
    count: number,
}

const initialPageParam = {
    index: 0,
    size: 50,
    count: 0,
}

const useQueryPagingStatus = (page = initialPageParam) => {
    const [pageIndex, setPageIndex] = useState(page.index);
    const [pageSize, setPageSize] = useState(page.size);
    const [pageCount, setPageCount] = useState(page.count);

  return { pageIndex, pageSize, pageCount, setPageIndex, setPageSize, setPageCount };
}

export default useQueryPagingStatus;