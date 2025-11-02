import { Character, predefinedCharacters } from '@/types/character'

interface CharacterSelectorProps {
  selectedCharacter: Character
  onSelectCharacter: (character: Character) => void
  onCreateCustom: () => void
  customCharacters: Character[]
}

export default function CharacterSelector({
  selectedCharacter,
  onSelectCharacter,
  onCreateCustom,
  customCharacters
}: CharacterSelectorProps) {
  const allCharacters = [...predefinedCharacters, ...customCharacters]

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>Choose Your AI Character</h3>
        <button onClick={onCreateCustom} style={styles.customButton}>
          ✨ Create Custom
        </button>
      </div>

      <div style={styles.grid}>
        {allCharacters.map((character) => (
          <div
            key={character.id}
            onClick={() => onSelectCharacter(character)}
            style={{
              ...styles.card,
              ...(selectedCharacter.id === character.id ? styles.cardSelected : {}),
              borderColor: character.color,
            }}
          >
            <div style={styles.emoji}>{character.emoji}</div>
            <div style={styles.name}>{character.name}</div>
            <div style={styles.description}>{character.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '24px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxHeight: '70vh',
    overflowY: 'auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1f2937',
  },
  customButton: {
    padding: '8px 16px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '16px',
  },
  card: {
    padding: '16px',
    border: '3px solid',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  cardSelected: {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
  },
  emoji: {
    fontSize: '40px',
    marginBottom: '8px',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '14px',
    marginBottom: '4px',
    color: '#1f2937',
  },
  description: {
    fontSize: '12px',
    color: '#6b7280',
  },
}
