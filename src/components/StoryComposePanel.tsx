'use client';
import Form from 'next/form';
import { useState } from 'react'
import styles from './StoryComposePanel.module.css';

async function sendMessage({ url, message }: { url: string, message: string }) {

  // showOverlay.set(true);
  try {
    console.log(`calling send message: ${message}`)
    console.log(url)
    const subject = '';
    const res = await fetch(url + '/story', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: subject,
        name: `${message}`,
      }),
    });
    console.log(res)
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

export function StoryComposePanel({ url }: { url: string }) {
  const [message, setMessage] = useState('')  

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value)
  }

  return (
    <Form className={styles.form} action="/" onSubmit={(e) => {
      e.preventDefault();
      sendMessage({
        url,
        message
      });
    }}>
      <textarea name="message" className={styles.textarea} onChange={(e) => handleChange(e)}></textarea>
      <button type="submit" className={styles.button}>Submit</button>
    </Form>
  )
}