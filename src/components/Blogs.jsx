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
                setBlogData(data.data.publication.posts.edges);
                setLoading(true);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };

        fetchRes();
    }, [loading]);

    return (
        <div className="grid space-y-8 grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {BlogData ? (
                BlogData.map(({ node }) => (
                    <div
                        key={node.url}
                        onClick={() => window.open(node.url, "_blank")}
                        className="p-6 rounded-2xl shadow-lg  cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1 space-y-1"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 ">
                            {node.title}
                        </h2>
                        <p className="text-gray-600 text-justify leading-relaxed">{node.brief}</p>
                    </div>
                ))
            ) : (
                <p className="w-full flex justify-center text-lg font-medium text-gray-500">
                    Loading ...
                </p>
            )}
        </div>

    );
};

export default Blogs;
