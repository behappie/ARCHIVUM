/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Website } from '../types';

interface WebsiteCardProps {
  website: Website;
  isDark: boolean;
  isFavourite: boolean;
  onToggleFavourite: (id: string) => void;
  onTagClick: (tag: string) => void;
}

// Map logical string icon names to Lucide icon components
const getLucideIcon = (name: string) => {
  const IconComponent = (Icons as any)[name];
  if (IconComponent) {
    return <IconComponent className="w-5 h-5" />;
  }
  return <Icons.ExternalLink className="w-5 h-5" />;
};

// Generates a consistent pastel style color depending on the website's ID in Light Mode
const getPastelColorClass = (id: string): { bg: string; text: string; border: string; badge: string; accent: string } => {
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const palettes = [
    // Pastel Blue
    {
      bg: 'bg-blue-50/90',
      text: 'text-blue-950',
      border: 'border-blue-200',
      badge: 'bg-blue-100/80 text-blue-800 border-blue-300',
      accent: 'bg-blue-100 text-blue-750 hover:bg-blue-200/90'
    },
    // Pastel Purple
    {
      bg: 'bg-purple-50/90',
      text: 'text-purple-950',
      border: 'border-purple-200',
      badge: 'bg-purple-100/80 text-purple-800 border-purple-300',
      accent: 'bg-purple-100 text-purple-750 hover:bg-purple-200/90'
    },
    // Pastel Green
    {
      bg: 'bg-emerald-50/90',
      text: 'text-emerald-950',
      border: 'border-emerald-200',
      badge: 'bg-emerald-100/80 text-emerald-800 border-emerald-300',
      accent: 'bg-emerald-100 text-emerald-750 hover:bg-emerald-200/90'
    }
  ];
  return palettes[hash % palettes.length];
};

// Generates a clean cyan styling structure for dark mode cards as requested
const getNeonColorClass = (id: string): { bg: string; text: string; border: string; glowClass: string; badge: string; accent: string } => {
  return {
    bg: 'bg-slate-900/80 backdrop-blur-md',
    text: 'text-slate-100',
    border: 'border-cyan-500/30 group-hover:border-cyan-400/90',
    glowClass: 'neon-glow-cyan',
    badge: 'bg-cyan-950/70 text-cyan-300 border-cyan-500/40',
    accent: 'bg-cyan-950/80 text-cyan-350 hover:bg-cyan-900 border-cyan-500/20'
  };
};

export const WebsiteCard: React.FC<WebsiteCardProps> = ({
  website,
  isDark,
  isFavourite,
  onToggleFavourite,
  onTagClick
}) => {
  const lightColors = getPastelColorClass(website.id);
  const darkColors = getNeonColorClass(website.id);

  // Dynamic theme styling powered by CSS variables
  const cardClassName = "sleek-card rounded-2xl text-[var(--text)] p-5 relative flex flex-col justify-between";

  const badgeClassName = isDark 
    ? "bg-slate-900 border-cyan-500/30 text-cyan-400"
    : `${lightColors.badge}`;

  const accentBtnClassName = isDark
    ? "bg-cyan-950/40 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/80"
    : `${lightColors.accent}`;

  // Handles safe external navigation
  const handleOpenLink = (e: React.MouseEvent) => {
    // Make sure we stop propagation to avoid card-level trigger if any
    e.stopPropagation();
  };

  return (
    <motion.div
      layout
      className={cardClassName}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      {/* Favourite / Star Button at top-right */}
      <button
        onClick={() => onToggleFavourite(website.id)}
        className="absolute top-4 right-4 z-10 p-2 rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 duration-200"
        aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
        id={`fav-btn-${website.id}`}
        style={{ touchAction: 'manipulation' }}
      >
        <Icons.Star
          className={`w-6 h-6 transition-all duration-300 ${
            isFavourite
              ? 'fill-[var(--accent)] text-[var(--accent)] filter drop-shadow-[0_0_4px_var(--accent)]'
              : isDark
                ? 'text-slate-600 hover:text-cyan-400'
                : 'text-slate-300 hover:text-[var(--accent)]'
          }`}
        />
      </button>

      <div>
        {/* Category Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-2xs font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border ${badgeClassName}`}>
            {website.category}
          </span>
        </div>

        {/* Website Title & Icon */}
        <div className="flex items-center gap-3 mb-3 pr-8">
          <div className={`p-2.5 rounded-xl border flex items-center justify-center transition-colors duration-300 ${
            isDark ? 'bg-slate-900 border-slate-800 text-cyan-400' : 'bg-white border-slate-200 text-[var(--accent)]'
          }`}>
            {getLucideIcon(website.iconName)}
          </div>
          <h3 className={`text-lg font-bold leading-tight tracking-tight text-[var(--text)]`}>
            {website.name}
          </h3>
        </div>

        {/* Description paragraph */}
        <p className={`text-sm leading-relaxed mb-4 font-normal opacity-85 text-[var(--text)]`}>
          {website.description}
        </p>
      </div>

      <div>
        {/* Dynamic Interactive Tag elements */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {website.tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagClick(tag)}
              className={`text-2xs px-2 py-0.5 rounded-md border transition-all duration-150 cursor-pointer ${
                isDark
                  ? 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-cyan-400/50 hover:text-cyan-350'
                  : 'bg-white/60 text-slate-600 border-slate-200/95 hover:border-[var(--accent)] hover:bg-white hover:text-[var(--accent)]'
              }`}
              style={{ touchAction: 'manipulation' }}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Navigation Action Buttons - touch target >= 44px */}
        <div className="flex items-center justify-center mt-auto">
          <a
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOpenLink}
            className={`cursor-pointer inline-flex items-center justify-center gap-1.5 py-2.5 px-6 rounded-xl border font-bold text-xs shadow-xs transition-all duration-150 select-none w-full max-w-[180px] ${accentBtnClassName}`}
            id={`link-anchor-${website.id}`}
            style={{ minHeight: '44px', touchAction: 'manipulation' }}
          >
            <span>Launch</span>
            <Icons.ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
