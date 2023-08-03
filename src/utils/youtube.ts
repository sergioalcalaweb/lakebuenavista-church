import { YoutubeVideo } from "@/types";

interface YoutubeSections {
  videos: YoutubeVideo[];
  conference: YoutubeVideo[];
  concerts: YoutubeVideo[];
}

export async function getChannelInfo(maxResults: number = 30): Promise<YoutubeSections> {
  const channel = process.env.YOUTUBE_CHANNEL_ID;
  const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search';
  const response = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=${maxResults}&channelId=${channel}&key=${process.env.YOUTUBE_API_KEY}`);
  const data = await response.json();
  return {
    videos: data.items.slice(0, 5),
    conference: data.items.slice(10, 15),
    concerts: data.items.slice(20, 25),
  };
}