import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [cookieValue, setCookieValue] = useState(null);

  useEffect(() => {
    const handleMessage = (event) => {
      // 確保訊息來自預期的源
      if (event.origin === 'https://erp.zulite.com.tw') {
        console.log('來自 iframe 的訊息:', event.data);
        setCookieValue(event.data.cookie);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <iframe
        title="Zulite ERP"
        src="https://erp.zulite.com.tw" // 指定你想要加載的 URL
        width="100%"   // 設定 iframe 的寬度
        height="800px" // 設定 iframe 的高度
        frameBorder="0" // 設定邊框
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        style={{ border: '1px solid #ccc' }}
        allowFullScreen // 允許全螢幕顯示
      ></iframe>
      </header>
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
