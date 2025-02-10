import { Card, CardContent } from "@/components/ui/card";

interface VideoDisplayProps {
    category: string;
}

const VideoDisplay: React.FC<VideoDisplayProps> = ({ category }) => {
    const videos: { [key: string]: string[] } = {
        Trending: ["QnuWBis_apQ?si=6Lixu8TWX6HBUS3-", "UsryeHq8NxQ?si=nxOJRrYQ1OqLux2-", "XWO3XZl1W9w?si=2i_4XhIY-zz5_NLG"],
        Sports: ["0euyoU5rOYY?si=_O6woznrC3WBOmNp", "hIYmzjlqSc4?si=EpalmGoF4CbTYVxm", "zYptDWzO4BQ?si=hBMGyVveibTPppIT"],
        Health: ["ewK9UFPcpfs?si=22d_bNS58tgDoDPn", "0euyoU5rOYY?si=_O6woznrC3WBOmNp", "UsryeHq8NxQ?si=nxOJRrYQ1OqLux2-"],
        Agriculture: ["XWO3XZl1W9w?si=2i_4XhIY-zz5_NLG", "kux15fINzVE?si=xZ5hbFxMGWC7LmDw", "hIYmzjlqSc4?si=EpalmGoF4CbTYVxm"],
        Finance: ["_FDzJQfrOgs?si=SML5uI1QCgbggf4c", "Iw9HodDDr0Y?si=CVAdRuMcSIu3NTEU", "kux15fINzVE?si=xZ5hbFxMGWC7LmDw"],
    };

    const videoIds = (videos[category] || []).map(id => id.split("?")[0]);


    return (
        <main className="grid grid-cols-1  md:grid-cols-3 gap-4 w-full max-w-full px-5 md:p-10 mt-20">
            {/* Large video on the left */}
            <Card className="md:col-span-2 hover:shadow-xl hover:shadow-[#681fa379] transition-shadow">
                <CardContent className="p-0">
                    {videoIds.length > 0 && (
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
                    )}

                </CardContent>
            </Card>

            {/* Two smaller videos on the right */}
            <div className="flex flex-col gap-4">
                
                    {
                        videoIds.slice(1, 3).map((videoId) => (
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
                        ))
                    }
                
            </div>
        </main>
    );
};

export default VideoDisplay;