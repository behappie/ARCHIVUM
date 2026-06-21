/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Website } from './types';

export const WEBSITES_DATA: Website[] = [
  // (1) Personal Apps
  {
    id: 'laudato',
    name: 'LAUDATO',
    url: 'https://gemini.google.com/share/0648b1d3bd62',
    category: 'Personal Apps',
    description: 'A dedicated interactive assistant for the study of Pope Francis\'s ecological encyclical, Laudato si\', featuring customised reading structures.',
    tags: ['AI Study', 'Education', 'Ecological', 'Encyclical'],
    iconName: 'BookOpen'
  },
  {
    id: 'imaginate',
    name: 'IMAGINATE',
    url: 'https://gemini.google.com/share/7e6d28fa1dc2',
    category: 'Personal Apps',
    description: 'An interactive canvas designed to spark the imagination, prompting real-time creative visual art exploration and dynamic prompt-building.',
    tags: ['AI Prompt', 'Art', 'Creative', 'Canvas'],
    iconName: 'Sparkles'
  },
  {
    id: 'imagic',
    name: 'IMAGIC',
    url: 'https://ais-pre-w452qqkspc46mf7323ebo7-224888585323.asia-east1.run.app',
    category: 'Personal Apps',
    description: 'A powerful image creator and editor, optimised for fast rendering of colourful graphic and canvas designs.',
    tags: ['Image Generator', 'Graphic Design', 'Optimised', 'Rendering'],
    iconName: 'Play'
  },
  {
    id: 'slidedna',
    name: 'SlideDNA',
    url: 'https://ais-pre-ovmms4fsegvm45v7ajyzkf-224888585323.asia-east1.run.app',
    category: 'Personal Apps',
    description: 'An expert presentation analyser that dissects the design DNA of slides to offer visual layout suggestions and structured templates.',
    tags: ['Presentation', 'Analyser', 'Template', 'Slide Design'],
    iconName: 'Cpu'
  },
  {
    id: 'deckorate',
    name: 'DECKORATE',
    url: 'https://gemini.google.com/share/247ba5f61b55',
    category: 'Personal Apps',
    description: 'A clever helper designed to decorate presentation slides with balanced layout systems and colourful themes style sheets.',
    tags: ['Slide Design', 'Aesthetics', 'Layout Engine', 'Creator'],
    iconName: 'Palette'
  },
  {
    id: 'deckmorphosis',
    name: 'Deck-Morphosis',
    url: 'https://gemini.google.com/share/29105e879c3e',
    category: 'Personal Apps',
    description: 'An AI assistant focused on transforming presentation formats, morphing static files into responsive slide structures.',
    tags: ['Slide Design', 'Layout Engine', 'AI Assistant', 'Transformation'],
    iconName: 'RefreshCw'
  },
  {
    id: 'edulens',
    name: 'EduLens',
    url: 'https://gemini.google.com/share/b061aa8499e7',
    category: 'Personal Apps',
    description: 'A smart educational lens designed to analyse complex articles, extract fundamental ideas, and customise key takeaways.',
    tags: ['Education', 'AI Reader', 'Analyser', 'Study Resource'],
    iconName: 'GraduationCap'
  },
  {
    id: 'expenseocr',
    name: 'Expense OCR',
    url: 'https://ais-pre-bbqkqjrlsbrnnwm2a7f5ii-224888585323.asia-east1.run.app',
    category: 'Personal Apps',
    description: 'An intelligent receipts scanning application utilising character recognition to categorise, process, and track your financial transactions.',
    tags: ['OCR Scanner', 'Finance Tracker', 'Analyser', 'Receipts'],
    iconName: 'Receipt'
  },
  {
    id: 'econparser',
    name: 'EconParser',
    url: 'https://econparser-830231250806.asia-east1.run.app',
    category: 'Personal Apps',
    description: 'A specialised tool designed for rapid parsing of economic documents, extracting structured intelligence, and analysing financial dataset components.',
    tags: ['Economics', 'Parser', 'Analyser', 'Dataset'],
    iconName: 'TrendingUp'
  },

  // (2) Gemini Gems
  {
    id: 'chefessay',
    name: 'Master Chef 4 Essay (a)',
    url: 'https://gemini.google.com/gem/f4b2d19affa9',
    category: 'Gemini Gems',
    description: 'A customised Gemini custom instructions gem tailored to draft descriptive essays and notes on master chef standards.',
    tags: ['Gemini Gem', 'Culinary Arts', 'Writing Helper', 'Education'],
    iconName: 'Utensils'
  },
  {
    id: 'slidechef',
    name: 'Essay (b) Slide Chef',
    url: 'https://gemini.google.com/gem/6b119016daff',
    category: 'Gemini Gems',
    description: 'A specialised presentation cooking assistant designed to serve delicious slide structures and creative content sections.',
    tags: ['Gemini Gem', 'Slide Content', 'Culinary Theme', 'Content Planner'],
    iconName: 'Flame'
  },
  {
    id: 'geminstructions',
    name: 'Gem Instructions',
    url: 'https://gemini.google.com/gem/c741948867ce',
    category: 'Gemini Gems',
    description: 'An essential master reference guide packed with expert instructions and structures to build optimal customised Gems.',
    tags: ['Gemini Gem', 'System Prompt', 'Reference', 'Instruction Template'],
    iconName: 'Layers'
  },
  {
    id: 'promptgenie',
    name: 'Prompt Genie',
    url: 'https://gemini.google.com/gem/a87013a59b36',
    category: 'Gemini Gems',
    description: 'An expert prompt expansion manager that upgrades basic queries into highly descriptive directives for generative models.',
    tags: ['Gemini Gem', 'Prompt Optimiser', 'Creative Assistant'],
    iconName: 'Sparkle'
  },
  {
    id: 'namecrafter',
    name: 'Name Crafter',
    url: 'https://gemini.google.com/gem/d22801e0333a',
    category: 'Gemini Gems',
    description: 'A brand name synthesiser configured to craft catchphrase ideas, elegant logos, and custom domain names.',
    tags: ['Gemini Gem', 'Branding', 'Name Generator', 'Creator'],
    iconName: 'PenTool'
  },
  {
    id: 'srtist',
    name: 'The SRT-ist',
    url: 'https://gemini.google.com/gem/987b4e410147',
    category: 'Gemini Gems',
    description: 'A clever dialogue parser and caption creator configured to synchronise and edit SRT subtitle files effortlessly.',
    tags: ['Gemini Gem', 'Subtitles', 'Video Tool', 'Editor'],
    iconName: 'Type'
  },
  {
    id: 'deckbackground',
    name: 'Deck Background',
    url: 'https://gemini.google.com/gem/864533fb3200',
    category: 'Gemini Gems',
    description: 'A digital backdrop architect specialised in styling presentation slide sheets with sleek aesthetic textures.',
    tags: ['Gemini Gem', 'Slide Styling', 'Abstract Art', 'Design'],
    iconName: 'Image'
  },
  {
    id: 'reversepicasso',
    name: 'Reverse Picasso',
    url: 'https://gemini.google.com/gem/961b4189afc6',
    category: 'Gemini Gems',
    description: 'An artwork analyser that deconstructs illustrations to generate elaborate text specifications and colour palettes.',
    tags: ['Gemini Gem', 'Artwork Analyser', 'Reverse Engineering', 'Aesthetics'],
    iconName: 'Compass'
  },
  {
    id: 'pixon',
    name: 'PIXON',
    url: 'https://gemini.google.com/gem/145afaf763b2',
    category: 'Gemini Gems',
    description: 'A Retro game sprite designer and retro bitmap companion configured to layout custom 8-bit icons.',
    tags: ['Gemini Gem', 'Pixel Art', 'Nostalgia', 'Creator'],
    iconName: 'Gamepad2'
  },
  {
    id: 'mailscribe',
    name: 'Mail Scribe',
    url: 'https://gemini.google.com/gem/edf03d974b2a',
    category: 'Gemini Gems',
    description: 'An AI assistant engineered to draft professional electronic correspondence, replies, and circular communications.',
    tags: ['Gemini Gem', 'Communications', 'Mail Creator', 'Productivity'],
    iconName: 'Mail'
  },

  // (3) External Sites
  {
    id: 'starremover',
    name: 'Meiko Gemini Remover',
    url: 'https://meikochang.github.io/line-apng/star-remover',
    category: 'External Sites',
    description: 'A precise custom script by Meiko engineered to identify and clean up rating stars and visual components in frames.',
    tags: ['Meiko Tool', 'APNG Cleaner', 'Watermark Remover'],
    iconName: 'Scissors'
  },
  {
    id: 'infographicsprompt',
    name: 'Meiko NBLM Infographics Prompt Generator',
    url: 'https://meikochang.github.io/Information-Charts-prompt',
    category: 'External Sites',
    description: 'A prompt engineering helper to draft systematic instructions for generating infographic structures in NotebookLM.',
    tags: ['Meiko Tool', 'Infographics', 'NotebookLM', 'Prompt Generator'],
    iconName: 'LineChart'
  },
  {
    id: 'pptprompt',
    name: 'Meiko PPT Prompt Generator',
    url: 'https://meikochang.github.io/ppt-prompt',
    category: 'External Sites',
    description: 'A specialised wizard by Meiko for compiling slide layout prompts that structure presentations perfectly.',
    tags: ['Meiko Tool', 'Slide Design', 'Presentation', 'Prompt Generator'],
    iconName: 'Files'
  },
  {
    id: 'lineimage',
    name: 'Meiko Line Image Assistant',
    url: 'https://meikochang.github.io/line-apng',
    category: 'External Sites',
    description: 'A highly functional sticker layout compression tool developed to build premium APNG and PNG assets.',
    tags: ['Meiko Tool', 'Asset Compressor', 'APNG', 'Animator'],
    iconName: 'Smile'
  },
  {
    id: 'slidecraftai',
    name: 'Slide Craft AI',
    url: 'https://gemini.google.com/share/c86fb6de9fa0',
    category: 'External Sites',
    description: 'An advanced AI-powered service specialising in organizing content into highly aesthetic, printable slide layouts.',
    tags: ['Slide Design', 'Curator', 'Structure Maker'],
    iconName: 'Briefcase'
  },
  {
    id: 'easyviz',
    name: 'EasyViz',
    url: 'https://gemini.google.com/share/12572faa8d29',
    category: 'External Sites',
    description: 'A clean statistical graph manager that turns raw sheets database rows into eye-safe colourful visual charts.',
    tags: ['Data Visualisation', 'Charts Maker', 'Statistical'],
    iconName: 'BarChart3'
  },
  {
    id: 'deckedit',
    name: 'DeckSlides Edit',
    url: 'https://deckedit.com',
    category: 'External Sites',
    description: 'An interactive web-based presentation deck canvas designed for micro-adjustments, layout customising, and asset exports.',
    tags: ['Slide Design', 'Editor', 'Presenter'],
    iconName: 'Edit3'
  },
  {
    id: 'notebooklmslide',
    name: 'NotebookLM Slide Edit',
    url: 'https://notebooklm.10xboost.org/en',
    category: 'External Sites',
    description: 'A custom tool constructed to export research elements from NotebookLM into presentation schemas.',
    tags: ['NotebookLM', 'Slide Editor', 'Research Organiser'],
    iconName: 'Laptop'
  },
  {
    id: 'slidedeckcleaner',
    name: 'SlideDeck Cleaner',
    url: 'https://www.slidedeckcleaner.com',
    category: 'External Sites',
    description: 'A clever layout cleanup application configured to detect misalignment and strip formatting bloat.',
    tags: ['Slide Design', 'Cleanup Tool', 'File Optimisation'],
    iconName: 'Eraser'
  },
  {
    id: 'variousai',
    name: 'Various AI Tools',
    url: 'https://filedn.com/laMtL9jmKf7JrDEQG0A6OPy/html/list/list-out.html',
    category: 'External Sites',
    description: 'A comprehensive hosted page of curated reference resources, containing links and scripts for various models.',
    tags: ['AI Compilation', 'Directory', 'Custom Scripts'],
    iconName: 'FolderClosed'
  },
  {
    id: 'videoeditor',
    name: 'Video Editor',
    url: 'https://app.openreel.video',
    category: 'External Sites',
    description: 'A high-fidelity web video suite that helps users edit clips, adjust speed levels, and stitch layouts seamlessly.',
    tags: ['Video Tool', 'Editor', 'Video Suite'],
    iconName: 'Video'
  },
  {
    id: 'wavacity',
    name: 'Wavacity',
    url: 'https://wavacity.com',
    category: 'External Sites',
    description: 'A web-based digital audio software representing an online Audacity clone for editing multi-track sound files.',
    tags: ['Audio Sound', 'Editor', 'Analyser'],
    iconName: 'Sliders'
  },
  {
    id: 'audiomass',
    name: 'AudioMass',
    url: 'https://audiomass.co',
    category: 'External Sites',
    description: 'An interactive audio waveform editor that loads file soundscapes to cut, modify, and master tracks.',
    tags: ['Audio Sound', 'Waveform', 'Editor'],
    iconName: 'Volume2'
  },
  {
    id: 'wpspdf',
    name: 'WPS PDF Tools',
    url: 'https://pdf.wps.com',
    category: 'External Sites',
    description: 'An online document suite offering conversion filters, page merging, and password removals for PDF sheets.',
    tags: ['PDF Tool', 'Document Editor', 'File Format'],
    iconName: 'FileSpreadsheet'
  },
  {
    id: 'pdf2u',
    name: 'PDF2U',
    url: 'https://pdf2u.com/compress-pdf',
    category: 'External Sites',
    description: 'An immediate document slimming application constructed to reduce heavy vector and raster PDFs.',
    tags: ['PDF Tool', 'Compression', 'Optimise Size'],
    iconName: 'ShieldAlert'
  },
  {
    id: 'i2pdf',
    name: 'i2PDF',
    url: 'https://www.i2pdf.com/compress-pdf',
    category: 'External Sites',
    description: 'A secure image and documents manager built to compress page frames and format photo files into standard PDFs.',
    tags: ['PDF Tool', 'Image to PDF', 'Compression'],
    iconName: 'FileImage'
  },
  {
    id: 'cleverpdf',
    name: 'CleverPDF',
    url: 'https://www.cleverpdf.com/compress-pdf',
    category: 'External Sites',
    description: 'A reliable toolkit packed with 44 distinct converters and helpers designed to handle and shrink file structures.',
    tags: ['PDF Tool', 'Compression', 'Multi-functional'],
    iconName: 'Wrench'
  },
  {
    id: 'hipdf',
    name: 'HiPDF',
    url: 'https://www.hipdf.com/compress-pdf',
    category: 'External Sites',
    description: 'An elegant cloud-centric solution to shrink files, apply OCR conversions, and sign document layouts.',
    tags: ['PDF Tool', 'Compression', 'OCR Scanner'],
    iconName: 'CloudLightning'
  },
  {
    id: 'allinpdf',
    name: 'AllinPDF',
    url: 'https://allinpdf.com/compress-pdf',
    category: 'External Sites',
    description: 'A web converter designed for instant document type manipulation and file reduction via drag-and-drop.',
    tags: ['PDF Tool', 'Compression', 'Drag & Drop'],
    iconName: 'Share2'
  },
  {
    id: 'freepdfconvert',
    name: 'FreePDFConvert',
    url: 'https://www.freepdfconvert.com/compress-pdf',
    category: 'External Sites',
    description: 'A trusted utility serving as a high-fidelity document converter to compress, split, and protect documents.',
    tags: ['PDF Tool', 'Compression', 'Document Security'],
    iconName: 'ShieldCheck'
  },
  {
    id: 'pdf2go',
    name: 'PDF2Go',
    url: 'https://www.pdf2go.com/compress-pdf',
    category: 'External Sites',
    description: 'A robust online PDF customiser loaded with page sorting, resizing templates, and advanced compression algorithms.',
    tags: ['PDF Tool', 'Compression', 'Page Organiser'],
    iconName: 'FolderHeart'
  },

  // (4) Image Generation + Edit
  {
    id: 'editbanana',
    name: 'Edit Banana',
    url: 'https://github.com/BIT-DataLab/Edit-Banana',
    category: 'Image Generation + Edit',
    description: 'An innovative project designed to crop, customise, and edit targeted segments of images, featuring playful masking layers.',
    tags: ['Image Editor', 'Repository', 'Open Source', 'Masking'],
    iconName: 'Compass'
  },
  {
    id: 'zimageturbo',
    name: 'Z-Image Turbo',
    url: 'https://huggingface.co/spaces/mrfakename/Z-Image-Turbo',
    category: 'Image Generation + Edit',
    description: 'A lightning-fast generative workspace executing instant text-to-image queries in fractions of a second.',
    tags: ['Image Generator', 'Real-time', 'Hugging Face Space'],
    iconName: 'Zap'
  },
  {
    id: 'qwenimage',
    name: 'Qwen Image',
    url: 'https://huggingface.co/spaces/Qwen/Qwen-Image-2512',
    category: 'Image Generation + Edit',
    description: 'A powerful vision-language playground that identifies graphic attributes and creates detailed captions.',
    tags: ['Vision Model', 'Analyser', 'Hugging Face Space'],
    iconName: 'Eye'
  },
  {
    id: 'qwenedit',
    name: 'Qwen Edit',
    url: 'https://huggingface.co/spaces/Qwen/Qwen-Image-Edit-2511',
    category: 'Image Generation + Edit',
    description: 'A state-of-the-art multi-modal translation and region-based canvas canvas editor designed for precise output adjustments.',
    tags: ['Image Editor', 'Vision Model', 'Hugging Face Space'],
    iconName: 'Edit2'
  },
  {
    id: 'perchanceart',
    name: 'AI Image Generator',
    url: 'https://perchance.org/ai-text-to-image-generator',
    category: 'Image Generation + Edit',
    description: 'A fully open web interface to test various neural art parameters and design abstract illustrations.',
    tags: ['Image Generator', 'Free Space', 'Art Creator'],
    iconName: 'Brush'
  },
  {
    id: 'magiceraser',
    name: 'Magic Eraser',
    url: 'https://magiceraser.org',
    category: 'Image Generation + Edit',
    description: 'A brush tool built to remove unwanted elements, star icons, and watermarks from frames instantly.',
    tags: ['Image Cleaner', 'Eraser Tool', 'Aesthetic Optimise'],
    iconName: 'Trash2'
  },
  {
    id: 'nblmwatermark',
    name: 'NBLM Watermark Remover',
    url: 'https://notebooklmremover.com/en',
    category: 'Image Generation + Edit',
    description: 'A specialised watermarks remover focused on purging NotebookLM text watermarks and background stars.',
    tags: ['Watermark Remover', 'Cleaner', 'Optimise Graphic'],
    iconName: 'Maximize2'
  }
];
