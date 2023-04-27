export default function Avatar({ image }: { image?: string | null }) {
  return (
    <div className="w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="rounded-full hover:opacity-90 transition-opacity p-[0.15rem]"
        src={image ?? undefined}
        alt="user profile"
      />
    </div>
  );
}
