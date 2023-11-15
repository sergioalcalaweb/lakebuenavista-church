import { YoutubeVideo } from "@/types";

interface YoutubeSections {
  videos: YoutubeVideo[];
}

export async function getChannelInfo(maxResults: number = 30): Promise<YoutubeSections> {
  try {
    const channel = process.env.YOUTUBE_CHANNEL_ID;
    const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search';
    const response = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&eventType=completed&channelType=any&order=date&type=video&maxResults=${maxResults}&channelId=${channel}&key=${process.env.YOUTUBE_API_KEY}`, {cache: 'no-store'});
    const data = await response.json();
    return {
      videos: data.items,
    };
  } catch (error) {
    return {
      videos: [],
    }
  }
}