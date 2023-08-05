import { useState, useEffect, useCallback } from "react";
import Avatar from 'react-avatar';
import {EditorView, basicSetup} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"

export default function Editor() {
  const [connections, setConnections] = useState([{
    socketId: 1,
    username: 'User 1'
  },
  {
    socketId: 2,
    username: 'User 2'
  }]);
  const [element, setElement] = useState<HTMLElement>();
  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;
  
    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;
  
    const view = new EditorView({
      extensions: [basicSetup, javascript()],
      parent: element,
    });
  
    return () => view.destroy();
  }, [element]);

  return (
    <div>
      <aside>
        <img src="https://placehold.co/100x50" alt="logo" />

        <div>
          <h5>Connected</h5>
          <div>
            {
              connections.map(connection => {
                return (
                  <div key={connection.socketId}>
                    <Avatar name={connection.username} size="45px" round='10px' />
                    <span>{connection.username}</span>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div>
          <button>Copy ROOM ID</button>
          <button>Leave</button>
        </div>
      </aside>

      {/* editor */}
      <div ref={ref}>
      </div>
    </div>
  )
}