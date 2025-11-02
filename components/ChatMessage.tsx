import { Message } from '@/app/page'
import { marked } from 'marked'

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  // Configure marked to be safer
  marked.setOptions({
    breaks: true,
    gfm: true,
  })

  const renderContent = () => {
    if (isUser) {
      return <p style={styles.messageText}>{message.content}</p>
    } else {
      // Render markdown for assistant messages
      const html = marked(message.content) as string
      return <div style={styles.messageText} dangerouslySetInnerHTML={{ __html: html }} />
    }
  }

  return (
    <div style={{
      ...styles.messageContainer,
      justifyContent: isUser ? 'flex-end' : 'flex-start',
    }}>
      <div style={{
        ...styles.messageBubble,
        ...(isUser ? styles.userBubble : styles.assistantBubble),
      }}>
        <div style={styles.roleLabel}>
          {isUser ? '👤 You' : '🤖 AI'}
        </div>
        {renderContent()}
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  messageContainer: {
    display: 'flex',
    marginBottom: '8px',
  },
  messageBubble: {
    maxWidth: '70%',
    padding: '12px 16px',
    borderRadius: '12px',
    wordWrap: 'break-word',
  },
  userBubble: {
    backgroundColor: '#667eea',
    color: 'white',
    borderBottomRightRadius: '4px',
  },
  assistantBubble: {
    backgroundColor: '#f3f4f6',
    color: '#1f2937',
    borderBottomLeftRadius: '4px',
  },
  roleLabel: {
    fontSize: '12px',
    fontWeight: 'bold',
    marginBottom: '4px',
    opacity: 0.8,
  },
  messageText: {
    margin: 0,
    lineHeight: '1.5',
    fontSize: '15px',
  },
}
