import Gallery from '@/components/Gallery';

export const metadata = {
  title: 'Gallery - Shining Stars Daycare',
  description: 'Take a peek into our vibrant learning environment where every day is filled with joy, discovery, and growth.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-16">
      <Gallery />
    </main>
  );
}
