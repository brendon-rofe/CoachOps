interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
}

export default function Avatar({ src, alt = "", size = 40 }: AvatarProps) {
  return (
    <div
      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full"
      style={{ backgroundImage: `url(${src})`, width: size, height: size }}
      role="img"
      aria-label={alt}
    />
  );
}
