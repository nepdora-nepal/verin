
import React from 'react';
import NewsList from '@/components/news/news-list';

const NewsPage: React.FC = () => {
    return (
        <div className="pt-48 pb-32 px-10 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-6xl  mb-16 text-center tracking-tight">The Journal</h1>
            <NewsList />
        </div>
    );
};

export default NewsPage;
