'use client'
import React, { useState } from 'react';
import { useAppContext } from '@/app/Provider';
import { IoChatbubbleEllipses, IoClose } from 'react-icons/io5';

const Chat = () => {
    const { isChatOpen, toggleChat, openChat, closeChat } = useAppContext();
    const [messages, setMessages] = useState([
        { id: 1, text: "Xin chào! Tôi có thể giúp gì cho bạn?", isUser: false },
        { id: 2, text: "Tôi muốn xem các dự án gần đây", isUser: true },
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            const newMessage = {
                id: messages.length + 1,
                text: inputValue,
                isUser: true
            };
            setMessages([...messages, newMessage]);
            setInputValue('');

            // Simulate bot response
            setTimeout(() => {
                const botResponse = {
                    id: messages.length + 2,
                    text: "Cảm ơn bạn đã liên hệ! Tôi sẽ chuyển bạn đến trang dự án gần đây.",
                    isUser: false
                };
                setMessages(prev => [...prev, botResponse]);
            }, 1000);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    if (!isChatOpen) {
        return (
            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={openChat}
                    className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    title="Mở chat"
                >
                    <IoChatbubbleEllipses size={24} />
                </button>
            </div>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-purple-600 text-white rounded-t-lg">
                <h3 className="font-semibold">Chat Support</h3>
                <button
                    onClick={closeChat}
                    className="hover:bg-purple-700 p-1 rounded transition-colors"
                >
                    <IoClose size={20} />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs px-3 py-2 rounded-lg ${message.isUser
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                                }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Nhập tin nhắn..."
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                        Gửi
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat; 