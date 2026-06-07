/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CategoryType = 'Personal Apps' | 'Gemini Gems' | 'External Sites' | 'Image Generation + Edit';

export interface Website {
  id: string;
  name: string;
  url: string;
  category: CategoryType;
  description: string;
  tags: string[];
  iconName: string;
}

export interface Statistics {
  totalCount: number;
  personalAppsCount: number;
  geminiGemsCount: number;
  externalSitesCount: number;
  imageGenEditCount: number;
  favouriteCount: number;
}
