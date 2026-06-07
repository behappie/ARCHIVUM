/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lightbulb, 
  LightbulbOff, 
  Search, 
  X, 
  Star, 
  Folder, 
  Sparkles, 
  Cpu, 
  FileText, 
  Image, 
  Heart, 
  RotateCcw, 
  HelpCircle, 
  Compass, 
  SlidersHorizontal,
  Layers,
  ArrowUpDown
} from 'lucide-react';
import { WEBSITES_DATA } from './data';
import { Website, CategoryType } from './types';
import { WebsiteCard } from './components/WebsiteCard';

export default function App() {
  // Theme state: defaults to dark mode (light bulb OFF) or user's previous preference
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Default to dark mode (neon muted colours) as requested by default
    return true;
  });

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All' | 'Favourites'>('All');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Sorting options
  const [sortBy, setSortBy] = useState<'name' | 'category'>('name');

  // Favourites state persistence - using LocalStorage
  const [favourites, setFavourites] = useState<string[]>(() => {
    const saved = localStorage.getItem('starred_websites_v1');
    return saved ? JSON.parse(saved) : [];
  });

  // Apply class and CSS variable adjustments to the main document element for theme styling precision
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.setProperty('--bg', '#0B132B'); // Cyber Cyan space background
      root.style.setProperty('--sidebar', '#0F1D36'); // Deep dark cyber blue sidebar
      root.style.setProperty('--card', '#1C2541'); // Deep slate blue card
      root.style.setProperty('--text', '#E2E8F0');
      root.style.setProperty('--accent', '#00FFFF'); // All Cyan
      root.style.setProperty('--neon-glow', '0 0 10px rgba(0,255,255,0.4)');
      root.style.setProperty('--border', 'rgba(255,255,255,0.1)');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--bg', '#EFF6FF'); // Soft pastel blue background
      root.style.setProperty('--sidebar', '#F3E8FF'); // Soft pastel purple sidebar
      root.style.setProperty('--card', '#FFFFFF'); // Clean card
      root.style.setProperty('--text', '#1E1B4B'); // Deep purple text for high contrast on pastels
      root.style.setProperty('--accent', '#10B981'); // Vibrant pastel green accent
      root.style.setProperty('--neon-glow', 'transparent');
      root.style.setProperty('--border', 'rgba(0,0,0,0.1)');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Synchronise favourites list in LocalStorage when edited
  useEffect(() => {
    localStorage.setItem('starred_websites_v1', JSON.stringify(favourites));
  }, [favourites]);

  // Handler for starring and unstarring website cards
  const handleToggleFavourite = (id: string) => {
    setFavourites(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Extract all unique tags present across all websites for our sidebar filter
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    WEBSITES_DATA.forEach(site => {
      site.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, []);

  // Filter lists based on Search Query, Category Selector, and Tag Selector
  const filteredWebsites = useMemo(() => {
    let result = [...WEBSITES_DATA];

    // Filter by Category
    if (selectedCategory === 'Favourites') {
      result = result.filter(site => favourites.includes(site.id));
    } else if (selectedCategory !== 'All') {
      result = result.filter(site => site.category === selectedCategory);
    }

    // Filter by Tag
    if (selectedTag) {
      result = result.filter(site => site.tags.includes(selectedTag));
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const normalizedQuery = searchQuery.toLowerCase().trim();
      result = result.filter(site => {
        const nameMatch = site.name.toLowerCase().includes(normalizedQuery);
        const descMatch = site.description.toLowerCase().includes(normalizedQuery);
        const categoryMatch = site.category.toLowerCase().includes(normalizedQuery);
        const tagMatch = site.tags.some(tag => tag.toLowerCase().includes(normalizedQuery));
        const urlMatch = site.url.toLowerCase().includes(normalizedQuery);
        return nameMatch || descMatch || categoryMatch || tagMatch || urlMatch;
      });
    }

    // Sort order
    if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
      result.sort((a, b) => a.category.localeCompare(b.category));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedTag, favourites, sortBy]);

  // Calculate distinct stats for bento layout indicators
  const stats = useMemo(() => {
    return {
      total: WEBSITES_DATA.length,
      personalApps: WEBSITES_DATA.filter(s => s.category === 'Personal Apps').length,
      geminiGems: WEBSITES_DATA.filter(s => s.category === 'Gemini Gems').length,
      externalSites: WEBSITES_DATA.filter(s => s.category === 'External Sites').length,
      imageTools: WEBSITES_DATA.filter(s => s.category === 'Image Generation + Edit').length,
      favouritesCount: favourites.length
    };
  }, [favourites]);

  // Quick reset all filters helper
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedTag(null);
  };

  // Dynamically set category from stats block
  const handleStatCardClick = (category: CategoryType | 'All' | 'Favourites') => {
    setSelectedCategory(category);
    setSelectedTag(null); // Clear tag selection when changing category for cleaner UX
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row transition-colors duration-300" style={{ fontFamily: 'Margarine, system-ui, sans-serif', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* 1. LEFT SIDEBAR */}
      <aside className="w-full md:w-80 shrink-0 p-6 md:h-screen md:sticky md:top-0 border-b md:border-b-0 md:border-r border-[var(--border)] flex flex-col justify-between overflow-y-auto" style={{ backgroundColor: 'var(--sidebar)' }}>
        <div className="space-y-8">
          {/* Brand/Logo Area */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full animate-ping bg-[var(--accent)]" />
            <h1 className="text-3xl font-black tracking-wider" style={{ fontFamily: '"Rampart One", system-ui, sans-serif', color: 'var(--text)' }}>
              💎 ARCHIVUM
            </h1>
          </div>

          {/* Interactive Mode Bulb block */}
          <div className="p-4 rounded-xl border border-[var(--border)] flex flex-col items-center text-center bg-[var(--card)]/40">
            <motion.button
              onClick={() => setIsDark(prev => !prev)}
              className={`relative cursor-pointer w-16 h-16 rounded-full border-2 flex flex-col items-center justify-center transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-950 border-cyan-500/30 text-cyan-400 hover:border-cyan-400' 
                  : 'bg-white border-yellow-300 text-yellow-500 hover:scale-105 shadow-md'
              }`}
              whileTap={{ scale: 0.95 }}
              title="Click light bulb to alter theme"
              id="theme-lightbulb"
              style={{ touchAction: 'manipulation' }}
            >
              {/* Soft pulsing glow behind the light bulb */}
              <span className={`absolute inset-0.5 rounded-full animate-pulse opacity-20 blur-md ${
                isDark ? 'bg-cyan-500' : 'bg-yellow-100'
              }`} />
              
              {isDark ? (
                <LightbulbOff className="w-7 h-7 transition-all duration-300 rotate-180" />
              ) : (
                <Lightbulb className="w-7 h-7 text-amber-500 filter drop-shadow-[0_0_4px_rgba(245,158,11,0.5)] transition-all duration-300 animate-bounce" />
              )}
            </motion.button>
          </div>

          {/* Sidebar Nav categories */}
          <div className="space-y-2">
            <h2 className="text-4xs uppercase tracking-widest font-black text-[var(--text)] opacity-50 px-2">
              Category Navigation
            </h2>
            <nav className="space-y-1">
              {[
                { label: 'All Sites', value: 'All', count: stats.total, icon: Folder },
                { label: 'Personal Apps', value: 'Personal Apps', count: stats.personalApps, icon: Cpu },
                { label: 'Gemini Gems', value: 'Gemini Gems', count: stats.geminiGems, icon: Sparkles },
                { label: 'External Sites', value: 'External Sites', count: stats.externalSites, icon: FileText },
                { label: 'Image Tools', value: 'Image Generation + Edit', count: stats.imageTools, icon: Image },
                { label: 'Favourites', value: 'Favourites', count: stats.favouritesCount, icon: Star },
              ].map((item) => {
                const isActive = selectedCategory === item.value;
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.value}
                    onClick={() => handleStatCardClick(item.value as any)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl border flex items-center justify-between transition-all duration-200 font-extrabold text-2xs select-none cursor-pointer ${
                      isActive 
                        ? 'bg-[var(--card)] border-[var(--accent)] text-[var(--accent)] shadow-[var(--neon-glow)]' 
                        : 'bg-transparent border-transparent text-[var(--text)] opacity-75 hover:opacity-100 hover:bg-[rgba(255,255,255,0.15)] hover:border-[var(--border)]'
                    }`}
                    style={{ touchAction: 'manipulation' }}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComponent className="w-4 h-4 shrink-0" />
                      <span>{item.label}</span>
                    </div>
                    <span className={`text-4xs px-2 py-0.5 rounded-md border font-black ${
                      isActive 
                        ? 'bg-[var(--accent)]/15 border-[var(--accent)]/30 text-[var(--accent)]' 
                        : 'bg-[var(--card)]/50 border-[var(--border)] text-[var(--text)]'
                    }`}>
                      {item.count}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>

      {/* 2. MAIN VIEWPANE AREA */}
      <main className="flex-1 p-5 md:p-8 flex flex-col gap-6 overflow-y-auto max-w-7xl mx-auto w-full md:max-h-screen">
        
        {/* Active Route Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-dashed border-[var(--border)]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <h1 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text)' }}>
                {selectedCategory === 'All' ? 'Complete Interactive Dashboard' : selectedCategory}
              </h1>
            </div>
            <p className="text-xs max-w-2xl leading-relaxed text-[var(--text)] opacity-75">
              An interactive, beautifully categorised webapp cataloguing personal utilities, Gemini Gems, external production resources, and creative imagery spaces.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <span className="text-4xs font-mono px-2.5 py-1 rounded-md bg-[var(--card)] border border-[var(--border)] text-[var(--text)] opacity-85">
              Active Server Connection: Stable
            </span>
          </div>
        </div>

        {/* BENTO STATS / INFO AREA */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <button 
            onClick={() => handleStatCardClick('All')}
            className={`p-4 rounded-xl border text-left flex flex-col justify-between cursor-pointer transition-all ${
              selectedCategory === 'All' ? 'border-[var(--accent)] bg-[var(--card)]' : 'border-[var(--border)] bg-[var(--card)]/45 hover:border-[var(--accent)]'
            }`}
          >
            <span className="text-4xs uppercase tracking-wider font-extrabold opacity-60">Total Directory</span>
            <div className="mt-2 text-2xl font-black">{stats.total}</div>
          </button>
          <button 
            onClick={() => handleStatCardClick('Gemini Gems')}
            className={`p-4 rounded-xl border text-left flex flex-col justify-between cursor-pointer transition-all ${
              selectedCategory === 'Gemini Gems' ? 'border-[var(--accent)] bg-[var(--card)]' : 'border-[var(--border)] bg-[var(--card)]/45 hover:border-[var(--accent)]'
            }`}
          >
            <span className="text-4xs uppercase tracking-wider font-extrabold opacity-60">Gemini Experts</span>
            <div className="mt-2 text-2xl font-black">{stats.geminiGems}</div>
          </button>
          <button 
            onClick={() => handleStatCardClick('Personal Apps')}
            className={`p-4 rounded-xl border text-left flex flex-col justify-between cursor-pointer transition-all ${
              selectedCategory === 'Personal Apps' ? 'border-[var(--accent)] bg-[var(--card)]' : 'border-[var(--border)] bg-[var(--card)]/45 hover:border-[var(--accent)]'
            }`}
          >
            <span className="text-4xs uppercase tracking-wider font-extrabold opacity-60">Custom Projects</span>
            <div className="mt-2 text-2xl font-black">{stats.personalApps}</div>
          </button>
          <button 
            onClick={() => handleStatCardClick('Favourites')}
            className={`p-4 rounded-xl border text-left flex flex-col justify-between cursor-pointer transition-all ${
              selectedCategory === 'Favourites' ? 'border-[var(--accent)] bg-[var(--card)] font-bold' : 'border-[var(--border)] bg-[var(--card)]/45 hover:border-[var(--accent)]'
            }`}
          >
            <span className="text-4xs uppercase tracking-wider font-extrabold opacity-60">Favourites Starred</span>
            <div className="mt-2 text-2xl font-black">{stats.favouritesCount}</div>
          </button>
        </div>

        {/* CONTROL PANEL (SEARCH / SORTERS / TAG CHIPS) */}
        <section className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
          <div className="flex flex-col gap-4">
            
            {/* Search Input Row with functional clear button */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-4 h-4 text-[var(--text)] opacity-60" />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter repository by title, summary text, tag tags, or url reference..."
                  className="w-full pl-9 pr-9 py-2.5 rounded-xl border text-xs focus:outline-none transition-all duration-200 font-normal outline-none bg-transparent border-[var(--border)] text-[var(--text)] focus:border-[var(--accent)]"
                  id="global-search-bar"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:scale-105 transition-transform text-[var(--text)] opacity-65"
                    aria-label="Clear search"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Sorter block */}
              <div className="flex items-center gap-2 justify-end">
                <span className="text-4xs uppercase tracking-wider font-extrabold opacity-60">
                  Sort Order:
                </span>
                <div className="p-0.5 rounded-lg flex items-center text-3xs border border-[var(--border)] bg-transparent">
                  <button
                    onClick={() => setSortBy('name')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
                      sortBy === 'name'
                        ? 'bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/20 font-black'
                        : 'text-[var(--text)] opacity-70 hover:opacity-100 font-normal'
                    }`}
                    style={{ touchAction: 'manipulation' }}
                  >
                    Alphabetical
                  </button>
                  <button
                    onClick={() => setSortBy('category')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
                      sortBy === 'category'
                        ? 'bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/20 font-black'
                        : 'text-[var(--text)] opacity-70 hover:opacity-100 font-normal'
                    }`}
                    style={{ touchAction: 'manipulation' }}
                  >
                    Category
                  </button>
                </div>
              </div>
            </div>

            {/* Tags Cloud Filter Panel */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <SlidersHorizontal className="w-3 h-3 text-[var(--accent)]" />
                <span className="text-4xs uppercase tracking-widest font-extrabold opacity-70">
                  Filter by Specialised Hashtags (Select one):
                </span>
                {selectedTag && (
                  <button 
                    onClick={() => setSelectedTag(null)}
                    className="text-4xs font-black text-rose-500 hover:underline inline-flex items-center gap-0.5 pointer-events-auto cursor-pointer"
                    style={{ touchAction: 'manipulation' }}
                  >
                    [Clear Tag Filter X]
                  </button>
                )}
              </div>

              {/* Scrollable / wrapped tags cloud */}
              <div className="flex flex-wrap gap-1 md:max-h-24 overflow-y-auto pr-1">
                {allTags.map((tag) => {
                  const isCurrent = selectedTag === tag;
                  return (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(isCurrent ? null : tag)}
                      className={`text-4xs px-2.5 py-1 rounded-lg border transition-all duration-150 font-medium cursor-pointer ${
                        isCurrent
                          ? 'bg-[var(--accent)]/20 border-[var(--accent)] text-[var(--accent)] shadow-[var(--neon-glow)] font-bold'
                          : 'bg-transparent text-[var(--text)] opacity-75 border-[var(--border)] hover:border-[var(--accent)] hover:opacity-100 font-normal'
                      }`}
                      style={{ touchAction: 'manipulation' }}
                    >
                      #{tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active filters breadcrumb bar */}
            {(selectedCategory !== 'All' || selectedTag || searchQuery) && (
              <div className="pt-3 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3 text-4xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-extrabold uppercase tracking-wider opacity-65">Active Filters:</span>
                  
                  {selectedCategory !== 'All' && (
                    <span className="px-2 py-0.5 rounded-md border font-extrabold bg-[var(--accent)]/10 border-[var(--accent)]/30 text-[var(--accent)]">
                      View: {selectedCategory}
                    </span>
                  )}

                  {selectedTag && (
                    <span className="px-2 py-0.5 rounded-md border font-extrabold bg-[var(--accent)]/10 border-[var(--accent)]/30 text-[var(--accent)]">
                      Tag: #{selectedTag}
                    </span>
                  )}

                  {searchQuery && (
                    <span className="px-2 py-0.5 rounded-md border font-extrabold bg-[var(--accent)]/10 border-[var(--accent)]/30 text-[var(--accent)]">
                      Search: "{searchQuery}"
                    </span>
                  )}
                </div>

                <button
                  onClick={handleResetFilters}
                  className="cursor-pointer inline-flex items-center gap-1 py-1 px-3 rounded-lg border text-4xs uppercase tracking-widest font-black text-rose-500 hover:bg-rose-500/10 border-rose-500/20 active:scale-95 transition-all"
                  title="Reset filters back to default"
                  style={{ touchAction: 'manipulation' }}
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                  <span>Reset Filters</span>
                </button>
              </div>
            )}

          </div>
        </section>

        {/* WEBSITE REPOSITORY MAIN DISPLAY GRID */}
        <section className="space-y-4 flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                <h2 className="text-2xs uppercase tracking-widest font-black opacity-80">
                  {selectedCategory === 'All' ? 'Complete Catalogue Database' : selectedCategory} ({filteredWebsites.length} items)
                </h2>
              </div>
            </div>

            <AnimatePresence mode="popLayout">
              {filteredWebsites.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {filteredWebsites.map((website) => (
                    <WebsiteCard
                      key={website.id}
                      website={website}
                      isDark={isDark}
                      isFavourite={favourites.includes(website.id)}
                      onToggleFavourite={handleToggleFavourite}
                      onTagClick={(tag) => setSelectedTag(tag)}
                    />
                  ))}
                </motion.div>
              ) : (
                /* No matching items visual placeholder */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 px-4 rounded-2xl border border-[var(--border)] text-center bg-[var(--card)]/20"
                >
                  <div className="max-w-md mx-auto space-y-3">
                    <div className="w-12 h-12 rounded-full border border-[var(--border)] mx-auto flex items-center justify-center text-[var(--accent)] bg-[var(--card)]">
                      <HelpCircle className="w-6 h-6 animate-pulse" />
                    </div>
                    <h3 className="text-sm font-bold text-[var(--text)]">No Registry Items Match Filters</h3>
                    <p className="text-4xs leading-relaxed opacity-75">
                      We could not find any registry items matching your current filters or searching parameters. Try adjusting your search or clearing chosen tag tags.
                    </p>
                    <button
                      onClick={handleResetFilters}
                      className="cursor-pointer inline-flex items-center gap-1.5 py-2 px-4 rounded-xl border font-bold text-4xs shadow-xs transition-all active:scale-95 select-none bg-[var(--accent)]/15 border-[var(--accent)]/30 text-[var(--accent)]"
                      style={{ minHeight: '44px', touchAction: 'manipulation' }}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Clear Search & Filters</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </main>
    </div>
  );
}
