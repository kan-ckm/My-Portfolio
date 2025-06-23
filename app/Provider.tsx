"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
    currentView: 'hero' | 'grid' | 'recent-projects';
    setCurrentView: (view: 'hero' | 'grid' | 'recent-projects') => void;
    showRecentProjects: () => void;
    showGrid: () => void;
    showHero: () => void;
    isChatOpen: boolean;
    toggleChat: () => void;
    openChat: () => void;
    closeChat: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [currentView, setCurrentView] = useState<'hero' | 'grid' | 'recent-projects'>('hero');
    const [isChatOpen, setIsChatOpen] = useState(true);

    const showRecentProjects = () => setCurrentView('recent-projects');
    const showGrid = () => setCurrentView('grid');
    const showHero = () => setCurrentView('hero');

    const toggleChat = () => setIsChatOpen(!isChatOpen);
    const openChat = () => setIsChatOpen(true);
    const closeChat = () => setIsChatOpen(false);

    const value: AppContextType = {
        currentView,
        setCurrentView,
        showRecentProjects,
        showGrid,
        showHero,
        isChatOpen,
        toggleChat,
        openChat,
        closeChat,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};