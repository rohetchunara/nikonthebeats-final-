import type { SonicMood } from '../types';

export type TrackCategory = 'commercial-film' | 'hiphop-beats' | 'pop-indie';

export interface Track {
  id: number;
  title: string;
  artist: string;
  category: TrackCategory;
  mood: SonicMood;
}

export const tracks: Track[] = [
  {
    id: 1,
    title: 'Kathmandu Dawn',
    artist: 'Indie Film Score',
    category: 'commercial-film',
    mood: 'dark-void',
  },
  {
    id: 2,
    title: 'Brand Anthem',
    artist: 'Ad Campaign',
    category: 'commercial-film',
    mood: 'form',
  },
  {
    id: 3,
    title: 'Urban Nepal',
    artist: 'Commercial Spot',
    category: 'commercial-film',
    mood: 'structure',
  },
  {
    id: 4,
    title: 'Kailali Vibes',
    artist: 'Local Feature Artist',
    category: 'hiphop-beats',
    mood: 'structure',
  },
  {
    id: 5,
    title: 'Street Elegance',
    artist: 'R&B Collective',
    category: 'hiphop-beats',
    mood: 'peaceful-trust',
  },
  {
    id: 6,
    title: 'Himalayan Dreams',
    artist: 'Instrumental',
    category: 'pop-indie',
    mood: 'peaceful-trust',
  },
  {
    id: 7,
    title: 'Valley Echoes',
    artist: 'Indie Sessions',
    category: 'pop-indie',
    mood: 'dark-void',
  },
  {
    id: 8,
    title: 'Signal Decay',
    artist: 'Experimental Suite',
    category: 'pop-indie',
    mood: 'form',
  },
];

export type CategoryFilter = 'all' | TrackCategory;

export const categories: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'commercial-film', label: 'Commercial & Film' },
  { id: 'hiphop-beats', label: 'Hip-Hop & Beats' },
  { id: 'pop-indie', label: 'Pop & Indie' },
];
