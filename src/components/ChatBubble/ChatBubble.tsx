// ChatBubble.tsx
import React, { useState } from 'react';
import styles from './ChatBubble.module.scss';
import { generateText } from '../../api/generateText'; // added import

const ChatBubble: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse('');
    try {
      const text = await generateText(prompt); // use generateText API call instead of fetch
      setResponse(text || '');
    } catch (err) {
      setError('Failed to get response');
    } finally {
      setLoading(false);
    }
  };
  console.log(response, 'response');
  return (
    <div className={styles.chatBubbleContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          className={styles.textArea}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          required
        />
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {error && <div className={styles.error}>{error}</div>}
      {response && <div className={styles.response}>{response}</div>}
    </div>
  );
};

export default ChatBubble;
