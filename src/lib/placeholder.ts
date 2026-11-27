// Temporary gradient covers until real media is added
const gradients = [
  "from-violet-400/60 to-fuchsia-300/40",
  "from-sky-400/60 to-indigo-300/40",
  "from-amber-300/60 to-rose-300/40",
  "from-emerald-300/60 to-teal-400/40",
  "from-pink-300/60 to-purple-400/40",
];

export function getPlaceholderGradient(id: number) {
  return gradients[id % gradients.length];
}