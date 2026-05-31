import React from 'react';

const QuickActions = ({ onQuickMessage }) => {
  const quickMessages = [
    'How can you help me?',
    'Tell me a joke',
    'Explain AI',
  ];

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {quickMessages.map((msg, index) => (
        <button
          key={index}
          onClick={() => onQuickMessage(msg)}
          className="text-sm bg-white border border-gray-300 hover:bg-gray-50 px-3 py-1.5 rounded-full transition duration-200"
        >
          {msg}
        </button>
      ))}
    </div>
  );
};

export default QuickActions;