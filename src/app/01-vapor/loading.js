import React from 'react';

import LibraryGameCard from '@/components/LibraryGameCard';
import { range } from '@/utils';
import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton/LibraryGameCardSkeleton';
import ArticleWrapper from './ArticleWrapper';

async function VaporLoading() {

    return (
        <ArticleWrapper>
            {
                range(12).map((num) =>
                    <LibraryGameCardSkeleton key={num} />
                )
            }
        </ArticleWrapper>
    );
}

export default VaporLoading;