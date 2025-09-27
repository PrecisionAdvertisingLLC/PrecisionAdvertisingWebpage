// frontend/src/components/SidebarChat.tsx
import { useState } from 'react'

export default function SidebarChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSend = () => {
    // TODO: send `message` to your AI agent
    console.log('Sending message:', message)
    setMessage('')
  }

  // Minimized state: small corner button
  if (!isOpen) {
    return (
      <button
        className="chat-toggle"
        onClick={() => setIsOpen(true)}
      >
        Chat Now
      </button>
    )
  }

  // Expanded state: full sidebar
  return (
    <aside className="sidebar-chat open">
      <div className="chat-header">
        <button
          className="chat-close"
          onClick={() => setIsOpen(false)}
          aria-label="Minimize chat"
        >
          –
        </button>
      </div>

      <div className="chat-body">
        <h2>AI Chat Support</h2>
        <p>Have questions? Our AI assistant is here to help.</p>
      </div>

      <div className="chat-footer">
        <textarea
          className="chat-input"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="chat-send"
          onClick={handleSend}
          disabled={!message.trim()}
        >
          Send
        </button>
      </div>
    </aside>
  )
}
