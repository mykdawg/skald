'use client';
import { wsconnect } from '@nats-io/nats-core';
import { useEffect, useRef, useState } from 'react';
import styles from './StoryReadPanel.module.css';

function StoryText({ txt }: { txt: string }) {
  const massagedText = txt.replace(/\n/g, '<br>');
  return <li dangerouslySetInnerHTML={{__html: massagedText}} />;
}

export function StoryReadPanel({subject}: {subject: string}) {
  const panelRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<string[]>([]);
  useEffect(() => {
    wsConnect();
  }, []);

  function scrollToBottom(panelRef: React.RefObject<HTMLDivElement | null>) {
    console.log(panelRef.current);
    console.log(panelRef.current.scrollHeight);
    console.log(panelRef.current.scrollTop);
    if(panelRef.current) {
      // panelRef.current.scrollTo({
      //   top: panelRef.current.scrollHeight + 300,
      //   behavior: 'smooth' // Optional for smooth scrolling
      // });
      panelRef.current.scrollTop = panelRef.current.scrollHeight;
    }
  }

  async function wsConnect() {
    const nc = await wsconnect({ servers: 'ws://localhost:8080' });
    const sub = nc.subscribe(subject, {
      callback: (err, msg) => {
        if (err) {
          console.error(err);
        } else {
          setMessages((currentMessages) => [
            ...currentMessages,
            new TextDecoder().decode(msg.data),
          ]);
          // showOverlay.set(false);
          scrollToBottom(panelRef);    

        }

      },
    });

  }
  

  return (
    <div ref={panelRef} className={styles['message-panel']}>
      <ul>
        {messages.map((item, index) => (
          <StoryText key={index} txt={item} />
          // <li key={index}>{item.replace(/\n/g, "<br>")}</li>
        ))}
      </ul>
    </div>
  )
}