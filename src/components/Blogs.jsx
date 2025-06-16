"use client";
import React, { useState, useEffect } from "react";

const Blogs = () => {
    const [BlogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRes = async () => {
            try {
                const response = await fetch("/api/hashnode");
                const data = await response.json();
                console.log(data);
                setBlogData(data.data.publication.posts.edges);
                setLoading(true);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };

        fetchRes();
    }, [loading]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 blogs-parent">
            {BlogData ? (
                BlogData.map(({ node }) => (
                    <div
                        key={node.id}
                        onClick={() => window.open(node.url, "_blank")}
                        className="group rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 overflow-hidden "
                    >
                        {/* Date */}
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            {new Date(node.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </div>
                        {/* Cover Image */}
                        {node.coverImage?.url && (
                            <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600">
                                <img
                                    src={node.coverImage.url}
                                    alt={node.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                                {node.featured && (
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                            Featured
                                        </span>
                                    </div>
                                )}
                                <div className="absolute top-3 right-3">
                                    <span className="bg-black/20 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                                        {node.readTimeInMinutes} min read
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            {/* Title */}
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                                {node.title}
                            </h2>

                            {/* Brief */}
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                                {node.brief}
                            </p>

                            {/* Tags */}
                            {node.tags && node.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {node.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag.id}
                                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                    {node.tags.length > 3 && (
                                        <span className="text-gray-500 dark:text-gray-400 text-xs font-medium px-2 py-1">
                                            +{node.tags.length - 3} more
                                        </span>
                                    )}
                                </div>
                            )}


                        </div>
                    </div>
                ))
            ) : (
                <div className="col-span-full flex justify-center items-center py-12">
                    <div className="text-center space-y-3">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
                        <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
                            Loading amazing content...
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blogs;
