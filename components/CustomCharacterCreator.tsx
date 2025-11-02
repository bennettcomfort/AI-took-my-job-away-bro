import { useState } from 'react'
import { Character } from '@/types/character'

interface CustomCharacterCreatorProps {
  onCreateCharacter: (character: Character) => void
  onCancel: () => void
}

const emojiOptions = ['🤖', '👾', '🦄', '🐉', '🦊', '🐺', '🦁', '🐼', '🐨', '🐸', '🦉', '🦅', '🦋', '🌟', '⚡', '🔥', '💎', '🎭', '🎨', '🎪']
const colorOptions = ['#667eea', '#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', '#6366f1']

export default function CustomCharacterCreator({ onCreateCharacter, onCancel }: CustomCharacterCreatorProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [systemPrompt, setSystemPrompt] = useState('')
  const [emoji, setEmoji] = useState('🤖')
  const [color, setColor] = useState('#667eea')

  const handleSubmit = () => {
    if (!name || !description || !systemPrompt) {
      alert('Please fill in all fields')
      return
    }

    const newCharacter: Character = {
      id: `custom-${Date.now()}`,
      name,
      emoji,
      description,
      systemPrompt,
      color,
    }

    onCreateCharacter(newCharacter)
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Create Custom Character</h2>

        <div style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Character Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Wise Wizard"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of the character"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Personality & Behavior</label>
            <textarea
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
              placeholder="Describe how this character should act, speak, and respond. Be specific!"
              style={styles.textarea}
              rows={4}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Choose Emoji</label>
            <div style={styles.emojiGrid}>
              {emojiOptions.map((e) => (
                <div
                  key={e}
                  onClick={() => setEmoji(e)}
                  style={{
                    ...styles.emojiOption,
                    ...(emoji === e ? styles.emojiSelected : {}),
                  }}
                >
                  {e}
                </div>
              ))}
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Choose Color</label>
            <div style={styles.colorGrid}>
              {colorOptions.map((c) => (
                <div
                  key={c}
                  onClick={() => setColor(c)}
                  style={{
                    ...styles.colorOption,
                    backgroundColor: c,
                    ...(color === c ? styles.colorSelected : {}),
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div style={styles.buttonGroup}>
          <button onClick={onCancel} style={styles.cancelButton}>
            Cancel
          </button>
          <button onClick={handleSubmit} style={styles.createButton}>
            Create Character
          </button>
        </div>
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
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
  modal: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  title: {
    margin: '0 0 24px 0',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#374151',
  },
  input: {
    padding: '12px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  textarea: {
    padding: '12px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '15px',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  },
  emojiGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: '8px',
  },
  emojiOption: {
    fontSize: '28px',
    padding: '8px',
    cursor: 'pointer',
    textAlign: 'center',
    borderRadius: '8px',
    border: '2px solid transparent',
    transition: 'all 0.2s',
  },
  emojiSelected: {
    border: '2px solid #667eea',
    backgroundColor: '#f3f4f6',
    transform: 'scale(1.1)',
  },
  colorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: '8px',
  },
  colorOption: {
    width: '100%',
    aspectRatio: '1',
    borderRadius: '8px',
    cursor: 'pointer',
    border: '2px solid transparent',
    transition: 'all 0.2s',
  },
  colorSelected: {
    border: '2px solid #1f2937',
    transform: 'scale(1.15)',
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    marginTop: '24px',
  },
  cancelButton: {
    flex: 1,
    padding: '12px',
    backgroundColor: '#f3f4f6',
    color: '#374151',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  createButton: {
    flex: 1,
    padding: '12px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
}
