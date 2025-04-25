'use client';

import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface ProjectTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function ProjectTabs({ tabs, activeTab, onTabChange }: ProjectTabsProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex space-x-1 p-1 bg-card-bg rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out ${
              activeTab === tab.id
                ? 'bg-highlight text-foreground shadow-sm'
                : 'text-secondary-text hover:text-foreground'
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
} 