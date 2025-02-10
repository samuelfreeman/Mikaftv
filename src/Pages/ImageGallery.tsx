import { Card, CardContent } from "@/components/ui/card";

interface VideoDisplayProps {
    category: string;
}

const VideoDisplay: React.FC<VideoDisplayProps> = ({ category }) => {
    const videos: { [key: string]: string[] } = {
        Trending: ["QnuWBis_apQ?si=6Lixu8TWX6HBUS3-", "kJQP7kiw5Fk", "RgKAFK5djSk"],
        Sports: ["FpM5LxRlWqg", "9bZkp7q19f0", "CevxZvSJLk8"],
        Health: ["hD7JV5k4A6I", "6ZfuNTqbHE8", "3JWTaaS7LdU"],
        Agriculture: ["YQHsXMglC9A", "fRh_vgS2dFE", "OPf0YbXqDm0"],
        Finance: ["RgKAFK5djSk", "kJQP7kiw5Fk", "dQw4w9WgXcQ"],
    };

    const videoIds = videos[category] || [];

    return (
        <main className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-full p-10 mt-20">
            {/* Large video on the left */}
            <Card className="md:col-span-2 hover:shadow-xl hover:shadow-[#681fa379] transition-shadow">
                <CardContent className="p-0">
                    <iframe
                        width="100%"
                        height="400" // Adjust height as needed
                        src={`https://www.youtube.com/embed/${videoIds[0]}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="aspect-video rounded-lg"
                    />
                  
                </CardContent>
            </Card>

            {/* Two smaller videos on the right */}
            <div className="flex flex-col gap-4">
                {videoIds.slice(1, 3).map((videoId) => (
                    <Card key={videoId} className="hover:shadow-xl hover:shadow-[#681fa379] transition-shadow">
                        <CardContent className="p-0">
                            <iframe
                                width="100%"
                                height="200" // Adjust height as needed
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                                className="aspect-video rounded-lg"
                            />
                           
                        </CardContent>
                    </Card>
                ))}
            </div>
        </main>
    );
};

export default VideoDisplay;