export const Avatar = ({
  src,
  name,
  size = "w-10 h-10",
  online = false,
  isGroup = false,
}) => {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "G";

  return (
    <div className="relative">
      <div
        className={`${size} rounded-full overflow-hidden bg-gray-300 flex items-center justify-center`}
      >
        {src ? (
          <img src={src} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span
            className={`text-white font-medium ${
              size.includes("12") ? "text-lg" : "text-sm"
            }`}
          >
            {isGroup ? "👥" : initials}
          </span>
        )}
      </div>
      {online && (
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
      )}
    </div>
  );
};
