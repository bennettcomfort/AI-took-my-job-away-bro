'use client'

import { useState, useRef, useEffect } from 'react'
import ChatMessage from '@/components/ChatMessage'
import ChatInput from '@/components/ChatInput'
import CharacterSelector from '@/components/CharacterSelector'
import CustomCharacterCreator from '@/components/CustomCharacterCreator'
import { Character, predefinedCharacters } from '@/types/character'

export interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(predefinedCharacters[0])
  const [customCharacters, setCustomCharacters] = useState<Character[]>([])
  const [showCharacterSelector, setShowCharacterSelector] = useState(true)
  const [showCustomCreator, setShowCustomCreator] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Initialize with greeting from selected character
    setMessages([
      {
        role: 'assistant',
        content: getGreeting(selectedCharacter)
      }
    ])
  }, [selectedCharacter])

  const getGreeting = (character: Character): string => {
    const greetings: { [key: string]: string } = {
      'assistant': 'Hello! I\'m your AI assistant. How can I help you today?',
      'pirate': 'Ahoy, matey! Captain Blackbeard here, ready to help ye navigate the treacherous waters of knowledge! What be yer question?',
      'scientist': 'Greetings! Dr. Einstein here. I\'m thrilled to explore the wonders of science with you. What would you like to discover?',
      'chef': 'Bonjour! Chef Gordon here. Ready to cook up some delicious knowledge! What can I help you with today?',
      'philosopher': 'Greetings, friend. Socrates here. Let us embark on a journey of inquiry together. What questions weigh upon your mind?',
      'comedian': 'Hey there! Funny Bot reporting for duty! Ready to laugh and learn? What\'s on your mind?',
      'poet': 'Hark! Shakespeare doth greet thee. What musings or questions dance upon thy soul today?',
      'detective': 'Good day. Sherlock Holmes at your service. Present me with your mystery, and I shall apply my powers of deduction.',
      'fitness': 'Hey there, champion! Coach Max here! Ready to crush some goals? What can I help you achieve today?',
      'zen': 'Welcome, peaceful soul. Master Zen here. Let us find clarity together. What brings you to this moment?',
    }
    return greetings[character.id] || `Hello! I am ${character.name}. ${character.description} How can I help you today?`
  }

  const handleSelectCharacter = (character: Character) => {
    setSelectedCharacter(character)
    setShowCharacterSelector(false)
  }

  const handleCreateCustomCharacter = (character: Character) => {
    setCustomCharacters(prev => [...prev, character])
    setSelectedCharacter(character)
    setShowCustomCreator(false)
    setShowCharacterSelector(false)
  }

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = { role: 'user', content }
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          systemPrompt: selectedCharacter.systemPrompt,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main style={styles.main}>
      {showCharacterSelector && (
        <div style={styles.selectorOverlay}>
          <CharacterSelector
            selectedCharacter={selectedCharacter}
            onSelectCharacter={handleSelectCharacter}
            onCreateCustom={() => setShowCustomCreator(true)}
            customCharacters={customCharacters}
          />
        </div>
      )}

      {showCustomCreator && (
        <CustomCharacterCreator
          onCreateCharacter={handleCreateCustomCharacter}
          onCancel={() => setShowCustomCreator(false)}
        />
      )}

      <div style={styles.container}>
        <div style={{
          ...styles.header,
          background: `linear-gradient(135deg, ${selectedCharacter.color} 0%, ${adjustColor(selectedCharacter.color, -20)} 100%)`
        }}>
          <div style={styles.characterBadge}>
            <span style={styles.characterEmoji}>{selectedCharacter.emoji}</span>
            <span style={styles.characterName}>{selectedCharacter.name}</span>
          </div>
          <button
            onClick={() => setShowCharacterSelector(true)}
            style={styles.changeButton}
          >
            Change Character
          </button>
        </div>

        <div style={styles.messagesContainer}>
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          {isLoading && (
            <div style={styles.loadingContainer}>
              <div style={styles.loadingDot}></div>
              <div style={styles.loadingDot}></div>
              <div style={styles.loadingDot}></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </div>
    </main>
  )
}

// Helper function to adjust color brightness
function adjustColor(color: string, amount: number): string {
  const num = parseInt(color.replace('#', ''), 16)
  const r = Math.max(0, Math.min(255, (num >> 16) + amount))
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount))
  const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount))
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
  },
  selectorOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  container: {
    width: '100%',
    maxWidth: '900px',
    height: '90vh',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    color: 'white',
    padding: '20px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  characterBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  characterEmoji: {
    fontSize: '32px',
  },
  characterName: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  changeButton: {
    padding: '8px 16px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  messagesContainer: {
    flex: 1,
    overflowY: 'auto',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  loadingContainer: {
    display: 'flex',
    gap: '8px',
    padding: '16px',
    justifyContent: 'flex-start',
  },
  loadingDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#667eea',
    borderRadius: '50%',
    animation: 'bounce 1.4s infinite ease-in-out both',
  },
}
